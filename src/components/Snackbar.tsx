import { ReactNode } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

import { snackbarMotion } from "../motions/snackbarMotion";

export type SnackbarType = "info" | "warn" | "error" | "success" | "unset";

interface Props {
  message: string;
  type: SnackbarType;
  show: boolean;
}

function getTailwindClasses(type: SnackbarType): string {
  switch (type) {
    case "info":
      return "bg-blue-400";
    case "success":
      return "bg-green-400";
    case "warn":
      return "bg-yellow-400";
    case "error":
      return "bg-red-400";
    default:
      return "bg-white dark:bg-gray-800";
  }
}

function getIcon(type: SnackbarType): ReactNode {
  switch (type) {
    case "info": {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="block"
          viewBox="0 0 16 16"
        >
          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
      );
    }
    case "success": {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="block"
          viewBox="0 0 16 16"
        >
          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
        </svg>
      );
    }
    case "warn": {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="block"
          viewBox="0 0 16 16"
        >
          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
        </svg>
      );
    }
    case "error": {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="block"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      );
    }

    default: {
      return <div></div>;
    }
  }
}

function Snackbar({ type, message }: Props): JSX.Element {
  const color = getTailwindClasses(type);
  const icon = getIcon(type);

  return (
    <motion.div
      variants={snackbarMotion}
      initial="hidden"
      animate="show"
      exit="hidden"
      className={`${color} flex items-center w-fit py-2 px-5 rounded-lg fixed bottom-9 left-1/2 transform -translate-x-1/2`}
    >
      {icon} <span className="block ml-2">{message}</span>
    </motion.div>
  );
}

function AnimatedSnackbar(props: Props): JSX.Element {
  return ReactDOM.createPortal(
    <AnimatePresence>{props.show && <Snackbar {...props} />}</AnimatePresence>,
    document.body
  );
}

export default AnimatedSnackbar;
