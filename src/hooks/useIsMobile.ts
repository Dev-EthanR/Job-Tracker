import { useState, useEffect } from "react";

const getIsMobile = (): boolean => window.innerWidth <= 768;

export default function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(getIsMobile());

  useEffect(() => {
    const onResize = (): void => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return isMobile;
}
