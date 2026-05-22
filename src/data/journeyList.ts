interface Event {
  id: number;
  dateFrom: string;
  dateTo: string;
  title: string;
  desc: string;
}

const events: Event[] = [
  {
    id: 1,
    dateFrom: "Aug 2025",
    dateTo: "present",
    title: "Software Engineer",
    desc: "I have been building sites that help solve problems for small business and to further my exploration into engineering.",
  },
  {
    id: 2,
    dateFrom: "Mar 2023",
    dateTo: "Aug 2025",
    title: "Foothill College",
    desc: "I successfully completed college-level coursework at Foothill College in Los Altos, California. I gained valuable, fundamental knowledge of software engineering, including data structures and computer architecture.",
  },
  {
    id: 3,
    dateFrom: "Dec 2021",
    dateTo: "Aug 2022",
    title: "The Web Developer Bootcamp",
    desc: "I successfully completed this online bootcamp to kick off my self-study of software engineering, learning the fundamentals from variables and loops, to building scalable full-stack apps.",
  },
];

export default events;
