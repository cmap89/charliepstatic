import PageSection from "@/components/PageSection";
import ImageCard from "@/components/ImageCard";
import ProjectCard from "@/components/ProjectCard";
import JourneyCard from "@/components/JourneyCard";

import projects from "@/data/projectList";
import events from "@/data/journeyList";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <PageSection altSectStyle="bg-background" altContStyle="items-start">
        <h2 className="mb-3 text-4xl font-bold">
          Full-Stack Software Engineer
        </h2>
        <h3 className="mb-5 text-2xl">
          From recording studios to web applications. I don&apos;t just build
          products, I build stories.
        </h3>
        <ImageCard
          altImgContStyles=" bg-black text-background rounded-r-full"
          altImgStyles=" rounded-full object-cover aspect-square object-[center_5%]"
          src={"Headshot 1.jpeg"}
        >
          <h3 className="text-2xl font-bold">
            Developer. Musician. Problem Solver.
          </h3>{" "}
          I enjoy building web apps that feel clean and modern while producing
          thoughtful experiences that resonate. I love connecting with people
          and composing visions with code.
        </ImageCard>
      </PageSection>

      {/* Journey Section */}
      <PageSection>
        <h2 className="text-3xl font-bold">Journey</h2>
        {events.map(({ id, dateFrom, dateTo, title, desc }) => {
          return (
            <JourneyCard
              key={id}
              dateFrom={dateFrom}
              dateTo={dateTo}
              title={title}
              desc={desc}
            />
          );
        })}
      </PageSection>

      {/* Project Section */}
      <PageSection>
        <h2 className="text-3xl font-bold">Projects</h2>
        {projects.map(({ id, title, src, alt, description }) => {
          return (
            <ProjectCard
              key={id}
              src={src}
              alt={alt}
              title={title}
              description={description}
            />
          );
        })}
      </PageSection>

      {/* Resume Section */}
      <PageSection>
        <h2 className="text-3xl font-bold">Contact</h2>
      </PageSection>
    </>
  );
}
