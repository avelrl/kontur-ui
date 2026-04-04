import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

type IconButtonVariant = "secondary" | "ghost" | "danger";
type IconButtonSize = "sm" | "md";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  icon: ReactNode;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
};

const variantClassMap: Record<IconButtonVariant, string> = {
  secondary:
    "border-border-strong bg-active-module text-text-primary hover:bg-highlight focus-visible:ring-service-blue shadow-panel inset-shadow-panel",
  ghost:
    "border-border-soft bg-field text-text-secondary hover:border-border-strong hover:text-text-primary hover:bg-highlight focus-visible:ring-service-blue inset-shadow-panel",
  danger:
    "border-border-soft bg-archive-block text-signal-red hover:bg-highlight focus-visible:ring-signal-red shadow-panel",
};

const sizeClassMap: Record<IconButtonSize, string> = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
};

export function IconButton({
  className,
  label,
  icon,
  variant = "ghost",
  size = "md",
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex items-center justify-center rounded-control border transition-colors duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-panel",
        "disabled:cursor-not-allowed disabled:opacity-45",
        variantClassMap[variant],
        sizeClassMap[size],
        className,
      )}
      {...props}
    >
      <span aria-hidden="true">{icon}</span>
    </button>
  );
}
