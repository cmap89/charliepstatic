import PageSection from "@/components/PageSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <PageSection altSectStyle="relative bg-background pb-32">
        <h2 className="text-4xl font-bold">
          Software Engineer & Creative Technologist crafting intuitive digital
          experiences.
        </h2>
        <h3 className="text-2xl">
          From recording studios to web applications. I build things that
          connect with people.
        </h3>
        <p>
          Developer. Musician. Problem Solver. Building thoughtful experiences
          that resonate.
        </p>
        <p>Composing with code. Designing with intention.</p>
      </PageSection>

      {/* Second Section */}
      <PageSection altSectStyle="relative bg-black text-white py-20">
        <h2 className="text-2xl font-bold">About</h2>
        <p>Demo section with symmetrical layered waves.</p>
      </PageSection>

      {/* Third Section */}
      <PageSection altSectStyle="relative bg-background py-20">
        <h2 className="text-2xl font-bold">Projects</h2>
        <p></p>
      </PageSection>
    </>
  );
}
