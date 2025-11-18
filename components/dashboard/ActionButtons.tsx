import { Plus } from "lucide-react";

import styles from "@/styles/ui/Dashboard.module.css";

type ActionButton = {
  label: string;
  variant: "primary" | "outline";
  icon?: string;
};

const iconMap = {
  Plus,
};

type ActionButtonsProps = {
  buttons: ActionButton[];
};

const labelClassNames: Record<string, string> = {
  "Find Companies": styles.findActionButton,
  "Find People": styles.findActionButton,
  "New Grid": styles.newGridButton,
};

export function ActionButtons({ buttons }: ActionButtonsProps) {
  return (
    <div className={styles.actions}>
      {buttons.map((button) => {
        const Icon = button.icon ? iconMap[button.icon as keyof typeof iconMap] : null;
        const decoratedClassName = [
          styles.actionButton,
          styles[button.variant],
          labelClassNames[button.label],
        ]
          .filter(Boolean)
          .join(" ");
        return (
          <button key={button.label} type="button" className={decoratedClassName}>
            {Icon && <Icon size={16} />}
            {button.label}
          </button>
        );
      })}
    </div>
  );
}
