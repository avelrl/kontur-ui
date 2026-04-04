import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "../../lib/cn";

export type TabItem = {
  id: string;
  label: string;
  meta?: string;
  content: ReactNode;
};

type TabsProps = {
  items: TabItem[];
  defaultTabId?: string;
  ariaLabel?: string;
};

export function Tabs({ items, defaultTabId, ariaLabel }: TabsProps) {
  const fallbackId = items[0]?.id;
  const [activeId, setActiveId] = useState(defaultTabId ?? fallbackId ?? "");
  const baseId = useId();
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeIndex = items.findIndex((item) => item.id === activeId);
  const activeItem = items[activeIndex] ?? items[0];

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      return;
    }

    event.preventDefault();

    let nextIndex = index;
    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % items.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + items.length) % items.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = items.length - 1;
    }

    const nextTab = items[nextIndex];
    if (!nextTab) {
      return;
    }

    setActiveId(nextTab.id);
    buttonRefs.current[nextIndex]?.focus();
  };

  if (!activeItem) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div role="tablist" aria-label={ariaLabel} className="flex flex-wrap gap-2">
        {items.map((item, index) => {
          const isActive = item.id === activeItem.id;
          const tabId = `${baseId}-${item.id}-tab`;
          const panelId = `${baseId}-${item.id}-panel`;

          return (
            <button
              key={item.id}
              ref={(element) => {
                buttonRefs.current[index] = element;
              }}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              className={cn(
                "rounded-control border px-3 py-2 text-left transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-service-blue focus-visible:ring-offset-2 focus-visible:ring-offset-panel",
                isActive
                  ? "control-active"
                  : "border-border-soft bg-field text-text-secondary hover:bg-highlight hover:text-text-primary",
              )}
              onClick={() => setActiveId(item.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              <span className="block text-sm font-medium">{item.label}</span>
              {item.meta ? (
                <span className={cn("mt-1 block mono-label", isActive ? "control-active-meta" : "text-text-secondary")}>
                  {item.meta}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-${activeItem.id}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-${activeItem.id}-tab`}
        className="rounded-control border border-border-strong bg-field p-4 shadow-panel inset-shadow-panel"
      >
        {activeItem.content}
      </div>
    </div>
  );
}
