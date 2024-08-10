import type {NextPage} from 'next';
import dynamic from 'next/dynamic';
import {useState} from 'react';

import Layout from '@/components/Layout';
import Content from '@/components/homepage/Content';
import type {Project} from '@/components/homepage/Projects';
import KeyboardScreen from '@/components/keyboard/KeyboardScreen';

const MediaQuery = dynamic(async () => await import('react-responsive'), {
    ssr: false,
});

const Home: NextPage = (): JSX.Element => {
    const [activeProject, setActiveProject] = useState<Project>();

    return (
        <Layout disableNav>
            <main className="max-w-screen overflow-x-hidden">
                <MediaQuery minWidth={1080}>
                    <KeyboardScreen setActiveProject={setActiveProject} />

                    <div className="min-h-screen w-full">
                        <Content setActiveProject={setActiveProject} activeProject={activeProject} />
                    </div>
                </MediaQuery>

                <MediaQuery maxWidth={1080}>
                    <div className="min-h-screen w-full">
                        <Content setActiveProject={setActiveProject} activeProject={activeProject} />
                    </div>
                </MediaQuery>
            </main>
        </Layout>
    );
};

export default Home;
