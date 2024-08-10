import {AnimatePresence, motion} from 'framer-motion';
import {useState} from 'react';
import type {PropsWithChildren} from 'react';

import ProjectCard from '../ProjectCard';
import projects from './Projects';
import type {Project} from './Projects';

const Content: React.FC<PropsWithChildren> = () => {
    const [activeProject, setActiveProject] = useState<Project>();

    return (
        <div className="max-w-[1340px] mx-auto w-11/12">
            <h2 className="text-6xl my-20 text-center" id="projects">
                Personal Projects
            </h2>
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

            <div className="max-w-screen-2xl mx-auto my-10 relative">
                <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 scale-[0.9]">
                    {projects.map((project) => (
                        <ProjectCard {...project} key={project.title} setActiveProject={setActiveProject} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Content;
