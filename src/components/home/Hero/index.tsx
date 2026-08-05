import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <Section
      id="inicio"
      className="relative overflow-hidden bg-[#FAF8F4] py-0"
    >
      {/* Elemento decorativo */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(199,166,106,0.14),transparent_55%)]
        "
      />

      <Container className="max-w-[1400px]">
        <div
          className="
            relative
            z-10
            grid
            items-center
            gap-16
            py-20
            lg:min-h-[calc(100vh-90px)]
            lg:grid-cols-[1.15fr_0.85fr]
          "
        >
          <HeroContent />

          <div className="flex justify-center lg:justify-end">
            <HeroStats />
          </div>
        </div>
      </Container>
    </Section>
  );
}
