import {AnimatePresence, motion} from 'framer-motion';
import Image from 'next/image';
import type {Dispatch, PropsWithChildren, SetStateAction} from 'react';
import {GitHub} from 'react-feather';

import THG from '@/assets/thg.png';

import ProjectCard from '../ProjectCard';
import projects from './Projects';
import type {Project} from './Projects';

const Highlight = ({children}: {children: string}): JSX.Element => <span className="text-sky">{children}</span>;

interface ContentInterface {
    setActiveProject: Dispatch<SetStateAction<Project | undefined>>;
    activeProject?: Project;
    showIntro?: boolean;
}

const Content: React.FC<PropsWithChildren<ContentInterface>> = ({setActiveProject, activeProject, showIntro}) => (
    <div className="max-w-[1200px] mx-auto w-10/12">
        {showIntro && (
            <>
                <div className="text-2xl tracking-tight my-10">
                    <h1 className="text-7xl my-4 font-bold">Hi there!</h1>
                    <p>
                        I&apos;m Craig, a Full-stack Engineer working in e-commerce, where I focus on delivering
                        features that make a difference for our clients.
                    </p>
                </div>
                <hr />
            </>
        )}

        <article className={`my-10 ${!showIntro ? 'lg:my-[200px]' : ''} max-w-[1200px] mx-auto`}>
            <h2 className="text-5xl my-10 text-left font-semibold tracking-tight" id="aboutme">
                About Me
            </h2>

            <div className="text-lg">
                <p>
                    As a Software Engineer, I specialize in full-stack development with{' '}
                    <Highlight>JavaScript, React, and Next.JS, </Highlight> building features in back-end systems and
                    CLI tools using <Highlight>Java, Python, and TypeScript</Highlight>.
                </p>
                <br />
                <p>
                    I&apos;ve had the opportunity to work on a variety of projects, from delivering new user interfaces
                    and integrating third-party scripts to automating internal processes and improving platform
                    functionalities.
                </p>
                <br />
                <p>
                    While my day-to-day is filled with opportunities to develop using new and varying technologies, I
                    found myself looking for a new creative challenge in my spare time, leading me to the development of
                    my game using <Highlight>C# and Unity</Highlight>. I like to think this mirrors my passion for
                    full-stack development, joining my love of design and programming skills.
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

            <div className="max-w-[1000px] mx-auto">
                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                        <div className="h-4 w-[120px] relative my-4">
                            <Image src={THG.src} alt="THG Ingenuity Logo" fill />
                        </div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            September 2021 - <strong>Current</strong>
                        </time>
                        <h3 className="text-lg font-semibold">Software Engineer @ THG Ingenuity</h3>
                        <ul className="list-disc ml-10 mt-2 [&>li]:my-8 tracking-tight text-lg">
                            <li>
                                Delivered a new Site Creation tool UI using{' '}
                                <Highlight>Next.JS, React, and TypeScript,</Highlight>
                                integrating with our internal UI Libraries and adhering to the company design system.
                                Introduced custom wrappers to handle library errors and documented the process. Ensured
                                a minimum of 80% test coverage using <Highlight>Cypress.JS</Highlight>.
                            </li>
                            <li>
                                Part of the team that delivered platform migrations for <strong>Cult Beauty</strong> and
                                <strong> Lookfantastic</strong>, rebuilding features from the old platform using{' '}
                                <Highlight>React, TypeScript, and Next.JS.</Highlight>
                            </li>
                            <li>
                                Enhanced the platform&apos;s product sizing functionality by integrating third-party
                                scripts and modifying our existing <Highlight>Java</Highlight> transformers for products
                                to expose the necessary data.
                            </li>
                            <li>
                                Assisted in transitioning responsibilities to my previous team by supporting features
                                and fixes on internal tools. These tools provided platform redirects and a front-end
                                interface for our Site Configuration API, automating site setup and configuration for
                                new clients using <Highlight>Angular</Highlight> and <Highlight>Java</Highlight>.
                            </li>
                            <li>
                                Maintained and improved our internal CLI tool to assist the implementation team with
                                everyday tasks. Features include switching host file entries while testing sites in
                                different environments, identifying unused site configurations, and adding new sites to
                                shared <Highlight>JSON</Highlight> files distributed across the database, using
                                <Highlight> Python, PyODBC, and Bash</Highlight>.
                            </li>
                        </ul>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                        <div className="h-4 w-[120px] relative my-4">
                            <Image src={THG.src} alt="THG Ingenuity Logo" fill />
                        </div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            July 2020 - September 2021
                        </time>
                        <h3 className="text-lg font-semibold">Graduate Front End Engineer @ THG Ingenuity</h3>
                        <ul className="list-disc ml-10 mt-2 [&>li]:my-8 tracking-tight text-lg">
                            <li>
                                Collaborated with PMs and site content managers to deliver sites such as{' '}
                                <strong>Creed, Endura, Speedo,</strong> and <strong>ZYN</strong>. Site delivery
                                consisted of estimation, feature development, and <Highlight>UX and A11Y</Highlight>{' '}
                                support post-release.
                            </li>
                        </ul>
                    </li>
                </ol>
            </div>
        </article>
    </div>
);

export default Content;
