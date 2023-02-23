import { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { AnimatedHeadingArrow, Arrow } from "../arrow/Arrow";
import { CustomTypographyHeading } from "../custom-typography/CustomTypography";
import { AnimationHeading } from "../animation/Animation";
import DescriptionDisplay from "../description-display/DescriptionDisplay";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const DescriptionItems = ({ text, description }) => {
  const [rotate, setRotate] = useState(-45);
  const [color, setColor] = useState(null);

  const handleMouseEnter = () => {
    setRotate(0);
    setColor("rgb(44, 50, 179, .525)");
  };

  const handleMouseLeave = () => {
    setRotate(-45);
    setColor(null);
  };

  return (
    <Grid
      container
      item
      xs={3}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={color}
      border={"0.1px solid rgba(255, 255, 255, .35)"}
      sx={{
        cursor: "pointer",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Grid item xs={12} mt={rotate ? 13.5 : -1}>
        {rotate ? (
          <Typography
            align="center"
            fontSize={{ xs: 12, sm: 15, md: 20, lg: 25 }}
            sx={{ rotate: "-90deg" }}
          >
            {text}
          </Typography>
        ) : (
          <motion.div
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <Box display={"flex"} justifyContent={"center"} mb={2.5}>
              <Typography
                align="center"
                fontSize={{ xs: 12, sm: 14, md: 18, lg: 25 }}
                fontWeight={"bold"}
              >
                {text}
              </Typography>
            </Box>
            {description.map(({ id, text }) => (
              <motion.div key={id} variants={item}>
                <Box>
                  <Typography
                    align="center"
                    fontSize={{ xs: 10, sm: 14, md: 16, lg: 18 }}
                  >
                    ▪ {text.toUpperCase()}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </motion.div>
        )}
      </Grid>
      <Grid item xs={12} display={"flex"} justifyContent={"center"}>
        <Arrow
          rotate={rotate}
          fontSize={{ xs: "1.2rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" }}
        />
      </Grid>
    </Grid>
  );
};

const items = [
  {
    id: 0,
    text: "Web Design & Development",
    description: [
      { id: 0, text: "Webontwikkeling" },
      { id: 1, text: "Web ontwerp" },
      { id: 2, text: "UI / UX" },
      { id: 3, text: "Hosting" },
      { id: 4, text: "Onderhoud en Support" },
    ],
  },
  {
    id: 1,
    text: "Web Scraping & Automation",
    description: [
      { id: 0, text: "Scrapy" },
      { id: 1, text: "Bot Automation" },
      { id: 2, text: "Lead Generations" },
      { id: 3, text: "Data Mining" },
    ],
  },
  {
    id: 2,
    text: "Marketing",
    description: [
      { id: 0, text: "SEO" },
      { id: 1, text: "SEA" },
      { id: 2, text: "Social Media Marketing" },
      { id: 3, text: "Email Marketing" },
    ],
  },
  {
    id: 3,
    text: "Branding",
    description: [
      { id: 0, text: "UX / UI Design" },
      { id: 1, text: "Graphic Design" },
      { id: 2, text: "Logo Design" },
      { id: 3, text: "Brand Strategy" },
      { id: 4, text: "Video Production" },
    ],
  },
];

const Description = () => {
  const [rotate, setRotate] = useState(-45);

  const handleMouseEnter = () => {
    setRotate(0);
  };

  const handleMouseLeave = () => {
    setRotate(-45);
  };
  return (
    <>
      <Grid container display={"flex"} justifyContent={"center"}>
        <Grid container item xs={12}>
          <Grid item xs={6}>
            <AnimationHeading>
              <CustomTypographyHeading>Onze Diensten</CustomTypographyHeading>
            </AnimationHeading>
          </Grid>
          <Grid
            item
            xs={6}
            display={"flex"}
            justifyContent={"end"}
            // alignItems={"center"}
          >
            <AnimationHeading>
              <Typography
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                sx={{
                  color: "#2c32b3",
                  fontSize: {
                    xs: "1em",
                    sx: "2em",
                    md: "2.2em",
                    lg: "3em",
                  },
                  zIndex: 99,
                  cursor: "pointer",
                }}
              >
                {"meer "}
              </Typography>
            </AnimationHeading>

            <AnimatedHeadingArrow
              rotate={rotate}
              fontSize={{
                xs: "20px",
                sm: "1.25rem",
                md: "2rem",
                lg: "2.5rem",
              }}
              color={"#2c32b3"}
              mt={{ xs: -0.75, sm: -0.85, md: 0.25, lg: 1.25 }}
            />
          </Grid>
          <Grid item xs={12} mb={4}>
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
              <DescriptionDisplay />
            </motion.div>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={11.85}
          height={{ xs: "45vh", sm: "55vh", md: "65vh", lg: "70vh" }}
        >
          {items.map(({ text, id, description }) => (
            <DescriptionItems key={id} text={text} description={description} />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Description;

// {
//   !rotate && (
//     <motion.div
//       className="container"
//       variants={container}
//       initial="hidden"
//       animate="visible"
//     >
//       <Typography align="center" fontSize={25}>
//         {text}
//       </Typography>
//       {description.map(({ id, text }) => (
//         <Box key={id} display={"flex"} justifyContent={"center"}>
//           <motion.div variants={item}>
//             <Typography>▪ {text.toUpperCase()}</Typography>
//           </motion.div>
//         </Box>
//       ))}
//     </motion.div>
//   );
// }
