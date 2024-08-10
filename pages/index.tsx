import type {NextPage} from 'next';
import dynamic from 'next/dynamic';
import {useEffect, useState} from 'react';
import type {Dispatch, SetStateAction} from 'react';

import Layout from '@/components/Layout';
import Content from '@/components/homepage/Content';
import type {Project} from '@/components/homepage/Projects';
import KeyboardScreen from '@/components/keyboard/KeyboardScreen';

const MediaQuery = dynamic(async () => await import('react-responsive'), {
    ssr: false,
});

const DisableKeyboardOnResize = ({
    setAllowKeyboard,
}: {
    setAllowKeyboard: Dispatch<SetStateAction<boolean>>;
}): JSX.Element => {
    useEffect(() => {
        setAllowKeyboard(false);
    }, [setAllowKeyboard]);

    return <p className="sr-only">Interactive 3D Model has been disabled.</p>;
};

const Home: NextPage = (): JSX.Element => {
    const [activeProject, setActiveProject] = useState<Project>();
    const [allowKeyboard, setAllowKeyboard] = useState<boolean>(true);

    return (
        <Layout disableNav={allowKeyboard}>
            <main className="max-w-screen overflow-x-hidden">
                <MediaQuery minWidth={1080}>
                    {allowKeyboard && <KeyboardScreen setActiveProject={setActiveProject} />}
                </MediaQuery>

                <MediaQuery maxWidth={1080}>
                    <DisableKeyboardOnResize setAllowKeyboard={setAllowKeyboard} />
                </MediaQuery>

                <div className="min-h-screen w-full">
                    <Content
                        setActiveProject={setActiveProject}
                        activeProject={activeProject}
                        showIntro={!allowKeyboard}
                    />
                </div>
            </main>
        </Layout>
    );
};

export default Home;
