import { Helmet } from "react-helmet-async";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import PracticeAreas from "@/components/home/PracticeAreas";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTA from "@/components/home/CTA";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Alex Moreira Advogados | Advocacia em Viamão, Porto Alegre e Região Metropolitana
        </title>

        <meta
          name="description"
          content="Escritório de advocacia com atendimento presencial em Viamão e online para todo o Rio Grande do Sul. Atuação em Direito Civil, Previdenciário, Trabalhista, Penal, do Consumidor e de Família."
        />

        <link
          rel="canonical"
          href="https://alexmoreiraadvogado.com.br/"
        />
      </Helmet>

      <Hero />

      <About />

      <PracticeAreas />

      <WhyChooseUs />

      <CTA />

      <Contact />
    </>
  );
}