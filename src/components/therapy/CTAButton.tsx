import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  pulse?: boolean;
  size?: "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
};

export function CTAButton({ children, pulse, size = "md", className, onClick, href = "#lead" }: Props) {
  const sizing =
    size === "lg" ? "px-9 py-5 text-base md:text-lg" : "px-7 py-4 text-sm md:text-base";
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-gold text-white font-medium tracking-wide",
        "transition-all duration-300 hover:brightness-105 hover:-translate-y-0.5",
        pulse && "animate-[gold-pulse_2.4s_ease-in-out_infinite]",
        sizing,
        className
      )}
    >
      {children}
    </a>
  );
}
