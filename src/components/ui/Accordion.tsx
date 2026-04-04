import { ChevronDown } from "lucide-react";
import { useId, useState, type ReactNode } from "react";
import { cn } from "../../lib/cn";

export type AccordionItem = {
  id: string;
  label: string;
  meta?: string;
  content: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  defaultItemId?: string;
};

export function Accordion({ items, defaultItemId }: AccordionProps) {
  const baseId = useId();
  const [openId, setOpenId] = useState(defaultItemId ?? items[0]?.id ?? "");

  return (
    <div className="space-y-2">
      {items.map((item) => {
        const isOpen = item.id === openId;
        const buttonId = `${baseId}-${item.id}-button`;
        const panelId = `${baseId}-${item.id}-panel`;

        return (
          <div key={item.id} className="rounded-control border border-border-soft bg-field">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                onClick={() => setOpenId(isOpen ? "" : item.id)}
              >
                <span>
                  <span className="block text-sm font-medium text-text-primary">{item.label}</span>
                  {item.meta ? <span className="mt-1 block mono-label text-text-secondary">{item.meta}</span> : null}
                </span>
                <ChevronDown
                  className={cn("h-4 w-4 text-text-secondary transition-transform duration-150", isOpen && "rotate-180")}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn("grid transition-[grid-template-rows] duration-150", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
            >
              <div className="overflow-hidden">
                <div className="border-t border-border-soft px-4 py-4 text-sm leading-6 text-text-secondary">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
