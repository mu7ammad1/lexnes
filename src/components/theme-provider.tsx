"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export function SafeThemeProvider({ children, ...props }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>; // منع الاختلاف أثناء الـ hydration

  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
