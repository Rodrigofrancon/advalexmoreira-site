import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  /**
   * Quando false, remove o padding vertical padrão (py-16 lg:py-24)
   * para que a própria seção controle seu espaçamento — evita duas
   * classes de padding concorrendo entre si.
   */
  padded?: boolean;
};

export default function Section({
  children,
  className,
  padded = true,
  ...props
}: SectionProps) {
  return (
    <section
      className={clsx(
        "relative",
        padded && "py-16 lg:py-24",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}