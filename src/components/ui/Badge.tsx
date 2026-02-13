import { cn } from "@/lib/utils";

const variantClasses = {
  default: "bg-green-100 text-green-800",
  gold: "bg-gold-500/10 text-gold-600",
  green: "bg-green-600 text-white",
  outline: "border border-green-600 text-green-600",
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
