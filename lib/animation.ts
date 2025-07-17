import { Variants } from "motion/react";

export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } }
}

export const menuSlide: Variants = {
  initial: {
    x: "calc(100% + 100px)",
  },
  enter: {
    x: "0",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    x: "calc(100% + 100px)",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const slide: Variants = {
  initial: {
    x: 80,
  },
  enter: {
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.1,
    },
  },
  exit: {
    x: 80,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.1,
    },
  },
};

export const containerVariants: Variants = {
  initial: {},
  enter: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};


export const itemVariants: Variants = {
  initial: { x: 80, opacity: 0 },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    x: 80,
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
