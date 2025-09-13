"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Persisted theme key
const STORAGE_KEY = "ui-theme-mode"; // "light" | "dark"

function applyTheme(theme: "light" | "dark") {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
}

export default function ThemeModeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // On mount, resolve theme from storage or system preference
    const saved = (localStorage.getItem(STORAGE_KEY) as "light" | "dark" | null);
    if (saved) {
      setTheme(saved);
      applyTheme(saved);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial: "light" | "dark" = prefersDark ? "dark" : "light";
      setTheme(initial);
      applyTheme(initial);
    }
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  };

  if (!mounted) return null;

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label="Toggle theme"
      className="group relative inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border/60 bg-elevated/80 hover:bg-elevated"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
      {theme === "light" ? (
        <>
          <Moon className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
          <span className="text-sm text-foreground/80">Night</span>
        </>
      ) : (
        <>
          <Sun className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
          <span className="text-sm text-foreground/80">Day</span>
        </>
      )}
    </motion.button>
  );
}
