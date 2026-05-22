import PageSection from "@/components/PageSection";
import ImageCard from "@/components/ImageCard";
import ProjectCard from "@/components/ProjectCard";

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
          altImgContStyles=" bg-black text-background w-4/5"
          altImgTxtStyles="translate-x-1/4 p-0"
          altImgStyles=" rounded-full object-cover aspect-square object-[center_5%] translate-x-[54%]"
          src={"Headshot 1.jpeg"}
        />
      </PageSection>

      {/* Second Section */}
      <PageSection>
        <h2 className="text-2xl font-bold">Journey</h2>
      </PageSection>

      {/* Third Section */}
      <PageSection>
        <h2 className="text-2xl font-bold">Projects</h2>
        <ProjectCard />
      </PageSection>
    </>
  );
}
