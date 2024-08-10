import {Head, Html, Main, NextScript} from 'next/document';

export default function Document(): JSX.Element {
    return (
        <Html lang="en">
            <Head>
                <meta name="description" content="Welcome" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/portfolio2023/keycap.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
