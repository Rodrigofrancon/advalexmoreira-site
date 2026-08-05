import { useState } from "react";
import { Menu, Scale, X } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import { navigation } from "@/data/navigation";
import { whatsappLink } from "@/data/office";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#ece8e1] bg-white/95 backdrop-blur-md">
      <Container className="max-w-[1400px]">
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* LOGO */}

          <a href="#inicio" className="flex items-center gap-4">
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#d8c4a2]
                bg-[#faf7f2]
                lg:h-14
                lg:w-14
              "
            >
              <Scale size={22} className="text-[#B48A47]" />
            </div>

            <div>
              <p className="font-title text-xl font-bold leading-none text-slate-900 lg:text-3xl">
                Alex Moreira
              </p>

              <span
                className="
                  mt-1
                  hidden
                  text-[11px]
                  uppercase
                  tracking-[0.40em]
                  text-slate-500
                  sm:block
                "
              >
                ADVOGADOS
              </span>
            </div>
          </a>

          {/* MENU (desktop) */}

          <nav className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-medium text-slate-700 transition hover:text-[#B48A47]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA (desktop) */}

          <Button
            className="hidden rounded-full px-8 lg:inline-flex"
            onClick={() => window.open(whatsappLink(), "_blank")}
          >
            WhatsApp
          </Button>

          {/* Botão hambúrguer (mobile) */}

          <button
            type="button"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              text-slate-700
              transition
              hover:border-[#B48A47]
              hover:text-[#B48A47]
              lg:hidden
            "
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {/* MENU (mobile) */}

      {isMenuOpen && (
        <div className="border-t border-[#ece8e1] bg-white lg:hidden">
          <Container className="max-w-[1400px]">
            <nav className="flex flex-col gap-1 py-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-3 py-3 font-medium text-slate-700 transition hover:bg-[#faf7f2] hover:text-[#B48A47]"
                >
                  {item.label}
                </a>
              ))}

              <Button
                className="mt-3 w-full rounded-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.open(whatsappLink(), "_blank");
                }}
              >
                Falar no WhatsApp
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
