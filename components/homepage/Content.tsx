import type {Dispatch, SetStateAction} from 'react';
import {ChevronUp} from 'react-feather';

import Header from '../Header';

interface ContentInterface {
    setScrolled: Dispatch<SetStateAction<number>>;
}

export default function Content({setScrolled}: ContentInterface): JSX.Element {
    return (
        <>
            <Header />

            <button
                type="button"
                className="badge badge-ghost hover:bg-midnight hover:text-ice hover:border-ice badge-lg my-2 text-sm font-bold tracking-tight hidden md:flex"
                onClick={() => {
                    setScrolled(0);
                }}
            >
                <ChevronUp className="h-5 relative -left-2" /> Return
            </button>
        </>
    );
}
