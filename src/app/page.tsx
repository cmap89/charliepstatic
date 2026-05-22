import PageSection from "@/components/PageSection";
import ImageCard from "@/components/ImageCard";
import ProjectCard from "@/components/ProjectCard";
import StackTag from "@/components/StackTag";
import JourneyCard from "@/components/JourneyCard";

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
        <JourneyCard>
          <div className="w-1/3 text-2xl font-bold">date - date</div>
          <div className="w-2/3">
            <h3 className="text-2xl font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </h3>
            <div>
              Iusto architecto aperiam quae! Blanditiis corporis, illo incidunt
              quas hic, suscipit ipsam nam mollitia cumque cupiditate voluptas
              ratione id consequatur magni dolores. Vitae eligendi quidem error
              quia incidunt autem voluptatibus. Quae quia nihil repellendus,
              maiores ad excepturi sequi rem aspernatur, iste, nam reprehenderit
              dolorem. Veritatis, quas error sit rem eligendi ipsum laudantium!
              Architecto similique eligendi nihil accusamus hic ipsa suscipit
              obcaecati, vitae voluptas rem assumenda maiores iusto ad
              blanditiis. Animi sequi quod quo consectetur ab, dolore eum,
              nesciunt velit labore deleniti nobis.
              <StackTag />
            </div>
          </div>
        </JourneyCard>
      </PageSection>

      {/* Third Section */}
      <PageSection>
        <h2 className="text-3xl font-bold">Projects</h2>
        <ProjectCard
          src="cmapofficial_site_thumbnail.png"
          alt="cmap official website"
        >
          <h3>[Project Title]</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            officia quia excepturi blanditiis, natus dolore accusamus nobis
            ducimus eaque similique quaerat voluptate adipisci? Unde eaque fuga
            perferendis fugiat sint asperiores?
          </p>
          <StackTag />
        </ProjectCard>
        <ProjectCard
          src="cmapofficial_site_thumbnail.png"
          alt="cmap official website"
        >
          <h3>[Project Title]</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            officia quia excepturi blanditiis, natus dolore accusamus nobis
            ducimus eaque similique quaerat voluptate adipisci? Unde eaque fuga
            perferendis fugiat sint asperiores?
          </p>
        </ProjectCard>
      </PageSection>
    </>
  );
}
