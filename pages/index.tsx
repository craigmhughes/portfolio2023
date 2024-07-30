import {Physics, usePlane} from '@react-three/cannon';
import {OrthographicCamera, Plane} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';

import type {NextPage} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {X} from 'react-feather';
import FocusLock from 'react-focus-lock';
import {MeshLambertMaterial} from 'three';

import Button from '@/components/Button';
// import IntroText from '@/components/IntroText';
import Keyboard from '@/components/Keyboard';
import {searchResults} from '@/components/search-results';
import type {SearchResultEntry} from '@/components/search-results';
import styles from '@/styles/Home.module.css';

function Ground({...props}: any): JSX.Element {
    const [ref] = usePlane(() => ({rotation: [-Math.PI / 2, 0, 0], ...props}));

    return <Plane {...props} ref={ref} />;
}

function isMatchedResult(result: SearchResultEntry, searchText: string): boolean {
    const checkKey = (k: keyof typeof result): boolean =>
        result[k]?.toString().toLowerCase().includes(searchText.toLowerCase()) ?? false;
    const hasTopic = result.topics?.map((j) => j.toLowerCase()).includes(searchText.toLowerCase());

    return [...['content', 'title'].map((k) => checkKey(k as keyof typeof result)), hasTopic].includes(true);
}

// Dark = #000001; Light = #222222;
const planeMaterial = new MeshLambertMaterial({});

const Home: NextPage = (): JSX.Element => {
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
    const testing = true;

    return (
        <>
            <Head>
                <title>Craig Hughes | Portfolio</title>
                <meta name="description" content="Welcome" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* eslint-disable-next-line */}
            <main
                className={styles.main}
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
                    <header className="flex items-center font-mono w-full m-auto py-6 px-2 justify-between">
                        <div className="uppercase">
                            <Link href="/">
                                <p className="text-2xl font-bold my-1">Craig Hughes</p>
                                <p className="text-xs">Software Engineer @ THG Ingenuity</p>
                            </Link>
                        </div>
                        <div>
                            <Link href="mailto:hghscraig@gmail.com" className="text-sm link">
                                hghscraig@gmail.com
                            </Link>
                        </div>
                    </header>

                    <div
                        data-testid="welcome-message"
                        className="max-w-lg text-2xl tracking-tighter font-semibold absolute bottom-[350px] left-10 items-center justify-center flex-col"
                    >
                        <h1 className="text-7xl my-4">Hi there!</h1>
                        <p className="">
                            I left my keyboard here, try searching some keywords to find more out about me!
                        </p>
                        <p className="mt-5">
                            Or, <span className="underline cursor-pointer">Skip to the website</span>
                        </p>
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

                    <div className="text-sm absolute bottom-[120px] right-0 max-w-lg font-normal overflow-y-scroll no-scrollbar max-h-[500px] rounded-md">
                        {searchResults
                            .filter((i) => (cmdText ? isMatchedResult(i, cmdText) : false))
                            .map((searchResult) => (
                                <div className="py-3 px-4 bg-white my-2 rounded" key={searchResult.title}>
                                    <p className="text-lg font-semibold">{searchResult.title}</p>
                                    <p>{searchResult.content}</p>
                                    {searchResult.icon ?? ''}

                                    <div className="flex items-end w-full justify-end px-4">
                                        <Link href="/" className="link py-1">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            ))}
                    </div>

                    <div className="mockup-code absolute bottom-5 right-0 w-[calc(100%_-_2.5rem)] max-w-2xl">
                        <pre data-prefix="$">
                            <code className={cmdState}>{cmdText}</code>
                        </pre>
                    </div>
                </div>

                {!testing && (
                    <div className={styles.canvasWrap}>
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
            </main>
        </>
    );
};

export default Home;
