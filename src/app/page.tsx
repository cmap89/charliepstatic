import PageSection from "@/components/PageSection";
import ImageCard from "@/components/ImageCard";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <PageSection altSectStyle="bg-background">
        <h2 className="mb-2 text-4xl font-bold">
          Software Engineer & Creative Technologist crafting intuitive digital
          experiences.
        </h2>
        <h3 className="mb-2 text-2xl">
          From recording studios to web applications. I build things that
          connect with people.
        </h3>
        <ImageCard src={"Headshot 1.jpeg"} />
      </PageSection>

      {/* Second Section */}
      <PageSection>
        <h2 className="text-2xl font-bold">About</h2>
      </PageSection>

      {/* Third Section */}
      <PageSection>
        <h2 className="text-2xl font-bold">Projects</h2>
        <ProjectCard />
      </PageSection>
    </>
  );
}
