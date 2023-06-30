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

export const useSizeWindow = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWidowSize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidowSize);

    return () => window.removeEventListener("resize", handleWidowSize);
  }, []);

  return { wWindow: width };
};
