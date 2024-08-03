import type {Dispatch, SetStateAction} from 'react';
import {ChevronUp} from 'react-feather';

import Header from '../Header';

interface ContentInterface {
    setScrolled: Dispatch<SetStateAction<number>>;
}

export default function Content({setScrolled}: ContentInterface): JSX.Element {
    return (
        <div className="max-w-[1460px] mx-auto">
            <Header navigation hasTopNotification />

            <button
                type="button"
                className={
                    'badge badge-ghost hover:bg-midnight hover:text-ice hover:border-ice badge-lg my-2 text-sm font-bold tracking-tight hidden md:flex ' +
                    'absolute top-0 left-2/4 bg-ice text-midnight border-0 shadow-sm hover:bg-gray-100 hover:text-black hover:shadow-md hover:top-1 ' +
                    'transition-all'
                }
                onClick={() => {
                    setScrolled(0);
                }}
            >
                <ChevronUp className="h-5 relative -left-2" /> Return
            </button>
        </div>
    );
}
