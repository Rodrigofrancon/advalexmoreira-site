import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

import { practiceAreas } from "@/data/practiceAreas";
import PracticeCard from "./PracticeCard";

export default function PracticeAreas() {
  return (
    <Section
      id="areas"
      className="bg-[#faf9f6]"
    >
      <Container className="max-w-[1320px]">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b88a3b]">
            Especialidades
          </span>

          <Heading className="mt-5">
            Áreas de Atuação
          </Heading>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-slate-600">
            Atendimento jurídico especializado para pessoas físicas e empresas,
            com soluções estratégicas, seguras e personalizadas.
          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {practiceAreas.map((area) => (
            <PracticeCard
              key={area.title}
              icon={area.icon}
              title={area.title}
              description={area.description}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}