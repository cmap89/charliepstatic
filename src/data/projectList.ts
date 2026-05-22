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
    description:
      "Playable minesweeper app that explores implementation through the use of JavaScript classes.",
  },
  {
    id: 3,
    title: "YelpCamp App",
    src: "yelpcamp2.png",
    alt: "yelpcamp app",
    description:
      "The culmination of the web development bootcamp that encompasses everything from server-side rendering to ",
  },
  {
    id: 4,
    title: "PicLess App",
    src: "",
    alt: "picless app",
    description: "this is a test",
  },
];

export default projects;
