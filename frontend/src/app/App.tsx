import { useEffect, useState } from "react";

import { DashboardPage } from "../features/dashboard/DashboardPage";
import { DocumentationPage } from "../features/documentation/DocumentationPage";
import { LandingPage } from "../features/landing/LandingPage";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  const storedTheme = window.localStorage.getItem("openleukemia-theme");

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  if (typeof window.matchMedia !== "function") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const isDashboardRoute = window.location.pathname === "/app";
  const isDocumentationRoute = window.location.pathname === "/docs";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("openleukemia-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  if (isDashboardRoute) {
    return <DashboardPage />;
  }

  if (isDocumentationRoute) {
    return <DocumentationPage onThemeToggle={toggleTheme} theme={theme} />;
  }

  return <LandingPage onThemeToggle={toggleTheme} theme={theme} />;
}
