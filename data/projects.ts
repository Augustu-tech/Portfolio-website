export type Project = {
    id: number;
    slug: string;
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
};

export const projects: Project[] = [
    {
        id: 1,
        slug: "phishing-detection-system",
        title: "Phishing Detection System",
        description: "A machine learning model that detects phishing websites in real-time.",
        tech: ["Python", "Scikit-learn", "Pandas"],
        github: "#",
        demo: "#",
    },
    {
        id: 2,
        slug: "portfolio-website",
        title: "Portfolio Website",
        description: "Personal website built with Next.js and Tailwind CSS.",
        tech: ["Next.js", "Tailwind"],
        github: "#",
        demo: "#",
    },
    {
        id: 3,
        slug: "file organizer",
        title: "File Organizer",
        description: "An automation file organizer to classify files and put them in their collect folders.",
        tech: ["Python", "Tinkter"],
        github: "#",
        demo: "#",
    },
];