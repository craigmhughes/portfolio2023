import Head from 'next/head';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {ExternalLink, ThumbsUp} from 'react-feather';

import Header from '../Header';

interface LayoutProps extends PropsWithChildren {
    disableNav?: boolean;
}

const Layout: React.FC<LayoutProps> = ({children, disableNav}): JSX.Element => (
    <>
        <Head>
            <title>Craig Hughes | Portfolio</title>
        </Head>

        {!disableNav && <Header navigation />}

        {children}

        <footer className="footer footer-center rounded h-[300px] flex items-center justify-center flex-col">
            <p className="badge text-md h-auto bg-follyLight text-folly px-4 py-1 font-bold tracking-tight border-0 flex">
                <ThumbsUp className="h-4 w-4" /> Thank you for visiting!
            </p>
            <a
                href="https://www.linkedin.com/in/craig-m-hughes/"
                target="_blank"
                rel="noreferrer"
                className="flex text-midnight text-3xl font-light tracking-tight flex-col md:flex-row"
            >
                Feel free to drop me a message on
                <span className="underline font-semibold flex items-center gap-2">
                    LinkedIn <ExternalLink />
                </span>
            </a>
        </footer>
    </>
);

Layout.defaultProps = {
    disableNav: false,
};

export default Layout;
