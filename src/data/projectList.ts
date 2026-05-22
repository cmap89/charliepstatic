interface Project {
  id: number;
  title: string;
  src: string;
  alt: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "cmap Official Website",
    src: "cmapofficial_site_thumbnail.png",
    alt: "cmap official website",
    description: "Website for music and audio services.",
  },
  {
    id: 2,
    title: "Minesweeper App",
    src: "minesweeper_thumbnail.png",
    alt: "minesweeper app",
    description: "",
  },
];

export default projects;
