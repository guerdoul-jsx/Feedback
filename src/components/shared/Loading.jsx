import React from "react";
import { motion } from "framer-motion";

const loading = {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
}

const loadingContainer = {
  width: "4rem",
  height: "4rem",
  display: "flex",
  justifyContent: "space-around",
  alignItems: 'center'
};

const loadingCircle = {
  display: "block",
  width: "1rem",
  height: "1rem",
  backgroundColor: "#ff6a95",
  borderRadius: "0.5rem",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "60%",
  },
};

const loadingCircleTransition = {
  duration : 0.4,
  yoyo : Infinity,
  ease: 'easeInOut'
}

const Loading = () => {
  return (
    <div>
        <div style={loading}>
        <motion.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
        </motion.div>
        </div>
    </div>
  );
};

export default Loading;