import Head from 'next/head';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {ExternalLink, ThumbsUp} from 'react-feather';
import MediaQuery from 'react-responsive';

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

        <hr />

        <footer className="footer footer-center rounded h-[300px] flex items-center justify-center flex-col w-11/12 mx-auto">
            <p className="badge text-md h-auto bg-skyLight text-sky px-4 py-1 font-bold tracking-tight border-0 flex">
                <ThumbsUp className="h-4 w-4" /> Thank you for visiting!
            </p>
            <a
                href="https://www.linkedin.com/in/craig-m-hughes/"
                target="_blank"
                rel="noreferrer"
                className="flex text-midnight text-3xl font-light tracking-tight flex-col md:flex-row"
            >
                Feel free to drop me a message on
                <span className="underline font-semibold flex items-center gap-2 hover:text-sky transition">
                    LinkedIn <ExternalLink />
                </span>
            </a>
        </footer>

        <MediaQuery maxWidth={1080}>
            <div className="h-[100px] w-full" />
        </MediaQuery>
    </>
);

Layout.defaultProps = {
    disableNav: false,
};

export default Layout;
