import Link from 'next/link';
import {useRouter} from 'next/router';
import type {ReactElement} from 'react';
import {Briefcase, Heart, Hexagon} from 'react-feather';

import type {HeaderInterface} from './types';

const navItems = [
    {
        href: '/',
        label: 'Projects',
        color: '#46237A',
        icon: Hexagon,
    },
    {
        href: '/work-history',
        label: 'Work History',
        color: '#191d24',
        icon: Briefcase,
        useStroke: true,
    },
    {
        href: '/personal',
        label: 'Personal',
        color: '#FF495C',
        icon: Heart,
    },
];

export default function MobileHeader({navigation, hasTopNotification}: HeaderInterface): ReactElement {
    const router = useRouter();

    return (
        <div
            className={`btm-nav min-h-[100px] text-sm font-semibold tracking-tight border-t border-t-lightgrey
                bg-white fixed bottom-0 left-0 justify-center
            `}
        >
            {navItems.map((navItem) => {
                const active = router.pathname === navItem.href;

                return (
                    <Link
                        key={navItem.href}
                        href={navItem.href}
                        className={`${active ? 'border-t-4' : 'border-t-0'} gap-2 group max-w-[180px]`}
                        style={{
                            borderColor: navItem.color,
                        }}
                    >
                        <navItem.icon
                            style={{
                                fill: active && !navItem.useStroke ? navItem.color : undefined,
                                stroke: active ? navItem.color : '#222222',
                            }}
                        />
                        <span className="btm-nav-label">{navItem.label}</span>
                    </Link>
                );
            })}
        </div>
    );
}

MobileHeader.defaultProps = {
    navigation: false,
    hasTopNotification: false,
};
