export interface SearchResultEntry {
    title: string;
    content: string;
    topics?: string[];
    icon?: JSX.Element;
    color?: string;
}

export const searchResults: SearchResultEntry[] = [
    {
        title: 'JavaScript',
        content:
            'Proficient in JavaScript. Used extensively in projects like TidyTube Chrome Extension and CampusChat Web App. Developed features and handled frontend logic with a strong focus on user experience.',
        topics: ['Web Development', 'Frontend', 'Scripting'],
        icon: <i className="fab fa-js-square" />,
        color: '#F7DF1E',
    },
    {
        title: 'React / Next.JS',
        content:
            "Experienced with React and Next.JS. Built a new Site Creation tool UI, delivered platform migrations, and worked on CampusChat's frontend. Ensured high performance and maintainable code.",
        topics: ['Web Development', 'Frontend', 'Framework'],
        icon: <i className="fab fa-react" />,
        color: '#61DBFB',
    },
    {
        title: 'CSS',
        content:
            'Skilled in CSS and its preprocessors like SCSS/Sass. Utilized Tailwind for utility-first styling and CSS-in-JS for modular and reusable styles in projects.',
        topics: ['Web Development', 'Styling', 'Design'],
        icon: <i className="fab fa-css3-alt" />,
        color: '#264de4',
    },
    {
        title: 'SQL',
        content:
            'Experienced in SQL for database management. Used in professional settings to handle data operations and queries efficiently.',
        topics: ['Database', 'Backend', 'Data Management'],
        icon: <i className="fas fa-database" />,
        color: '#F29111',
    },
    {
        title: 'Git',
        content:
            'Proficient with Git for version control. Managed codebases, facilitated team collaboration, and handled branching strategies in various projects.',
        topics: ['Version Control', 'Collaboration', 'DevOps'],
        icon: <i className="fab fa-git-alt" />,
        color: '#F05032',
    },
    {
        title: 'CI/CD',
        content:
            'Implemented CI/CD pipelines using GitHub Actions. Automated testing and deployment processes to ensure smooth and reliable software delivery.',
        topics: ['DevOps', 'Automation', 'Deployment'],
        icon: <i className="fas fa-cogs" />,
        color: '#00BFFF',
    },
    {
        title: 'Java',
        content:
            'Experienced in Java, especially with Spring Boot for backend development. Enhanced product sizing functionality and integrated third-party scripts.',
        topics: ['Backend', 'Development', 'Integration'],
        icon: <i className="fab fa-java" />,
        color: '#007396',
    },
    {
        title: 'Python',
        content:
            'Proficient in Python for scripting and automation. Maintained internal CLI tools and automated data management tasks using PyODBC and Bash.',
        topics: ['Scripting', 'Automation', 'DevOps'],
        icon: <i className="fab fa-python" />,
        color: '#306998',
    },
    {
        title: 'Software Engineer at Company T',
        content:
            'Delivered a new Site Creation tool UI using Next.JS, React, and TypeScript. Achieved 80% test coverage with Cypress.JS. Part of the team that handled platform migrations and enhanced product sizing functionality.',
        topics: ['Frontend', 'Full Stack', 'Testing'],
        icon: <i className="fas fa-briefcase" />,
        color: '#61DBFB',
    },
    {
        title: 'Graduate Front End Engineer at Company T',
        content:
            'Collaborated with PMs and content managers to deliver websites. Managed estimation, feature development, and provided UX and A11Y support post-release.',
        topics: ['Frontend', 'Collaboration', 'UX'],
        icon: <i className="fas fa-graduation-cap" />,
        color: '#61DBFB',
    },
    {
        title: 'Project [DDQ]: Computer Game',
        content:
            'Developing a game in C#, focusing on 3D space and physics. Researching game design theory and project management, presenting creative challenges.',
        topics: ['Game Development', '3D Graphics', 'Physics'],
        icon: <i className="fas fa-gamepad" />,
        color: '#239120',
    },
    {
        title: 'TidyTube Chrome Web Extension',
        content:
            'Developed a Chrome extension to combat procrastination on YouTube using JavaScript and local storage. Improved productivity for users needing educational content focus.',
        topics: ['Browser Extensions', 'Productivity', 'JavaScript'],
        icon: <i className="fas fa-chrome" />,
        color: '#F7DF1E',
    },
    {
        title: 'CampusChat Full Stack Web App',
        content:
            'Built a chat application to connect student mentors and mentees with PHP (Laravel) backend and React frontend. Focused on real-time communication and user-friendly design.',
        topics: ['Full Stack', 'Communication', 'Education'],
        icon: <i className="fas fa-comments" />,
        color: '#61DBFB',
    },
    {
        title: 'EHUniversity / BSc (Hons) Web Design & Development',
        content:
            'Achieved a First in Web Design & Development from EHUniversity (SEP 2017 - 2020). Gained strong foundation in web technologies and best practices.',
        topics: ['Education', 'Web Development', 'Academic'],
        icon: <i className="fas fa-university" />,
        color: '#1E90FF',
    },
    {
        title: 'WLCollege / Graphic Design',
        content:
            'Completed BTEC Level 3 Extended Diploma in Graphic Design at WLCollege (2014 - 2016). Acquired skills in visual design and creative thinking.',
        topics: ['Education', 'Graphic Design', 'Creative'],
        icon: <i className="fas fa-paint-brush" />,
        color: '#1E90FF',
    },
];
