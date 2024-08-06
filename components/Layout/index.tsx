import Head from 'next/head';
import React from 'react';
import type {PropsWithChildren} from 'react';

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
    </>
);

Layout.defaultProps = {
    disableNav: false,
};

export default Layout;
