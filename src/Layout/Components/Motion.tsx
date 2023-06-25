import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useWindowScroll } from "../../hooks/useWindow";

interface IMotionHeader {
  isHomePage?: boolean;
  children: ReactNode;
}

export const MotionHeader = (props: IMotionHeader) => {
  const { isHomePage = false, children } = props;
  const { scrollTop } = useWindowScroll();

  return (
    <motion.div
      animate
      style={{
        background: isHomePage && scrollTop < 100 ? "transparent" : "white",
        boxShadow:
          isHomePage && scrollTop < 100
            ? "none"
            : "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 3,
        width: "100%",
      }}
    >
      {children}
    </motion.div>
  );
};
