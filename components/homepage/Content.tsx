import dynamic from 'next/dynamic';
import type {Dispatch, PropsWithChildren, SetStateAction} from 'react';
import {ChevronUp} from 'react-feather';

import Campuschat from '@/assets/projects/Campuschat.png';
import Elemental from '@/assets/projects/Elemental.png';
import Portfolio from '@/assets/projects/Portfolio.png';
import Quaker from '@/assets/projects/Quaker.jpg';
import Sitebuilder from '@/assets/projects/SitebuilderAlt.png';
import TidyTube from '@/assets/projects/TidyTube.jpg';
import Webcipe from '@/assets/projects/Webcipe.png';
import DDQGarage from '@/assets/projects/ddq/garage.png';
import DDQPause from '@/assets/projects/ddq/pause.png';
import DDQPitch from '@/assets/projects/ddq/pitch.png';

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
                    image={[
                        {
                            src: DDQPause.src,
                            alt: 'A computer game, a car is spinning on a plinth as the user selects a new part for the car from a menu.',
                        },
                        {
                            src: DDQPitch.src,
                            alt: 'A computer game, a car is spinning on a plinth as the user selects a new part for the car from a menu.',
                        },
                        {
                            src: DDQGarage.src,
                            alt: 'A computer game, a car is spinning on a plinth as the user selects a new part for the car from a menu.',
                        },
                    ]}
                    large
                    active
                />

                <ProjectCard
                    title="Elemental"
                    summary="Developing a game in C#, focusing on 3D space and physics. Researching game design theory and project management, presenting creative challenges."
                    tags={['C#', 'Unity', 'Game Development', '3D', 'Modelling', 'UI Design', 'Programming']}
                    image={{
                        src: Elemental.src,
                        alt: 'A computer game, a car is spinning on a plinth as the user selects a new part for the car from a menu.',
                    }}
                />

                <ProjectCard
                    title="Sitebuilder"
                    summary="Developing a game in C#, focusing on 3D space and physics. Researching game design theory and project management, presenting creative challenges."
                    tags={['C#', 'Unity', 'Game Development', '3D', 'Modelling', 'UI Design', 'Programming']}
                    image={{
                        src: Sitebuilder.src,
                        alt: 'A computer game, a car is spinning on a plinth as the user selects a new part for the car from a menu.',
                    }}
                />

                <ProjectCard
                    title="Campus Chat"
                    summary="Developing a game in C#, focusing on 3D space and physics. Researching game design theory and project management, presenting creative challenges."
                    tags={['C#', 'Unity', 'Game Development', '3D', 'Modelling', 'UI Design', 'Programming']}
                    image={{
                        src: Campuschat.src,
                        alt: 'A computer game, a car is spinning on a plinth as the user selects a new part for the car from a menu.',
                    }}
                />

                <ProjectCard
                    title="Webcipe"
                    summary="Developing a game in C#, focusing on 3D space and physics. Researching game design theory and project management, presenting creative challenges."
                    tags={['C#', 'Unity', 'Game Development', '3D', 'Modelling', 'UI Design', 'Programming']}
                    image={{
                        src: Webcipe.src,
                        alt: 'A computer game, a car is spinning on a plinth as the user selects a new part for the car from a menu.',
                    }}
                />

                <ProjectCard
                    title="TidyTube"
                    summary="Developing a game in C#, focusing on 3D space and physics. Researching game design theory and project management, presenting creative challenges."
                    tags={['C#', 'Unity', 'Game Development', '3D', 'Modelling', 'UI Design', 'Programming']}
                    image={{
                        src: TidyTube.src,
                        alt: 'A computer game, a car is spinning on a plinth as the user selects a new part for the car from a menu.',
                    }}
                />

                <ProjectCard
                    title="Quaker"
                    summary="Developing a game in C#, focusing on 3D space and physics. Researching game design theory and project management, presenting creative challenges."
                    tags={['C#', 'Unity', 'Game Development', '3D', 'Modelling', 'UI Design', 'Programming']}
                    image={{
                        src: Quaker.src,
                        alt: 'A computer game, a car is spinning on a plinth as the user selects a new part for the car from a menu.',
                    }}
                />

                <ProjectCard
                    title="This Portfolio!"
                    summary="Developing a game in C#, focusing on 3D space and physics. Researching game design theory and project management, presenting creative challenges."
                    tags={['C#', 'Unity', 'Game Development', '3D', 'Modelling', 'UI Design', 'Programming']}
                    image={{
                        src: Portfolio.src,
                        alt: 'A computer game, a car is spinning on a plinth as the user selects a new part for the car from a menu.',
                    }}
                    large
                />
            </div>
        </div>
    </div>
);

export default Content;
