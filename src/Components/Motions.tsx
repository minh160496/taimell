import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IMotion {
  children: ReactNode;
}

export const MotionAfter = (props: IMotion) => {
  const { children } = props;
  return (
    <motion.div
      animate={{ rotate: ["-5deg", 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      {children}
    </motion.div>
  );
};
