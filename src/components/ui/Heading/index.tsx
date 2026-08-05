import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type HeadingProps = Omit<
  HTMLAttributes<HTMLHeadingElement>,
  "title"
> & {
  children: ReactNode;
  hero?: boolean;
};

export default function Heading({
  children,
  hero = false,
  className,
  ...props
}: HeadingProps) {
  const Tag = hero ? "h1" : "h2";

  return (
    <Tag
      className={clsx(
        "font-title font-bold tracking-tight text-slate-900",
        hero
          ? `
              max-w-[680px]
              text-[54px]
              leading-[1.05]
              lg:text-[76px]
            `
          : `
              text-4xl
              lg:text-5xl
            `,
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}