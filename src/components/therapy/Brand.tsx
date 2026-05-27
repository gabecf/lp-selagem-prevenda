export function BrandMark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const titleSize =
    size === "lg" ? "text-4xl md:text-5xl" : size === "sm" ? "text-xl" : "text-2xl md:text-3xl";
  return (
    <div className="flex flex-col items-start leading-none">
      <span className={`font-display tracking-[0.18em] text-heading ${titleSize}`}>
        THERAPY GOLD
      </span>
      <span className="font-script text-olive text-base md:text-lg mt-1">
        Terapia <span className="font-script">capilar</span> profissional
      </span>
    </div>
  );
}
