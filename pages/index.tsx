import type {NextPage} from 'next';
import dynamic from 'next/dynamic';

import Layout from '@/components/Layout';
import Content from '@/components/homepage/Content';
import KeyboardScreen from '@/components/keyboard/KeyboardScreen';

const MediaQuery = dynamic(async () => await import('react-responsive'), {
    ssr: false,
});

const Home: NextPage = (): JSX.Element => (
    <Layout disableNav>
        <main className="max-w-screen overflow-x-hidden">
            <MediaQuery minWidth={1080}>
                <KeyboardScreen />

                <div className="min-h-screen w-full">
                    <Content />
                </div>
            </MediaQuery>

            <MediaQuery maxWidth={1080}>
                <div className="min-h-screen w-full">
                    <Content />
                </div>
            </MediaQuery>
        </main>
    </Layout>
);

export default Home;
