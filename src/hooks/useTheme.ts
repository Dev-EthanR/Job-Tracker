// context/useModal.ts
import { useContext } from "react";
import { ThemeCtx } from "../App";

export default function useTheme() {
  const ctx = useContext(ThemeCtx);

  if (!ctx) {
    throw new Error("useTheme must be used within useTheme.Provider");
  }

  return ctx;
}
