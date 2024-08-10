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

interface ProjectImage {
    src: string;
    alt: string;
}

export interface Project {
    title: string;
    summary: string;
    image: ProjectImage | ProjectImage[];
    tags: string[];
    large?: boolean;
    active?: boolean;
    linkedWith?: string;
}

const projects: Project[] = [
    {
        title: 'Project DDQ',
        summary:
            'Developing a game in C#, focusing on 3D space and physics. Researching game design theory and project management, presenting creative challenges.',
        tags: ['C#', 'Unity', 'Game Development', '3D', 'Modelling', 'UI Design', 'Programming'],
        image: [
            {
                src: DDQPause.src,
                alt: 'A computer game, a car is stationary on a football pitch. A rival team of cars is lined up on the opposite end of the pitch.',
            },
            {
                src: DDQPitch.src,
                alt: 'A computer game, a car is guiding a large football into an oversized net.',
            },
            {
                src: DDQGarage.src,
                alt: 'A computer game, a car is spinning on a plinth as the user selects a new part for the car from a menu.',
            },
        ],
        large: true,
        active: true,
    },
    {
        title: 'Elemental',
        summary:
            "During my first quarter at THG, I saw a daily issue of losing our changes while creating style changes on our sites. To address this, I developed this Chrome extension to utilise localStorage to save and rebuild a page's state should any event cause a refresh. This extension is still used by the team today.",
        linkedWith: 'THG',
        tags: ['Javascript', 'Chrome', 'Web Extensions', 'Local Storage'],
        image: {
            src: Elemental.src,
            alt: 'A logo for the web extension "Elemental". Shows an icon resembling a package on the left and text reading "Elemental, Snapshot your content." on the right',
        },
    },
    {
        title: 'Sitebuilder',
        summary:
            "Full UI build delivered & maintianed during my time as part of THG Ingenuity's Site Autmation Team. Tackling full-stack feature implementation, deployments, and automation.",
        linkedWith: 'THG',
        tags: [
            'React',
            'JS',
            'TypeScript',
            'Next.js',
            'Storybook',
            'Cypress.js',
            'Docker',
            'Sonarqube',
            'CI / CD',
            'Linting',
            'Express.js',
            'Styled Components',
        ],
        image: {
            src: Sitebuilder.src,
            alt: 'A logo for the app "Site Builder". Shows an icon resembling a letter "S" on the left and text reading "Site Builder" on the right',
        },
    },
    {
        title: 'Campus Chat',
        summary:
            'During my time at university, I developed a chat application in my spare time designed to connect prospective mentors and mentees on campus, creating a collaborative study network. This project provided me with valuable hands-on experience in full-stack development, where I utilized Laravel and React to bring the platform to life.',
        linkedWith: 'Edge Hill University',
        tags: ['React', 'JS', 'Laravel', 'PHP', 'SQL'],
        image: {
            src: Campuschat.src,
            alt: 'A logo for the app "Campus Chat". Shows text reading "Campus Chat" with a speech bubble filling the space of the bottom right.',
        },
    },
    {
        title: 'Webcipe',
        summary:
            "'Webcipe' (I'm very proud of the pun!) was my dissertation project. Seemingly a simple basis, a recipe app, the prospect of storing content in a web app for offline use using the standards of a Progressive Web App brought some interesting challenges.",
        linkedWith: 'Edge Hill University',
        tags: ['React', 'JS', 'Laravel', 'PHP', 'SQL', 'Selenium Webdriver', 'PWA', 'Lighthouse', 'A11Y'],
        image: {
            src: Webcipe.src,
            alt: 'A logo for the app "Webcipe". Shows text reading "Webcipe" with a mobile phone showing the launcher icon of the app.',
        },
    },
    {
        title: 'TidyTube',
        summary:
            'While using YouTube to take courses and view content related to my studies, I found myself becoming distracted with the recommended content which had nothing to do with what I was looking at. I built an extension to prevent them from being seen or interacted with.',
        tags: ['Javascript', 'Chrome', 'Web Extensions', 'Local Storage'],
        image: {
            src: TidyTube.src,
            alt: 'A logo for the web extension "Tidy Tube". Shows an icon of stars on the right and text reading "Tidy Tube, version 1.0.0" on the left.',
        },
    },
    {
        title: 'Quaker',
        summary:
            'Built as part of my coursework, Quaker is a questionnaire maker designed to be used in carrying out primary research and graphing subject responses.',
        linkedWith: 'Edge Hill University',
        tags: ['JS', 'D3', 'Laravel', 'PHP', 'SQL', 'Selenium Webdriver', 'Blade Templating'],
        image: {
            src: Quaker.src,
            alt: 'A logo for the app "Quaker". Shows text reading "Quaker, The Questionnaire Maker".',
        },
    },
    {
        title: 'This Portfolio',
        summary:
            "Built as a small example of a project as my personal project time has been dedicated to the game I am developing! It would also be difficult to ignore the unnecessary use of Three.JS in a portfolio but it was fun to mess around with my keyboard, wasn't it?",
        tags: [
            'Next.js',
            'TypeScript',
            'React',
            'Three.js',
            'react-three-fiber',
            'Tailwind',
            'Framer Motion',
            'Github Actions',
        ],
        image: {
            src: Portfolio.src,
            alt: 'A picture of Craig, the developer of this site. Underneath is the URL of this page.',
        },
        large: true,
    },
];

export default projects;
