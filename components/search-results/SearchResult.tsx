import {AnimatePresence, motion} from 'framer-motion';
import type {Dispatch, SetStateAction} from 'react';

import styles from '@/styles/Home.module.css';

import ProjectCard from '../ProjectCard';
import type {Project} from '../homepage/Projects';

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

interface SearchResultInterface extends Project {
    visible: boolean;
    setActiveProject: Dispatch<SetStateAction<Project | undefined>>;
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
                    className={`${styles.searchResult} relative py-3 px-4 my-2 rounded cursor-pointer`}
                    key={props.title}
                >
                    <ProjectCard {...props} min />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default SearchResult;
