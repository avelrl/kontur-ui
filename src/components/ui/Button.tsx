import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
};

const variantClassMap: Record<ButtonVariant, string> = {
  primary:
    "border-border-strong bg-text-primary text-canvas hover:bg-text-primary/90 focus-visible:ring-service-blue",
  secondary:
    "border-border-strong bg-elevated text-text-primary hover:bg-highlight focus-visible:ring-service-blue",
  ghost:
    "border-border-soft bg-field text-text-secondary hover:border-border-strong hover:text-text-primary hover:bg-highlight focus-visible:ring-service-blue",
  danger:
    "border-border-soft bg-elevated text-signal-red hover:bg-highlight focus-visible:ring-signal-red",
};

const sizeClassMap: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 py-2 text-sm",
  md: "min-h-11 px-4 py-2.5 text-sm",
};

export function Button({
  className,
  variant = "secondary",
  size = "md",
  leadingIcon,
  trailingIcon,
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-control border font-medium transition-colors duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-panel",
        "disabled:cursor-not-allowed disabled:opacity-45",
        variantClassMap[variant],
        sizeClassMap[size],
        className,
      )}
      {...props}
    >
      {leadingIcon ? <span aria-hidden="true">{leadingIcon}</span> : null}
      <span>{children}</span>
      {trailingIcon ? <span aria-hidden="true">{trailingIcon}</span> : null}
    </button>
  );
}
