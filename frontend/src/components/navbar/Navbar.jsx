import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/material";
import {
  FilterList as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import NavbarItems from "../navbar-items/NavbarItems";
import { Arrow } from "../arrow/Arrow";
import Logo from "../../assets/isolated logo.png";

const xs = 4;

const SubGrid = ({ children }) => {
  return (
    <Grid item xs={6} display="flex" justifyContent={"center"}>
      {children}
    </Grid>
  );
};

const Navbar = ({ open, setOpen, wheel }) => {
  const [rotate, setRotate] = useState(-45);
  let navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/contact");
  };

  const handleMouseEnter = () => {
    setRotate(0);
  };

  const handleMouseLeave = () => {
    setRotate(-45);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const items = [
    {
      id: 0,
      component: !open && (
        <motion.div
          animate={{
            x: wheel >= 0 ? "-14.25vw" : 0,
            y: wheel >= 0 ? "-0.75vh" : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 17,
            // delay: wheel < 0 && 0.8,
          }}
        >
          <Box
            onClick={() => navigate("/home")}
            component={"img"}
            src={Logo}
            alt={"blue print logo"}
            sx={{
              display: "flex",
              justifyContent: "center",
              width: { xs: "4vh", sm: "6vh", md: "7vh", lg: "10vh" },
              cursor: "pointer",
            }}
          />
        </motion.div>
      ),
    },
    {
      id: 1,
      component: !open && (
        <motion.div
          animate={{ y: wheel >= 0 ? -70 : 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 17,
            // delay: wheel < 0 && 0.8,
          }}
        >
          <Button
            onClick={handleNavigate}
            color="secondary"
            variant="contained"
            size="small"
            sx={{
              // display: { xs: "none", sm: "flex" },
              borderRadius: "1.25em",
              textTransform: "none",
              px: 3,
              backgroundColor: "#2c32b3",
              "&:hover": {
                backgroundColor: "#2c32b3",
              },
              // width: {
              //   xs: "0.4em",
              //   sm: "0.6em",
              //   md: "0.8em",
              //   lg: "auto",
              // },
              height: "3.25em",
            }}
            endIcon={<Arrow rotate={rotate} variant={"arrow"} />}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Typography
              fontWeight={"bold"}
              sx={{ fontSize: { xs: "9px", sm: "12px", md: "15px" } }}
            >
              Neem Contact Op
            </Typography>
          </Button>
        </motion.div>
      ),
    },
    {
      id: 2,
      component: (
        <Typography
          variant="h5"
          fontWeight={"bold"}
          onClick={handleOpen}
          sx={{ pt: open && 2, ml: open && -3.5, zIndex: 999 }}
        >
          {!open && (
            <>
              <motion.div
                animate={{
                  x: wheel >= 0 ? "13.75vw" : 0,
                  y: wheel >= 0 ? "-0.75vh" : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 17,
                  // delay: wheel < 0 && 0.8,
                }}
              >
                <Typography
                  component={"span"}
                  sx={{
                    fontSize: {
                      xs: "0.4em",
                      sm: "0.6em",
                      md: "0.8em",
                      lg: "1em",
                      cursor: "pointer",
                      userSelect: "none",
                    },
                  }}
                >
                  <Grid
                    container
                    spacing={0.5}
                    display="flex"
                    justifyContent={"center"}
                  >
                    <SubGrid>
                      {/* <motion.div whileTap={{ scale: "1em" }}> */}
                      Menu
                      {/* </motion.div> */}
                    </SubGrid>
                    <SubGrid>
                      <MenuIcon
                        sx={{
                          width: {
                            xs: "0.4em",
                            sm: "0.6em",
                            md: "0.8em",
                            lg: "1em",
                          },
                          height: "auto",
                        }}
                      />
                    </SubGrid>
                  </Grid>
                </Typography>
              </motion.div>
            </>
          )}
          {open && (
            <>
              <Typography
                component={"span"}
                sx={{
                  fontSize: {
                    xs: "0.4em",
                    sm: "0.6em",
                    md: "0.8em",
                    lg: "1em",
                    cursor: "pointer",
                    userSelect: "none",
                  },
                }}
              >
                <Grid
                  container
                  spacing={0.5}
                  display="flex"
                  justifyContent={"center"}
                >
                  <SubGrid>Close</SubGrid>
                  <SubGrid>
                    <CloseIcon
                      sx={{
                        width: {
                          xs: "0.4em",
                          sm: "0.6em",
                          md: "0.8em",
                          lg: "1em",
                        },
                        height: "auto",
                      }}
                    />
                  </SubGrid>
                </Grid>
              </Typography>
            </>
          )}
        </Typography>
      ),
    },
  ];

  return (
    <>
      <Grid
        container
        sx={{
          mt: 2,
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          zIndex: 99,
        }}
      >
        {items.map(({ id, component }) => (
          <Grid
            item
            xs={xs}
            key={id}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box component="div">{component}</Box>
          </Grid>
        ))}
        {open && <NavbarItems />}
      </Grid>
    </>
  );
};

export default Navbar;
