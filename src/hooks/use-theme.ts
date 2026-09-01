"use client";

import { useEffect, useState } from "react";

export function useTheme() {
  const [dark, setDark] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false,
  );

  useEffect(() => {
    const root = document.documentElement;
    const update = () => setDark(root.classList.contains("dark"));
    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return { dark };
}
