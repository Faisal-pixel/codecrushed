
import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedContainerProps extends MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedContainer = ({
  children,
  className,
  delay = 0,
  ...motionProps
}: AnimatedContainerProps) => {
  const defaultAnimations = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const animations = {
    ...defaultAnimations,
    ...motionProps,
  };

  return (
    <motion.div
      className={cn("", className)}
      {...animations}
    >
      {children}
    </motion.div>
  );
};
