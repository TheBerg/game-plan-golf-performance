import { cn } from "@/lib/utils";

const paddingClasses = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
} as const;

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: keyof typeof paddingClasses;
  hover?: boolean;
}

export function Card({
  children,
  className,
  padding = "md",
  hover = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-sm",
        paddingClasses[padding],
        hover &&
          "hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
        className,
      )}
    >
      {children}
    </div>
  );
}
