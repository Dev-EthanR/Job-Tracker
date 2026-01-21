// context/useModal.ts
import { useContext } from "react";
import { ToastCtx } from "../App";

export default function useToast() {
  const ctx = useContext(ToastCtx);

  if (!ctx) {
    throw new Error("useToast must be used within useToast.Provider");
  }

  return ctx;
}
