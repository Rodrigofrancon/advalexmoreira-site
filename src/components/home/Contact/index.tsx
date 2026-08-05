import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

import { office } from "@/data/office";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Section id="contato" className="bg-white">
      <Container className="max-w-[1100px]">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Texto */}

          <div>
            <Badge>Fale Conosco</Badge>

            <Heading className="mt-6">
              Vamos conversar sobre o seu caso?
            </Heading>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Preencha o formulário ao lado e retornaremos o mais breve
              possível, ou fale diretamente com a gente pelos canais abaixo.
            </p>

            <ul className="mt-10 space-y-5 text-slate-700">
              <li>
                <a
                  href={`tel:+${office.phone}`}
                  className="transition hover:text-[#B48A47]"
                >
                  📞 {office.whatsappDisplay}
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${office.email}`}
                  className="break-all transition hover:text-[#B48A47]"
                >
                  ✉️ {office.email}
                </a>
              </li>

              <li>📍 {office.address}</li>
            </ul>
          </div>

          {/* Formulário */}

          <div
            className="
              rounded-3xl
              border
              border-slate-200
              bg-[#faf9f6]
              p-8
              shadow-sm
              lg:p-10
            "
          >
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
