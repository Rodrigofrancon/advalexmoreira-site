import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export default function Badge({
  children,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full",
        "border border-[#D8C29A]",
        "bg-[#FBF8F2]",
        "px-4 py-2",
        "text-xs font-semibold uppercase tracking-[0.18em]",
        "text-[#8B6A35]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}