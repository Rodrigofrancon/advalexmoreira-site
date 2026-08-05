import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

import { office, whatsappLink } from "@/data/office";

export default function CTA() {
  return (
    <Section className="bg-slate-900 text-white">
      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <Heading className="text-white">
            Precisa de orientação jurídica?
          </Heading>

          <p className="mt-8 text-lg leading-9 text-slate-300">
            Estamos preparados para analisar seu caso com seriedade,
            estratégia e atendimento personalizado.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <Button
              variant="outlineLight"
              onClick={() =>
                window.open(
                  whatsappLink(
                    "Olá! Gostaria de agendar uma consulta."
                  ),
                  "_blank"
                )
              }
            >
              Agendar consulta
            </Button>

            <Button
              variant="outlineLight"
              onClick={() => {
                window.location.href = `tel:+${office.phone}`;
              }}
            >
              Ligar agora
            </Button>

          </div>

        </div>

      </Container>
    </Section>
  );
}