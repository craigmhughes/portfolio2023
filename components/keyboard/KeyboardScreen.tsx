import {Physics, usePlane} from '@react-three/cannon';
import {OrthographicCamera, Plane} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';

import Image from 'next/image';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import type {Dispatch, ReactElement, SetStateAction} from 'react';
import {ArrowDownRight, X} from 'react-feather';
import FocusLock from 'react-focus-lock';
import {MeshLambertMaterial} from 'three';

import Button from '@/components/Button';
import Header from '@/components/Header';
// import IntroText from '@/components/IntroText';
import Keyboard from '@/components/keyboard/Keyboard';
import {SearchResult} from '@/components/search-results';
import profile from '@/public/profile.jpg';
import styles from '@/styles/Home.module.css';

import {TypedMessage} from '../TypedMessage';
import projects from '../homepage/Projects';
import type {Project} from '../homepage/Projects';

function Ground({...props}: any): JSX.Element {
    const [ref] = usePlane(() => ({rotation: [-Math.PI / 2, 0, 0], ...props}));

    return <Plane {...props} ref={ref} />;
}

function isMatchedResult(result: Project, searchText: string): boolean {
    const formattedSearchText = searchText.toLowerCase().replace(/ /g, '');
    if (formattedSearchText.length < 2) {
        return false;
    }

    const checkKey = (k: keyof typeof result): boolean =>
        result[k]?.toString().toLowerCase().replace(/ /g, '').includes(formattedSearchText) ?? false;
    const hasTopic = result.tags?.map((j) => j.toLowerCase().includes(formattedSearchText)).includes(true);

    return [...['summary', 'title'].map((k) => checkKey(k as keyof typeof result)), hasTopic].includes(true);
}

// Dark = #000001; Light = #222222;
const planeMaterial = new MeshLambertMaterial({});

interface KeyboardScreenInterface {
    setActiveProject: Dispatch<SetStateAction<Project | undefined>>;
}

export default function KeyboardScreen({setActiveProject}: KeyboardScreenInterface): ReactElement {
    const groundRef = useRef();
    // const [subtitleText, setSubtitleText] = useState('');
    const subtitleText = '';

    const cmdBox = useRef<HTMLInputElement>(null);
    const [cmdText, setCmdText] = useState('');
    const [cmdCtrl, setCmdCtrl] = useState<[string, string]>(['', '']);
    const cmdState = useMemo(() => {
        if (['control', 'command'].includes(cmdCtrl[1].toLowerCase()) && cmdCtrl[0].toLowerCase() === 'a') {
            return 'bg-slate-500 text-black';
        }

        return '';
    }, [cmdCtrl]);

    const updateKeys = useCallback(
        (e: KeyboardEvent) => {
            const {key} = e;
            if (key === cmdCtrl[0] && key === cmdCtrl[1]) return;
            setCmdCtrl([key, cmdCtrl[0]]);
        },
        [cmdCtrl, setCmdCtrl],
    );

    useEffect(() => {
        document.addEventListener('keydown', updateKeys);
        return () => {
            document.removeEventListener('keydown', updateKeys);
        };
    }, [updateKeys]);

    // Three.js has trouble hot-reloading & requires a full refresh sometimes. Enable this to test UI changes quickly.
    const testing = false;

    return (
        /* eslint-disable-next-line */
        <div
            className="flex flex-col justify-between items-center min-h-screen "
            onClick={() => {
                if (cmdBox.current) cmdBox.current.focus();
            }}
        >
            <FocusLock>
                <input
                    type="text"
                    className="fixed bottom-5 right-5 z-20 opacity-0"
                    ref={cmdBox}
                    onChange={(e) => {
                        setCmdText(e.target.value);
                    }}
                    // eslint-disable-next-line
                    autoFocus
                />
            </FocusLock>

            <div
                className="absolute z-10 text-black w-full h-full max-w-screen-2xl px-8"
                data-testid="canvas-content-wrapper"
            >
                <Header navigation />

                <div
                    data-testid="welcome-message"
                    className={
                        'max-w-[550px] text-2xl tracking-tight font-semibold absolute bottom-[250px] left-50px] justify-center flex-col ' +
                        'card  p-8 scale-[0.9]'
                    }
                >
                    <h1 className="text-7xl my-4 tracking-tight font-bold">Hi there!</h1>
                    <p className="tracking-tighter">
                        I&apos;m Craig, a Software Engineer working in e-commerce, where I focus on delivering features
                        that make a difference for our clients.
                    </p>
                    <br />
                    <div className="chat chat-start">
                        <div className="chat-image avatar drop-shadow-xl">
                            <div className="w-10 rounded-full">
                                <Image
                                    alt="Tailwind CSS chat bubble component"
                                    src={profile.src}
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        <div className="chat-bubble bg-sky text-ice tracking-tighter text-xl shadow-xl min-w-[410px] min-h-[75px]">
                            <TypedMessage>
                                I left my keyboard here, try searching some keywords to find more out about me!
                            </TypedMessage>
                        </div>
                    </div>
                    <a
                        href="#aboutme"
                        className="badge border-0 bg-skyLight hover:bg-skyOvercast text-sky mt-8 text-lg py-4 pl-4 items-center flex"
                    >
                        Skip to the website <ArrowDownRight className="h-5 w-5 mx-2" />
                    </a>
                </div>

                {!!cmdText && (
                    <Button
                        className="absolute right-3 bottom-[70px] hover:bg-gray-800 z-20 bg-transparent border text-white font-light flex items-center gap-1 px-2"
                        emphasis="medium"
                        onClick={() => {
                            setCmdText('');
                            if (cmdBox.current) cmdBox.current.value = '';
                        }}
                    >
                        Clear <X className="relative -right-1 h-3 w-3" />
                    </Button>
                )}

                <div className="text-sm absolute bottom-[120px] right-0 max-w-lg font-normal overflow-y-scroll no-scrollbar max-h-[700px] rounded-md items-end flex flex-col">
                    {projects.map((project) => (
                        <SearchResult
                            key={project.title}
                            {...project}
                            visible={isMatchedResult(project, cmdText)}
                            setActiveProject={setActiveProject}
                        />
                    ))}
                </div>

                <div className="mockup-code bg-midnight absolute bottom-5 right-0 w-[calc(100%_-_2.5rem)] max-w-2xl">
                    <pre data-prefix="$">
                        <code className={cmdState}>{cmdText}</code>
                    </pre>
                </div>
            </div>

            {!testing && (
                <div className={`${styles.canvasWrap} z-1`}>
                    <Canvas shadows="soft">
                        {/* <ambientLight intensity={1} castShadow /> */}
                        <pointLight intensity={6} position={[60, 100, 60]} color="#3377ff" castShadow />
                        <pointLight intensity={6} position={[-120, 40, -100]} color="#ffffff" />

                        {/* <IntroText subtitleText={subtitleText} setSubtitleText={setSubtitleText} /> */}

                        <Physics gravity={[0, -40, 0]}>
                            <Keyboard
                                scale={0.08}
                                position={[-8, 80, 8]}
                                rotation-x={Math.PI / 4}
                                castShadow
                                keysPressed={subtitleText}
                            />
                            <Ground
                                ref={groundRef}
                                scale={400}
                                rotation-x={-Math.PI / 2}
                                position={[0, -7, 0]}
                                receiveShadow
                                material={planeMaterial}
                            />
                        </Physics>

                        <OrthographicCamera
                            makeDefault
                            zoom={8}
                            near={-100}
                            far={280}
                            position={[-67, 55, 50]}
                            rotation-x={-Math.PI / 4}
                            rotation-y={-Math.PI / 4}
                            rotation-z={-Math.PI / 5}
                        />

                        {/* <OrbitControls /> */}
                        {/* <Stats /> */}
                    </Canvas>
                </div>
            )}
        </div>
    );
}
