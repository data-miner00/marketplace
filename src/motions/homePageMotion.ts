import { Variants } from "framer-motion";

export const headingMotion: Variants = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  show: {
    animationDuration: "500ms",
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
    },
  },
};

export const paragraphMotion: Variants = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  show: {
    animationDuration: "500ms",
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      delay: 0.3,
      type: "tween",
    },
  },
};

export const stackCardContainerMotion: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delay: 0.5,
    },
  },
};

export const stackCardItemMotion: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
