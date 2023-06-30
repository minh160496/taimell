import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IMotion {
  children: ReactNode;
}

export const Motion = (props: IMotion) => {
  const { children } = props;
  return (
    <motion.div
      initial={{ transform: "translate(0, 300px)", opacity: 0 }}
      animate={{ transform: "translate(0, 0)", opacity: 1 }}
      transition={{ type: "ease", duration: 1.2 }}
    >
      {children}
    </motion.div>
  );
};

export const MotionHeading = (props: IMotion) => {
  const { children } = props;
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      {children}
    </motion.div>
  );
};
