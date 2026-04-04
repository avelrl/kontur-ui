import { useId, useRef, type KeyboardEvent } from "react";
import { cn } from "../../lib/cn";

export type SegmentedOption<T extends string> = {
  value: T;
  label: string;
  note?: string;
};

type SegmentedControlProps<T extends string> = {
  label: string;
  value: T;
  options: Array<SegmentedOption<T>>;
  onChange: (value: T) => void;
  className?: string;
};

export function SegmentedControl<T extends string>({
  label,
  value,
  options,
  onChange,
  className,
}: SegmentedControlProps<T>) {
  const baseId = useId();
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const selectedIndex = options.findIndex((option) => option.value === value);

  const moveSelection = (index: number) => {
    const nextOption = options[index];
    if (!nextOption) {
      return;
    }

    onChange(nextOption.value);
    buttonRefs.current[index]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      return;
    }

    event.preventDefault();

    if (event.key === "Home") {
      moveSelection(0);
      return;
    }

    if (event.key === "End") {
      moveSelection(options.length - 1);
      return;
    }

    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + options.length) % options.length;
    moveSelection(nextIndex);
  };

  return (
    <div
      role="radiogroup"
      aria-label={label}
      className={cn("inline-flex flex-wrap rounded-control border border-border-strong bg-field p-1 inset-shadow-panel", className)}
    >
      {options.map((option, index) => {
        const isActive = option.value === value;

        return (
          <button
            key={option.value}
            ref={(element) => {
              buttonRefs.current[index] = element;
            }}
            id={`${baseId}-${option.value}`}
            type="button"
            role="radio"
            aria-checked={isActive}
            tabIndex={isActive || (selectedIndex === -1 && index === 0) ? 0 : -1}
            className={cn(
              "rounded-[calc(var(--sys-radius-control)-2px)] px-3 py-2 text-left transition-colors duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-service-blue focus-visible:ring-offset-2 focus-visible:ring-offset-panel",
              isActive
                ? "bg-elevated text-text-primary shadow-panel"
                : "text-text-secondary hover:bg-highlight hover:text-text-primary",
            )}
            onClick={() => onChange(option.value)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            <span className="block text-sm font-medium">{option.label}</span>
            {option.note ? <span className="mt-1 block mono-label text-text-secondary">{option.note}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
