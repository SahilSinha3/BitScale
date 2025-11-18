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

export function ActionButtons({ buttons }: ActionButtonsProps) {
  return (
    <div className={styles.actions}>
      {buttons.map((button) => {
        const Icon = button.icon ? iconMap[button.icon as keyof typeof iconMap] : null;
        return (
          <button
            key={button.label}
            type="button"
            className={`${styles.actionButton} ${styles[button.variant]}`}
          >
            {Icon && <Icon size={16} />}
            {button.label}
          </button>
        );
      })}
    </div>
  );
}
