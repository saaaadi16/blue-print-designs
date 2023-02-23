import { motion } from "framer-motion";
import Video from "../../assets/4k.mp4";

const BodyDisplay = () => {
  return (
    <>
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        animate={{ y: 150, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 25,
          delay: 0.1,
        }}
      >
        <video
          muted
          loop
          autoPlay
          width={"100%"}
          height={"auto"}
          // style={{ zIndex: -1 }}
        >
          <source src={Video} type="video/mp4" alt={" "} />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </>
  );
};

export default BodyDisplay;
