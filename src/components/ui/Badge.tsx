import { cn } from "@/lib/utils";

const variantClasses = {
  default: "bg-gold-500/10 text-gold-400",
  gold: "bg-gold-500/10 text-gold-400",
  green: "bg-gold-500 text-navy-950",
  outline: "border border-gold-500/50 text-gold-500",
} as const;

interface BadgeProps {
  children: React.ReactNode;
  variant?: keyof typeof variantClasses;
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
