import type {NextPage} from 'next';
import Head from 'next/head';

import KeyboardScreen from '@/components/keyboard/KeyboardScreen';
import styles from '@/styles/Home.module.css';

const Home: NextPage = (): JSX.Element => (
    <>
        <Head>
            <title>Craig Hughes | Portfolio</title>
            <meta name="description" content="Welcome" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <KeyboardScreen />
        </main>
    </>
);

export default Home;
