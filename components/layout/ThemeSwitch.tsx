"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import styles from "@/styles/components/layout/ThemeSwitch.module.css";

const STORAGE_KEY = "bitscale-theme";

type ThemeMode = "light" | "dark";

function resolveInitialTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "dark" || stored === "light") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeSwitch() {
  const [theme, setTheme] = useState<ThemeMode>(() => resolveInitialTheme());

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    document.documentElement.dataset.theme = theme;
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: ThemeMode = prev === "light" ? "dark" : "light";
      document.documentElement.dataset.theme = next;
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  const Icon = theme === "light" ? Sun : Moon;

  return (
    <button
      type="button"
      className={`${styles.button} ${theme === "dark" ? styles.dark : ""}`}
      onClick={toggleTheme}
      aria-label="Toggle color theme"
    >
      <Icon className={styles.icon} />
    </button>
  );
}
