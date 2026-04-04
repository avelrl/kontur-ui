import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

type PanelProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  meta?: string;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function Panel({
  id,
  eyebrow,
  title,
  meta,
  className,
  bodyClassName,
  children,
  footer,
}: PanelProps) {
  const headingId = id ? `${id}-title` : undefined;

  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "overflow-hidden rounded-panel border border-border-strong bg-panel shadow-panel inset-shadow-panel",
        className,
      )}
    >
      <header className="border-b border-border-soft px-4 py-3 md:px-5">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            {eyebrow ? <p className="kicker">{eyebrow}</p> : null}
            <h2 id={headingId} className="text-lg font-semibold tracking-[0.01em] text-text-primary">
              {title}
            </h2>
          </div>
          {meta ? <p className="mono-label text-right text-text-secondary">{meta}</p> : null}
        </div>
      </header>
      <div className={cn("px-4 py-4 md:px-5", bodyClassName)}>{children}</div>
      {footer ? <footer className="border-t border-border-soft px-4 py-3 md:px-5">{footer}</footer> : null}
    </section>
  );
}

