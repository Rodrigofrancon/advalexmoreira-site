import AlexMoreira from "@/assets/images/alexMoreira.webp";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function About() {
  return (
    <Section
      id="sobre"
      padded={false}
      className="bg-white py-16 lg:py-24"
    >
      <Container className="max-w-[1320px]">

        <div className="grid items-center gap-12 lg:grid-cols-[520px_1fr]">

          {/* Foto */}

          <div>

            <div className="relative">

              <div className="absolute inset-0 rounded-[36px] bg-[#F6F1E8]" />

              <img
                src={AlexMoreira}
                alt="Dr. Alex Moreira, advogado"
                width={1402}
                height={1122}
                loading="lazy"
                className="
                  relative
                  z-10
                  mx-auto
                  w-full
                  max-w-[500px]
                  object-contain
                "
              />

            </div>

            <div className="mt-6 text-center">
              <p className="font-title text-2xl font-bold text-slate-900">
                Alex Moreira
              </p>

              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-slate-500">
                OAB/RS 117.679
              </p>
            </div>

          </div>

          {/* Conteúdo */}

          <div>

            <Badge>
              Sobre o Escritório
            </Badge>

            <Heading className="mt-6 max-w-[700px]">
              Há 7 anos oferecendo segurança jurídica,
              compromisso e atendimento personalizado.
            </Heading>

            <p className="mt-8 max-w-[700px] text-lg leading-9 text-slate-600">
              O escritório Alex Moreira Advogados atua de forma
              estratégica, ética e transparente, oferecendo soluções
              jurídicas para pessoas físicas e empresas com foco na
              proteção dos direitos e na obtenção dos melhores resultados.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-[#faf9f6] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B48A47]">
                Sobre o advogado
              </p>

              <p className="mt-3 max-w-[700px] leading-8 text-slate-600">
                Alex Moreira é formado em Pedagogia e Direito, com
                expertise nas áreas Cível, Trabalhista, Criminal e
                Previdenciária. Atualmente, é pós-graduando em
                Processo Penal e Direito Penal. Atua no escritório
                A&A Advogados, registrado na OAB sob o número
                14893, e possui inscrição na OAB sob o número
                117679.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">

              <div className="rounded-2xl border border-slate-200 p-5">
                ✓ Atendimento personalizado
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                ✓ Estratégia jurídica
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                ✓ Ética e transparência
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                ✓ Atendimento presencial e online
              </div>

            </div>

            <div className="mt-12">

              <Button
                onClick={() =>
                  document
                    .getElementById("areas")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Conheça nossas áreas de atuação
              </Button>

            </div>

          </div>

        </div>

      </Container>
    </Section>
  );
}