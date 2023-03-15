interface biographyText{
    name: string;
    text: string;
}

export interface job{
    place:string;
    position:string;
    responsibilities:string;
}

interface workExperience{
    title: string;
    jobs: job[];
}

export interface socialMediaLink{
    id: string;
    iconLink: string;
    text: string;
    href: string;
}

interface socialMediaLinks{
    mediaLink: socialMediaLink[];
}

interface hardSkills{
    title: string;
    skills: string[];
}

interface softSkills{
    title: string;
    skills: string[];
}

interface languages{
    title: string;
    languages: string[];
}

export const biographyText: biographyText = {
    name: "Arseniy Rubtsov",
    text: "I am a responsible and self-confident person, so I can easily cope with communication with customers and control of tasks. I am confident that my past experience and communication skills will help me effectively integrate into the profession of a systems analyst."
};

export const workExperience: workExperience = {
    title: "WORK EXPERIENCE",
    jobs: [
        {
            place: "Pre-university of Innopolis University, 2022",
            position: "Online intensive teacher",
            responsibilities: "Conducted a 10 day online C++ programming intensive from scratch for high school students. He was engaged in the preparation of classes, checking homework and conducting classes. The course was fully mastered by all students. Developed communication and systematization skills."
        },
        {
            place: 'ANO DPO "Institute for the Development of Competences", 2022',
            position: "Mentor in preparation for the NTO Olympiad in the direction of Artificial Intelligence",
            responsibilities: "Conducted practical classes on AI for high school students, some of them later became winners of the Olympiad. He was distinguished by the clarity of presentation of the material and responsibility among other mentors, therefore he was invited to radio Yugra with an audience of 1.7 million listeners."
        },
        {
            place: "Garden of Dreams, 2021-2022",
            position: "Sales/Business Development Manager",
            responsibilities: "I was engaged in international business communications between buyers and a game development studio. Negotiated and supervised legal documents for the sale of applications and NDA between the studio and buyers. Systematized customer requirements and passed them to developers. Organized online meetings with buyers. He kept records of transactions in Bitrix24 CRM. Hosted and attracted new applications for sale. During his work, he concluded a large deal for $60,000 and organized a collaboration with a major Brazilian studio OneTangoStudio, which collaborated with Hasbro and Mattel."
        },
        {
            place: "OOO OKAS, 2020",
            position: "Junior Data Scientist",
            responsibilities: "Processed and prepared more than 5,000 entities for training a neural network model. Collected data for processing. Controlled and made changes to the markup of colleagues."
        },
    ]
};

export const socialMediaLinks: socialMediaLinks = {
    mediaLink: [
        {
            id: "tg-link",
            iconLink: "/images/telegram.png",
            text: "@qtify",
            href: "https://t.me/qtify"
        },
        {
            id: "gh-link",
            iconLink: "/images/github.png",
            text: "Q-Tify",
            href: "https://github.com/Q-Tify"
        },
        {
            id: "email",
            iconLink: "/images/mailru.png",
            text: "zv051003@mail.ru",
            href: "mailto:zv051003@mail.ru"
        },
    ]
}

export const hardSkills: hardSkills = {
    title: "HARD SKILLS",
    skills: ["UML, Use-case", "User-story, draw.io", "Figma, Jira, CSS", "Confluence", "PostgreSQL", "REST API, Python", "gRPC, RabbitMQ", "HTML, Javascript", "Trello, Notion"]
}

export const softSkills: softSkills = {
    title: "SOFT SKILLS",
    skills: ["Communication skills", "Quick learner", "Analytical thinking", "Oratory skills", "Teamwork", "Proactivity"]
}

export const languages: languages = {
    title: "LANGUAGES",
    languages: ["English language B2+", "Russian language"]
}