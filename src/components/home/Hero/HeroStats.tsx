import { CalendarClock, Globe2, Users2 } from "lucide-react";

import Button from "@/components/ui/Button";
import { whatsappLink } from "@/data/office";

const stats = [
  {
    icon: CalendarClock,
    value: "7+",
    label: "Anos de atuação",
  },
  {
    icon: Users2,
    value: "Pessoas",
    label: "Físicas e Empresas",
  },
  {
    icon: Globe2,
    value: "Online",
    label: "Atendimento Nacional",
  },
];

export default function HeroStats() {
  return (
    <div
      className="
        relative
        w-full
        max-w-[380px]
        rounded-3xl
        border
        border-[#E7E2D9]
        bg-white/70
        p-8
        shadow-[0_20px_50px_-20px_rgba(15,23,42,0.15)]
        backdrop-blur-sm
      "
    >
      <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B48A47]">
        Por que nos escolher
      </span>

      <div className="mt-8 flex flex-col gap-6">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-5">
            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-[#F8F4EC]
              "
            >
              <Icon size={24} className="text-[#B48A47]" />
            </div>

            <div>
              <span className="block text-2xl font-bold text-slate-900">
                {value}
              </span>

              <span className="block text-sm text-slate-500">{label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-[#E7E2D9] pt-6">
        <Button
          className="w-full rounded-2xl"
          onClick={() =>
            window.open(
              whatsappLink("Olá! Gostaria de agendar uma consulta."),
              "_blank"
            )
          }
        >
          Falar agora no WhatsApp
        </Button>
      </div>
    </div>
  );
}
