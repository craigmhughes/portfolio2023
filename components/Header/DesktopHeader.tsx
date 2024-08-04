import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import type {ReactElement} from 'react';

import Gmail from '@/assets/gmail.svg';
import Linkedin from '@/assets/linkedin.svg';

import type {HeaderInterface} from './types';

const navItems = [
    {href: '/', label: 'Projects'},
    {href: '/work-history', label: 'Work History'},
    {href: '/personal', label: 'Personal'},
];

export default function DesktopHeader({navigation, hasTopNotification}: HeaderInterface): ReactElement {
    const router = useRouter();

    return (
        <header
            className={`${
                hasTopNotification ? 'mt-6' : 'mt-0'
            } flex items-center font-mono w-11/12 py-6 px-2 justify-between max-w-[1460px] text-black mx-auto`}
        >
            <Head>
                <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript" />
            </Head>
            <div className="uppercase">
                <Link href="/">
                    <p className="text-2xl font-bold my-1">Craig Hughes</p>
                    <p className="text-xs">Software Engineer @ THG Ingenuity</p>
                </Link>
            </div>
            <div>
                {!navigation ? (
                    <Link href="mailto:hghscraig@gmail.com" className="text-sm link">
                        hghscraig@gmail.com
                    </Link>
                ) : (
                    <nav className="text-sm flex gap-6 tracking-tighter">
                        {navItems.map((navItem) => {
                            const active = router.pathname === navItem.href;

                            return (
                                <Link
                                    key={navItem.label.toUpperCase().replace(/ /g, '_')}
                                    href={navItem.href}
                                    className={`${active ? 'bg-slate-100 rounded-full' : ''} px-4 py-1`}
                                >
                                    {navItem.label}
                                </Link>
                            );
                        })}
                    </nav>
                )}
            </div>
            {navigation && (
                <ul className="menu menu-horizontal bg-slate-50 rounded-box">
                    <li>
                        <a
                            className="hover:bg-slate-100 group relative"
                            href="https://uk.linkedin.com/in/craig-m-hughes"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image src={Linkedin.src} alt="Linkedin Logo" className="h-5 w-5" height={20} width={20} />
                            <div className="absolute top-10 -left-4 cursor-pointer opacity-0 p-4 group-hover:opacity-100 transition-all">
                                <div
                                    className="badge-base LI-profile-badge"
                                    data-locale="en_US"
                                    data-size="medium"
                                    data-theme="light"
                                    data-type="VERTICAL"
                                    data-vanity="craig-m-hughes"
                                    data-version="v1"
                                >
                                    <a
                                        aria-label="Craig Hughes, Linkedin Profile"
                                        className="badge-base__link LI-simple-link"
                                        href="https://uk.linkedin.com/in/craig-m-hughes?trk=profile-badge"
                                    >
                                        <p className="hidden">Craig Hughes</p>
                                    </a>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-slate-100" href="mailto:hghscraig@gmail.com">
                            <Image src={Gmail.src} alt="Linkedin Logo" className="h-5 w-5" height={20} width={20} />
                        </a>
                    </li>
                </ul>
            )}
        </header>
    );
}

DesktopHeader.defaultProps = {
    navigation: false,
    hasTopNotification: false,
};
