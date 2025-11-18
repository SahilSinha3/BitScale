export const APP_ROUTES = {
  dashboard: "/",
  playbooks: "/playbooks",
  integrations: "/integrations",
  documentation: "/documentation",
  settings: "/settings",
} as const;

export type AppRouteKey = keyof typeof APP_ROUTES;
