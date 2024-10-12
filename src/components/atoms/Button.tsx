import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "px-6 py-3 bg-foreground text-background flex items-center justify-center gap-2.5 rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
