import {motion} from 'framer-motion';
import type {NextPage} from 'next';
import dynamic from 'next/dynamic';
import {useEffect, useState} from 'react';

import Layout from '@/components/Layout';
import Content from '@/components/homepage/Content';
import KeyboardScreen from '@/components/keyboard/KeyboardScreen';
import styles from '@/styles/Home.module.css';

const MediaQuery = dynamic(async () => await import('react-responsive'), {
    ssr: false,
});

const Home: NextPage = (): JSX.Element => {
    const [scrolled, setScrolled] = useState<number>(0);

    const contentAnimation = {
        hidden: {
            y: '0vh',
        },
        visible: {
            y: '-100vh',
        },
    };

    // const transition = {};

    useEffect(() => {
        const scrollListener = (e: Event): void => {
            // console.log(e);
            setScrolled(scrolled + 1);
        };

        document.addEventListener('wheel', scrollListener);

        return () => {
            document.removeEventListener('wheel', scrollListener);
        };
    }, [scrolled, setScrolled]);

    return (
        <Layout disableNav>
            <main className={`${styles.main} relative max-h-screen overflow-hidden`}>
                <MediaQuery minWidth={1080}>
                    <KeyboardScreen setScrolled={setScrolled} />

                    <motion.div
                        initial="hidden"
                        animate={scrolled > 10 ? 'visible' : 'hidden'}
                        variants={contentAnimation}
                        className="min-h-screen w-full bg-white z-10 absolute top-screen shadow-2xl"
                    >
                        <Content setScrolled={setScrolled} />
                    </motion.div>
                </MediaQuery>

                <MediaQuery maxWidth={1080}>
                    <div className="min-h-screen w-full bg-white z-10 relative top-screen shadow-2xl">
                        <Content setScrolled={setScrolled} />
                    </div>
                </MediaQuery>
            </main>
        </Layout>
    );
};

export default Home;
