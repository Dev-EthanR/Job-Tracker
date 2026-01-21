import { useEffect } from "react";

function useKey(key: string, callback: () => void) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === key) {
        callback();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [callback]);
}

export default useKey;
