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
      initial={{ transform: "translate(0, 200px)", opacity: 0 }}
      animate={{ transform: "translate(0, 0)", opacity: 1 }}
      transition={{ type: "ease", duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export const MotionLeaveDown = (props: IMotion) => {
  const { children } = props;
  return (
    <motion.div
      initial={{ transform: "translate(0, 200px)", opacity: 0 }}
      animate={{ transform: "translate(0, 0)", opacity: 1 }}
      transition={{ type: "ease", duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};
