import type { HTMLAttributes, ReactNode } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export default function Section({
  children,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      className={`
        relative
        py-24
        lg:py-32
        ${className}
      `}
      {...props}
    >
      {children}
    </section>
  );
}