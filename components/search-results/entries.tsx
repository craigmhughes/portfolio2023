import {
    Briefcase,
    Code,
    Codepen,
    Coffee,
    Database,
    GitPullRequest,
    Heart,
    Monitor,
    PenTool,
    Terminal,
    User,
} from 'react-feather';

export interface SearchResultEntry {
    title: string;
    content: string;
    topics?: string[];
    icon?: JSX.Element;
    color?: string;
    widthOffset?: number;
}

export const searchResults: SearchResultEntry[] = [
    {
        title: 'JavaScript',
        content:
            'Proficient in JavaScript. Used extensively in projects like TidyTube Chrome Extension and CampusChat Web App. Developed features and handled frontend logic with a strong focus on user experience.',
        topics: ['Web Development', 'Frontend', 'Scripting'],
        icon: <Code />,
        color: '#FF495C',
        widthOffset: Math.random() * 100,
    },
    {
        title: 'React / Next.JS',
        content:
            "Experienced with React and Next.JS. Built a new Site Creation tool UI, delivered platform migrations, and worked on CampusChat's frontend. Ensured high performance and maintainable code.",
        topics: ['Web Development', 'Frontend', 'Framework'],
        icon: <Code />,
        color: '#61DBFB',
        widthOffset: Math.random() * 100,
    },
    {
        title: 'CSS',
        content:
            'Skilled in CSS and its preprocessors like SCSS/Sass. Utilized Tailwind for utility-first styling and CSS-in-JS for modular and reusable styles in projects.',
        topics: ['Web Development', 'Styling', 'Design'],
        icon: <Monitor />,
        color: '#FF495C',
        widthOffset: Math.random() * 100,
    },
    {
        title: 'SQL',
        content:
            'Experienced in SQL for database management. Used in professional settings to handle data operations and queries efficiently.',
        topics: ['Database', 'Backend', 'Data Management'],
        icon: <Database />,
        color: '#F29111',
        widthOffset: Math.random() * 100,
    },
    {
        title: 'Git',
        content:
            'Proficient with Git for version control. Managed codebases, facilitated team collaboration, and handled branching strategies in various projects.',
        topics: ['Version Control', 'Collaboration', 'DevOps'],
        icon: <Terminal />,
        color: '#F05032',
        widthOffset: Math.random() * 100,
    },
    {
        title: 'CI/CD',
        content:
            'Implemented CI/CD pipelines using GitHub Actions. Automated testing and deployment processes to ensure smooth and reliable software delivery.',
        topics: ['DevOps', 'Automation', 'Deployment'],
        icon: <GitPullRequest />,
        color: '#FF495C',
        widthOffset: Math.random() * 100,
    },
    {
        title: 'Java',
        content:
            'Experienced in Java, especially with Spring Boot for backend development. Enhanced product sizing functionality and integrated third-party scripts.',
        topics: ['Backend', 'Development', 'Integration'],
        icon: <Coffee />,
        color: '#3DDC97',
        widthOffset: Math.random() * 100,
    },
    {
        title: 'Python',
        content:
            'Proficient in Python for scripting and automation. Maintained internal CLI tools and automated data management tasks using PyODBC and Bash.',
        topics: ['Scripting', 'Automation', 'DevOps'],
        icon: <Code />,
        color: '#EB5E28',
        widthOffset: Math.random() * 100,
    },
    {
        title: 'Software Engineer @ THG',
        content:
            'Delivered a new Site Creation tool UI using Next.JS, React, and TypeScript. Achieved 80% test coverage with Cypress.JS. Part of the team that handled platform migrations and enhanced product sizing functionality.',
        topics: ['Frontend', 'Full Stack', 'Testing'],
        icon: <Briefcase />,
        color: '#256EFF',
        widthOffset: Math.random() * 100,
    },
    {
        title: 'Graduate Front End Engineer @ THG',
        content:
            'Collaborated with PMs and content managers to deliver websites. Managed estimation, feature development, and provided UX and A11Y support post-release.',
        topics: ['Frontend', 'Collaboration', 'UX'],
        icon: <Briefcase />,
        color: '#256EFF',
        widthOffset: Math.random() * 100,
    },
    {
        title: 'Project [DDQ]: Computer Game',
        content:
            'Developing a game in C#, focusing on 3D space and physics. Researching game design theory and project management, presenting creative challenges.',
        topics: ['Game Development', '3D Graphics', 'Physics'],
        icon: <Heart />,
        color: '#FF495C',
        widthOffset: Math.random() * 100,
    },
    {
        title: 'TidyTube Chrome Web Extension',
        content:
            'Developed a Chrome extension to combat procrastination on YouTube using JavaScript and local storage. Improved productivity for users needing educational content focus.',
        topics: ['Browser Extensions', 'Productivity', 'JavaScript'],
        icon: <Codepen />,
        color: '#E86A92',
        widthOffset: Math.random() * 100,
    },
    {
        title: 'CampusChat Full Stack Web App',
        content:
            'Built a chat application to connect student mentors and mentees with PHP (Laravel) backend and React frontend. Focused on real-time communication and user-friendly design.',
        topics: ['Full Stack', 'Communication', 'Education'],
        icon: <Codepen />,
        color: '#E86A92',
        widthOffset: Math.random() * 100,
    },
    {
        title: 'University / BSc (Hons) Web Design & Development',
        content:
            'Achieved a First in Web Design & Development from Edge Hill University (SEP 2017 - 2020). Gained strong foundation in web technologies and best practices.',
        topics: ['Education', 'Web Development', 'Academic'],
        icon: <User />,
        color: '#F7F7F9',
        widthOffset: Math.random() * 100,
    },
    {
        title: 'College / Graphic Design',
        content:
            'Completed BTEC Level 3 Extended Diploma in Graphic Design at Wigan & Leigh College of Arts (2014 - 2016). Acquired skills in visual design and creative thinking.',
        topics: ['Education', 'Graphic Design', 'Creative'],
        icon: <PenTool />,
        color: '#F7F7F9',
        widthOffset: Math.random() * 100,
    },
];
