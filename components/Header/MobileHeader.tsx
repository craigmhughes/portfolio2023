import Image from 'next/image';

import Github from '@/assets/github-mark.svg';
import Gmail from '@/assets/gmail.svg';
import Linkedin from '@/assets/linkedin.svg';

const navItems = [
    {
        href: '/',
        label: 'Github',
        icon: Github,
    },
    {
        href: '/work-history',
        label: 'Gmail',
        icon: Gmail,
    },
    {
        href: '/personal',
        label: 'LinkedIn',
        icon: Linkedin,
    },
];

const MobileHeader = (): JSX.Element => (
    <div
        className={`btm-nav min-h-[100px] text-sm font-semibold tracking-tight border-t border-t-lightgrey
            bg-white fixed bottom-0 left-0 flex justify-end px-10 z-50
        `}
    >
        <div className="menu menu-horizontal bg-slate-50 rounded-box max-w-fit w-fit h-fit justify-end">
            {navItems.map((navItem) => (
                <a
                    className="w-fit max-w-[80px] hover:bg-slate-100 group relative p-4"
                    target="_blank"
                    rel="noreferrer"
                    key={navItem.href}
                    href={navItem.href}
                >
                    <div className="relative h-6 w-6">
                        <Image src={navItem.icon} fill alt={navItem.label} />
                    </div>
                    <span className="btm-nav-label sr-only">{navItem.label}</span>
                </a>
            ))}
        </div>
    </div>
);

MobileHeader.defaultProps = {
    navigation: false,
    hasTopNotification: false,
};

export default MobileHeader;
