import dynamic from 'next/dynamic';
import type {Dispatch, PropsWithChildren, SetStateAction} from 'react';
import {ChevronUp} from 'react-feather';

import DDQGarage from '@/assets/projects/ddq-garage.gif';

import Header from '../Header';
import ProjectCard from '../ProjectCard';

const MediaQuery = dynamic(async () => await import('react-responsive'), {
    ssr: false,
});

interface ContentInterface {
    setScrolled: Dispatch<SetStateAction<number>>;
}

const Content: React.FC<PropsWithChildren<ContentInterface>> = ({setScrolled}) => (
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
                onClick={() => {
                    setScrolled(0);
                }}
            >
                <ChevronUp className="h-5 relative -left-2" /> Return
            </button>
        </MediaQuery>

        <div className="max-w-screen-2xl w-11/12 mx-auto my-10">
            <div className="grid grid-cols-4 gap-4">
                <ProjectCard
                    title="Project DDQ"
                    summary="Developing a game in C#, focusing on 3D space and physics. Researching game design theory and project management, presenting creative challenges."
                    tags={['C#', 'Unity', 'Game Development', '3D', 'Modelling', 'UI Design', 'Programming']}
                    image={{
                        src: DDQGarage.src,
                        alt: 'A computer game, a car is spinning on a plinth as the user selects a new part for the car from a menu.',
                    }}
                    large
                    active
                />
            </div>
        </div>
    </div>
);

export default Content;
