import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "outlineLight";
};

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-8 h-14 text-sm font-semibold tracking-wide transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        {
          "bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-0.5 shadow-lg":
            variant === "primary",

          "border border-slate-300 bg-white text-slate-900 hover:border-[#B08D57] hover:text-[#B08D57] hover:-translate-y-0.5":
            variant === "outline",

          "border border-white bg-transparent text-white hover:bg-white hover:text-slate-900 hover:-translate-y-0.5":
            variant === "outlineLight",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}