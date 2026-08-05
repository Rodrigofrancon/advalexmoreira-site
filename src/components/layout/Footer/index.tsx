import Container from "@/components/ui/Container";
import { navigation } from "@/data/navigation";
import { practiceAreas } from "@/data/practiceAreas";
import { office, whatsappLink } from "@/data/office";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <Container>
        <div className="grid gap-14 py-16 lg:grid-cols-4">
          {/* Escritório */}

          <div>
            <h3 className="font-title text-3xl font-bold">Alex Moreira</h3>

            <p className="mt-2 text-sm uppercase tracking-[0.30em] text-slate-400">
              Advogados
            </p>

            <p className="mt-6 leading-8 text-slate-300">
              Advocacia estratégica, atendimento personalizado,
              compromisso, seriedade e dedicação na defesa dos
              direitos de pessoas físicas e empresas.
            </p>
          </div>

          {/* Navegação */}

          <div>
            <h4 className="text-lg font-semibold">Navegação</h4>

            <ul className="mt-6 space-y-4 text-slate-300">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Áreas */}

          <div>
            <h4 className="text-lg font-semibold">Áreas de Atuação</h4>

            <ul className="mt-6 space-y-4 text-slate-300">
              {practiceAreas.map((area) => (
                <li key={area.title}>{area.title}</li>
              ))}
            </ul>
          </div>

          {/* Contato */}

          <div>
            <h4 className="text-lg font-semibold">Contato</h4>

            <ul className="mt-6 space-y-5 text-slate-300">
              <li>
                <a
                  href={`tel:+${office.phone}`}
                  className="transition hover:text-white"
                >
                  📞 {office.whatsappDisplay}
                </a>
              </li>

              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#25D366]"
                >
                  💬 WhatsApp
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${office.email}`}
                  className="break-all transition hover:text-white"
                >
                  ✉️ {office.email}
                </a>
              </li>

              <li>
                📍 {office.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 py-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
            <p>
              © {new Date().getFullYear()} {office.name}. Todos os
              direitos reservados.
            </p>

            <p>Desenvolvido por Rodrigo Franco.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
