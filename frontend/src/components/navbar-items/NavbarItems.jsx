import { Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const items = [
  { id: 0, text: "Home" },
  { id: 1, text: "Lopende Projecten " },
  { id: 2, text: "Diensten" },
  { id: 3, text: "Over Ons" },
  { id: 4, text: "Blog" },
  { id: 5, text: "Contact" },
];

const NavbarSubItem = ({ id, text }) => {
  let navigate = useNavigate();
  const [color, setColor] = useState("white");
  const handleMouseEnter = () => {
    setColor("#2c32b3");
  };

  const handleMouseLeave = () => {
    setColor("white");
  };
  return (
    <>
      <Grid item xs={6}>
        <motion.div variants={item}>
          <Grid container>
            <Grid
              item
              display={"flex"}
              alignItems={"center"}
              justifyContent="center"
            >
              <Typography
                variant="subtitle2"
                component={"span"}
                sx={{
                  fontSize: {
                    xs: "10px",
                    sm: "15px",
                    md: "18px",
                    lg: "28px",
                  },
                  color: color,
                  opacity: 0.5,
                  userSelect: "none",
                }}
                fontWeight={"bold"}
              >
                {"0" + (id + 1)}
              </Typography>
            </Grid>
            <Grid
              item
              display={"flex"}
              alignItems={"center"}
              justifyContent="center"
              onClick={() => navigate(`/${text.toLowerCase()}`)}
            >
              <motion.span
                whileHover={{ scale: 1.075 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
              >
                <Typography
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  component={"span"}
                  sx={{
                    ml: 3,
                    fontSize: {
                      xs: "15px",
                      sm: "25px",
                      md: "40px",
                      lg: "50px",
                    },
                    color: color,
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  {text}
                </Typography>
              </motion.span>
            </Grid>
          </Grid>
        </motion.div>
      </Grid>
    </>
  );
};

const NavbarItems = () => {
  return (
    <>
      <motion.div
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <Grid
          container
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          pl="16vw"
          pt="15vh"
          // sx={{ border: "1px solid red" }}
        >
          {items.map(({ id, text }) => {
            return <NavbarSubItem key={id} id={id} text={text} />;
          })}
        </Grid>
      </motion.div>
    </>
  );
};

export default NavbarItems;
