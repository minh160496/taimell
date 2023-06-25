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

export const MotionSon = (props: IMotion) => {
  const { children } = props;
  return (
    <motion.div
      animate={{ rotate: ["45deg", 0] }}
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

export const MotionHoa = (props: IMotion) => {
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
