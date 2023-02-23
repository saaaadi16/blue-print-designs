import { motion } from "framer-motion";
import { ArrowForward as ArrowIcon, TrendingFlat } from "@mui/icons-material";

export const AnimatedHeadingArrow = ({ rotate, fontSize, color, mt }) => {
  return (
    <motion.span
      whileInView={{ y: 0, opacity: 1 }}
      animate={{ rotate: rotate, y: 100, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 25,
        // delay: 0.3,
      }}
    >
      <TrendingFlat
        sx={{
          pt: 1.25,
          fontSize: fontSize,
          color: color,
          mt: mt,
        }}
      />
    </motion.span>
  );
};

export const Arrow = ({ rotate, variant, fontSize, color, mt }) => {
  return (
    <>
      <motion.span
        // whileInView={{ y: 0, opacity: 1 }}
        animate={{ rotate: rotate }}
        // transition={{
        //   type: "spring",
        //   stiffness: 80,
        //   damping: 25,
        //   // delay: 0.3,
        // }}
      >
        {variant === "arrow" ? (
          <ArrowIcon sx={{ pt: 1.25, fontSize: fontSize }} />
        ) : (
          <TrendingFlat
            sx={{
              pt: 1.25,
              fontSize: fontSize,
              color: color,
              mt: mt,
            }}
          />
        )}
      </motion.span>
    </>
  );
};
