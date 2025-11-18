import type { LucideIcon } from "lucide-react";
import { BookOpenCheck, Boxes, LayoutDashboard, Rocket, Settings } from "lucide-react";

import { APP_ROUTES } from "@/routes";

export type NavItem = {
  label: string;
  icon: LucideIcon;
  route: string;
  isHighlighted?: boolean;
  badge?: string;
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

export const NAV_SECTIONS: NavSection[] = [
  {
    title: "Home",
    items: [
      {
        label: "My Dashboard",
        icon: LayoutDashboard,
        route: APP_ROUTES.dashboard,
        isHighlighted: true,
      },
      {
        label: "Playbooks",
        icon: Rocket,
        route: APP_ROUTES.playbooks,
        badge: "Soon",
      },
      {
        label: "Integrations",
        icon: Boxes,
        route: APP_ROUTES.integrations,
      },
    ],
  },
  {
    title: "Other",
    items: [
      {
        label: "Documentation",
        icon: BookOpenCheck,
        route: APP_ROUTES.documentation,
      },
      {
        label: "Settings",
        icon: Settings,
        route: APP_ROUTES.settings,
      },
    ],
  },
];
