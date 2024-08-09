import {AnimatePresence, motion} from 'framer-motion';
import dynamic from 'next/dynamic';
import {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {ChevronUp} from 'react-feather';

import Header from '../Header';
import ProjectCard from '../ProjectCard';
import projects from './Projects';
import type {Project} from './Projects';

const MediaQuery = dynamic(async () => await import('react-responsive'), {
    ssr: false,
});

const Content: React.FC<PropsWithChildren> = () => {
    const [activeProject, setActiveProject] = useState<Project>();

    return (
        <div className="max-w-[1460px] mx-auto">
            <MediaQuery minWidth={1080}>
                <Header navigation hasTopNotification />
            </MediaQuery>
            <MediaQuery maxWidth={1080}>
                <Header navigation />
            </MediaQuery>

            <MediaQuery minWidth={1080}>
                <button
                    type="button"
                    className={
                        'badge badge-ghost hover:bg-midnight hover:text-ice hover:border-ice badge-lg my-2 text-sm font-bold tracking-tight ' +
                        'absolute top-0 left-2/4 bg-ice text-midnight border-0 shadow-sm hover:bg-gray-100 hover:text-black hover:shadow-md hover:top-1 ' +
                        'transition-all flex'
                    }
                >
                    <ChevronUp className="h-5 relative -left-2" /> Return
                </button>
            </MediaQuery>

            <AnimatePresence>
                {activeProject && (
                    <div className="fixed h-screen w-screen z-20 top-0 left-0 flex items-center justify-center">
                        <motion.div
                            className="fixed w-screen h-screen bg-[rgba(0,0,0,0.1)] left-0 top-0"
                            onClick={() => {
                                setActiveProject(undefined);
                            }}
                        />
                        <motion.div className="fixed">
                            <ProjectCard {...activeProject} expanded />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <div className="max-w-screen-2xl w-11/12 mx-auto my-10 relative">
                <div className="grid grid-cols-4 gap-4">
                    {projects.map((project) => (
                        <ProjectCard {...project} key={project.title} setActiveProject={setActiveProject} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Content;
