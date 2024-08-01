import {AnimatePresence, motion} from 'framer-motion';
import Link from 'next/link';

import styles from '@/styles/Home.module.css';

import type {SearchResultEntry} from './entries';

const animation = {
    hidden: {
        x: 600,
        scale: 0.8,
        opacity: 0,
    },
    visible: {
        x: 0,
        scale: 1,
        opacity: 1,
    },
};

const animationTransition = {
    type: 'spring',
    delay: 0,
    stiffness: 60,
    duration: 0.5,
    staggerChildren: 1,
};

interface SearchResultInterface extends SearchResultEntry {
    visible: boolean;
}

export function SearchResult({...props}: SearchResultInterface): JSX.Element {
    return (
        <AnimatePresence mode="popLayout">
            {props.visible && (
                <motion.div
                    variants={animation}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={animationTransition}
                    className={`${styles.searchResult} relative py-3 px-4 bg-midnight text-daylight my-2 rounded cursor-pointer`}
                    key={props.title}
                    style={{
                        maxWidth: `calc(100% - ${props.widthOffset ?? Math.random() * 100}px)`,
                    }}
                >
                    <div
                        className="text-md font-semibold flex items-center my-1 mb-3 rounded-full border px-3 py-1 w-fit"
                        style={{
                            borderColor: props.color,
                            backgroundColor: `${props.color ?? '#FFFFFF'}1A`,
                            color: props.color,
                        }}
                    >
                        <div className="mr-2 scale-75">{props.icon ?? ''}</div>
                        <p className="m-0 pr-1">{props.title}</p>
                    </div>
                    <p className="mb-2">{props.content}</p>

                    <div className={`${styles.hiddenHalf} transition-all ease-in-out duration-300 overflow-hidden`}>
                        <div className="divider my-1" />

                        <div className="flex items-end w-full justify-end px-0">
                            <Link href="/" className="badge badge-ghost py-3 m-0">
                                Read more
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default SearchResult;
