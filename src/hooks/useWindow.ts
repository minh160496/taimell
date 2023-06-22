import { useEffect, useState } from "react";

export const useWindowScroll = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleWidowScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleWidowScroll);

    return () => window.removeEventListener("scroll", handleWidowScroll);
  }, []);

  return { scrollTop };
};
