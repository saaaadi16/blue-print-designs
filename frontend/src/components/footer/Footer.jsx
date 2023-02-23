import { Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState, Fragment } from "react";
import { Instagram, Facebook, LinkedIn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { Arrow } from "../arrow/Arrow";
import { CustomTypographyBody } from "../custom-typography/CustomTypography";
import { AnimationHeading } from "../animation/Animation";
import Logo from "../../assets/1080p transparent.gif";

const items = [
  { id: 0, text: "Home" },
  { id: 1, text: "Lopende Projecten" },
  { id: 3, text: "Diensten" },
  { id: 2, text: "Over Ons" },
  { id: 4, text: "Blog" },
  { id: 5, text: "Contact" },
];

const socialItems = [
  {
    id: 1,
    component: (
      <a
        href={"https://www.instagram.com/blueprintdesigns.nl"}
        style={{ color: "inherit" }}
      >
        <Instagram sx={{ fontSize: { xs: 15, sm: 20, md: 25, lg: 30 } }} />
      </a>
    ),
  },
  {
    id: 2,
    component: (
      <a
        href={"https://www.facebook.com/profile.php?id=100089482491808"}
        style={{ color: "inherit" }}
      >
        <Facebook
          sx={{ fontSize: { xs: 15, sm: 20, md: 25, lg: 30 } }}
          href={""}
        />
      </a>
    ),
  },
  {
    id: 3,
    component: (
      <a
        href={"https://www.linkedin.com/company/blueprintdesigns/ "}
        style={{ color: "inherit" }}
      >
        <LinkedIn
          sx={{ fontSize: { xs: 15, sm: 20, md: 25, lg: 30 } }}
          href={""}
        />
      </a>
    ),
  },
];

const FooterItems = ({ text }) => {
  const [rotate, setRotate] = useState(-45);
  let navigate = useNavigate();
  const handleMouseEnter = () => {
    setRotate(0);
  };

  const handleMouseLeave = () => {
    setRotate(-45);
  };
  return (
    <>
      <motion.div
        layout
        whileInView={{
          x: 0,
          borderRadius: 2,
          borderBottom: "1px solid rgb(255,255,255,0.1)",
          opacity: 1,
        }}
        whileHover={{
          borderBottom: `1px solid rgb(255,255,255,1)`,
          scale: 1.04,
        }}
        animate={{
          x: -50,
          borderBottom: "1px solid rgb(255,255,255,0.1)",
          opacity: 0.1,
        }}
        transition={{
          // delay: 0.5,
          // duration: 0.5,
          // stiffness: 5,
          // damping: 50,
          // delay: 0.2,
          x: { duration: 0.5 },
          default: { ease: "linear" },
        }}
      >
        <Grid
          container
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          borderRadius={"1rem"}
          // borderBottom={"1px solid white"}
          alignItems="center"
          sx={{
            cursor: "pointer",
          }}
          onClick={() => {
            // console.log(text);
            navigate(`/${text.toLowerCase()}`);
          }}
        >
          <Grid
            item
            xs={6}
            md={6}
            display={"flex"}
            justifyContent={"start"}
            // pl={3}
          >
            <CustomTypographyBody>{text}</CustomTypographyBody>
          </Grid>
          <Grid
            item
            xs={6}
            md={6}
            display={"flex"}
            justifyContent={"end"}
            // pr={3}
          >
            <Arrow
              rotate={rotate}
              fontSize={{
                xs: "1.2rem",
                sm: "1.4rem",
                md: "1.6rem",
                lg: "1.8rem",
              }}
            />
          </Grid>
        </Grid>
      </motion.div>
    </>
  );
};

const Footer = () => {
  let navigate = useNavigate();
  const [rotate, setRotate] = useState(-45);

  const handleNavigate = () => {
    navigate("/contact");
  };

  const handleMouseEnter = () => {
    setRotate(0);
  };

  const handleMouseLeave = () => {
    setRotate(-45);
  };

  return (
    <>
      <AnimationHeading>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              component="div"
              sx={{
                fontSize: { xs: "30px", sm: "40px", md: "58px", lg: "68px" },
                mb: -2,
              }}
            >
              Have an idea?
            </Typography>
            <Typography
              component="div"
              sx={{
                fontSize: { xs: "30px", sm: "40px", md: "58px", lg: "68px" },
              }}
            >
              Let's bring it to life
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
                  ml: 5,
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
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={4}
          >
            {/* <motion.div
              whileInView={{ rotate: 180, duration: 100 }}
              animate={{ rotate: 360, duration: 100 }}
            > */}
            <img src={Logo} alt="3D Logo" width={"550vw"} height={"auto"} />
            {/* </motion.div> */}
          </Grid>
          <Grid
            item
            xs={4}
            mt={4}

            // display={"flex"}
            // justifyContent={"center"}
            // alignItems={"center"}
          >
            {items.map(({ id, text }) => (
              <FooterItems key={id} text={text} />
            ))}
          </Grid>
          <Grid item xs={4} display={"flex"} justifyContent={"center"} mt={4}>
            <Grid container display={"flex"} justifyContent={"center"}>
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"space-evenly"}
              >
                {socialItems.map(({ id, component }) => (
                  <Fragment key={id}>{component}</Fragment>
                ))}
              </Grid>
              <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      component={"p"}
                      align={"center"}
                      sx={{
                        fontSize: {
                          xs: 5,
                          sm: 10,
                          md: 14,
                          lg: 17,
                        },
                      }}
                    >
                      Street: Weena 505,
                    </Typography>
                    <Typography
                      component={"p"}
                      align={"center"}
                      sx={{
                        fontSize: {
                          xs: 5,
                          sm: 10,
                          md: 14,
                          lg: 17,
                        },
                      }}
                    >
                      Post Code: 3013 AL,
                    </Typography>
                    <Typography
                      component={"p"}
                      align={"center"}
                      sx={{
                        fontSize: {
                          xs: 5,
                          sm: 10,
                          md: 14,
                          lg: 17,
                        },
                      }}
                    >
                      City: Rotterdam, Netherlands
                    </Typography>
                  </Grid>
                  <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                    <Typography
                      component={"p"}
                      align={"center"}
                      mt={-2}
                      sx={{
                        fontSize: {
                          xs: 5,
                          sm: 10,
                          md: 14,
                          lg: 17,
                        },
                      }}
                    >
                      Email:
                    </Typography>
                    <Typography
                      component={"a"}
                      href="mailto: info@blueprintdesigns.nl"
                      ml={0.75}
                      mt={-2}
                      sx={{
                        textDecoration: "none",
                        color: "white",
                        "&:hover": { textDecoration: "underline" },
                        fontSize: {
                          xs: 5,
                          sm: 10,
                          md: 14,
                          lg: 17,
                        },
                      }}
                    >
                      info@blueprintdesigns.nl
                    </Typography>
                  </Grid>
                  <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                    <Typography
                      component={"p"}
                      align={"center"}
                      mt={-2}
                      sx={{
                        fontSize: {
                          xs: 5,
                          sm: 10,
                          md: 14,
                          lg: 17,
                        },
                      }}
                    >
                      Phone:
                    </Typography>
                    <Typography
                      component={"a"}
                      href="tel: 085-800-0082"
                      ml={0.75}
                      mt={-2}
                      sx={{
                        fontSize: {
                          xs: 5,
                          sm: 10,
                          md: 14,
                          lg: 17,
                        },
                        textDecoration: "none",
                        color: "white",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      085 800 0082
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                mt={4}
              >
                <Grid container display={"flex"} justifyContent={"center"}>
                  <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                    <Typography
                      component={"p"}
                      variant={"subtitle2"}
                      color={"grey"}
                      sx={{
                        fontSize: {
                          xs: 5,
                          sm: 10,
                          md: 14,
                          lg: 17,
                        },
                      }}
                    >
                      Opgericht in 2023
                    </Typography>
                  </Grid>
                  <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                    <Typography
                      component={"p"}
                      variant={"subtitle2"}
                      color={"grey"}
                      mt={-3.5}
                      sx={{
                        fontSize: {
                          xs: 5,
                          sm: 10,
                          md: 14,
                          lg: 17,
                        },
                      }}
                    >
                      © {new Date().getFullYear()}. BluePrintDesigns.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AnimationHeading>
    </>
  );
};

export default Footer;
