import { useLayoutEffect, useRef, useState } from "react";

const useAnimateHeight = <T>(toggle: boolean, ...extraDependency: T[]) => {
  const [height, setHeight] = useState<number | "auto">("auto");
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!contentRef.current) return;

    if (toggle) {
      setHeight(contentRef.current.scrollHeight + 5);
    } else {
      setHeight(0);
    }
  }, [toggle, extraDependency]);

  return { height, contentRef };
};

export default useAnimateHeight;
