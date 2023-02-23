import { motion } from "framer-motion";

export const AnimationHeading = ({ children }) => {
  return (
    <>
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        animate={{ y: 100, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 25,
          // delay: 0.3,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export const AnimationBody = ({ children }) => {
  return (
    <>
      <motion.div
        whileInView={{ y: 0, opacity: 0.8 }}
        animate={{ y: 150, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 25,
          delay: 0.1,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
