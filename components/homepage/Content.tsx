import {AnimatePresence, motion} from 'framer-motion';
import {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {GitHub} from 'react-feather';

import ProjectCard from '../ProjectCard';
import projects from './Projects';
import type {Project} from './Projects';

const Content: React.FC<PropsWithChildren> = () => {
    const [activeProject, setActiveProject] = useState<Project>();

    return (
        <div className="max-w-[1340px] mx-auto w-10/12">
            <article className="my-10 md:my-[200px] max-w-[1200px] mx-auto">
                <h2 className="text-5xl my-10 text-left font-semibold tracking-tight" id="aboutme">
                    About Me
                </h2>

                <div className="text-lg">
                    <p>
                        As a Software Engineer, I specialize in full-stack development with{' '}
                        <span className="text-sky">JavaScript, React, and Next.JS, </span> building features in back-end
                        systems and CLI tools using <span className="text-sky">Java, Python, and TypeScript</span>.
                    </p>
                    <br />
                    <p>
                        I&apos;ve had the opportunity to work on a variety of projects, from delivering new user
                        interfaces and integrating third-party scripts to automating internal processes and improving
                        platform functionalities.
                    </p>
                    <br />
                    <p>
                        While my day-to-day is filled with opportunities to develop using new and varying technologies,
                        I found myself looking for a new creative challenge in my spare time, leading me to the
                        development of my game using <span className="text-sky">C# and Unity</span>. I like to think
                        this mirrors my passion for full-stack development, joining my love of design and programming
                        skills.
                    </p>
                </div>
            </article>

            <hr />

            <article>
                <div className=" max-w-[1200px] mx-auto mt-20 md:my-20 flex flex-col md:flex-row md:items-center gap-8">
                    <h2 className="text-5xl  text-left font-semibold tracking-tight" id="projects">
                        Personal Projects
                    </h2>
                    <a
                        href="https://github.com/craigmhughes"
                        target="_blank"
                        rel="noreferrer"
                        className="badge border-0 bg-skyLight hover:bg-skyOvercast text-sky text-lg py-4 pl-4 items-center flex gap-2 font-semibold text-sm"
                    >
                        <GitHub className="h-4 w-4 stroke-4" /> Github Profile
                    </a>
                </div>
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
                    <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
                        {projects.map((project) => (
                            <ProjectCard {...project} key={project.title} setActiveProject={setActiveProject} />
                        ))}
                    </div>
                </div>
            </article>

            <hr />

            <article className="my-10 md:my-[200px] max-w-[1200px] mx-auto">
                <h2 className="text-5xl my-10 text-left font-semibold tracking-tight" id="projects">
                    Work Experience
                </h2>

                <div>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700">
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                February 2022
                            </time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Application UI code in Tailwind CSS
                            </h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                Get access to over 20+ pages including a dashboard layout, charts, kanban board,
                                calendar, and pre-order E-commerce & Marketing pages.
                            </p>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                March 2022
                            </time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Marketing UI design in Figma
                            </h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                All of the pages and components are first designed in Figma and we keep a parity between
                                the two versions even as we update the project.
                            </p>
                        </li>
                        <li className="ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                April 2022
                            </time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                E-Commerce UI code in Tailwind CSS
                            </h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                Get started with dozens of web components and interactive elements built on top of
                                Tailwind CSS.
                            </p>
                        </li>
                    </ol>
                </div>
            </article>
        </div>
    );
};

export default Content;
