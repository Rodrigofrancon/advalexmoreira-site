import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

import { whatsappLink } from "@/data/office";

export default function HeroContent() {
  return (
    <div className="max-w-[560px]">

      <Badge>
        Atendimento Presencial e Online
      </Badge>

      <Heading
        hero
        className="mt-6"
      >
        Advocacia estratégica para proteger seus direitos.
      </Heading>

      <p className="mt-8 max-w-[520px] text-lg leading-8 text-slate-600 lg:text-xl lg:leading-9">
        Soluções jurídicas para pessoas físicas e empresas,
        com atuação ética, atendimento personalizado e foco
        na melhor estratégia para cada caso.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button
          className="rounded-full px-8 py-4"
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
          variant="outline"
          className="rounded-full px-8 py-4"
          onClick={() =>
            document
              .getElementById("areas")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Ver áreas de atuação
        </Button>
      </div>

    </div>
  );
}
