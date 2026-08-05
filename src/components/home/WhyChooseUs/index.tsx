import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

import { differentials } from "@/data/differentials";

export default function WhyChooseUs() {
  return (
    <Section className="bg-[#faf9f6]">
      <Container className="max-w-[1320px]">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B48A47]">
            Diferenciais
          </span>

          <Heading className="mt-5">
            Por que escolher nosso escritório?
          </Heading>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            Atendimento jurídico baseado em confiança,
            estratégia e compromisso com resultados.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {differentials.map((item) => {

            const Icon = item.icon;

            return (

              <article
                key={item.title}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[#B48A47]
                  hover:shadow-xl
                "
              >

                <div
                  className="
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#F6F1E8]
                  "
                >
                  <Icon
                    size={30}
                    className="text-[#B48A47]"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.description}
                </p>

              </article>

            );

          })}

        </div>

      </Container>
    </Section>
  );
}