import { useEffect, useRef } from "react";

const useOutClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const outClick = (event: React.BaseSyntheticEvent | MouseEvent) => {
      if (!ref.current?.contains(event.target)) {
        callback();
      }
    };
    window.addEventListener("click", outClick);

    return () => window.removeEventListener("click", outClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
};

export default useOutClick;
