import type { LucideIcon } from "lucide-react";

type PracticeCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function PracticeCard({
  icon: Icon,
  title,
  description,
}: PracticeCardProps) {
  return (
    <article
      className="
        group
        flex
        min-h-[320px]
        flex-col
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#B48A47]
        hover:shadow-2xl
      "
    >
      <div
        className="
          mb-8
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-[#F8F4EC]
          transition-all
          duration-300
          group-hover:bg-[#B48A47]
        "
      >
        <Icon
          size={30}
          className="
            text-[#B48A47]
            transition-colors
            duration-300
            group-hover:text-white
          "
        />
      </div>

      <h3 className="text-2xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-5 flex-1 leading-8 text-slate-600">
        {description}
      </p>
    </article>
  );
}