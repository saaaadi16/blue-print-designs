import { Box, Grid } from "@mui/material";
import { useState, useRef, useEffect } from "react";

import Navbar from "../components/navbar/Navbar";
import BodyText from "../components/body-text/BodyText";
import BodyDisplay from "../components/body-display/BodyDisplay";
import BodyAttributes from "../components/body-attributes/BodyAttributes";
import BodyProjects from "../components/body-projects/BodyProjects";
import Description from "../components/description/Description";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [wheel, setWheel] = useState(-1);

  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollDown =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollDown > scrollRef.current) {
        // console.log('User has scrolled down the page');
        setWheel(99);
      }
      scrollRef.current = scrollTop;
      // const windowHeight = window.innerHeight;
      // const pageHeight = document.body.scrollHeight;

      if (scrollTop === 0) {
        // console.log('User is at the top of the page');
        setWheel(-1);
      }

      // if (scrollTop + windowHeight >= pageHeight) {
      //   console.log('User is at the bottom of the page');
      // }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        // onWheel={(event) => {
        //   setWheel(event.deltaY);
        //   // console.log(event.deltaMode);
        // }}
        ref={scrollRef}
        sx={{
          backgroundColor: "black",
          color: "white",
          minHeight: "100vh",
          // cursor: `url(${Cursor})`,
        }}
      >
        <Grid container display="flex" justifyContent="center">
          <Grid item xs={12} display="flex" justifyContent="center">
            <Navbar open={open} setOpen={setOpen} wheel={wheel} />
          </Grid>
          <Grid
            item
            xs={10}
            display="flex"
            justifyContent="center"
            sx={{ mt: 10 }}
          >
            {!open && <BodyText />}
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="center"
            sx={{ mt: -1.7 }}
          >
            {!open && <BodyDisplay />}
          </Grid>
          <Grid
            item
            xs={10}
            display="flex"
            justifyContent="center"
            // sx={{ mt: 10 }}
          >
            {!open && <BodyAttributes />}
          </Grid>
          <Grid
            item
            xs={10}
            display="flex"
            justifyContent="center"
            sx={{ mt: 10 }}
          >
            {!open && <BodyProjects />}
          </Grid>
          <Grid
            item
            xs={10}
            display="flex"
            justifyContent="center"
            sx={{ mt: 10 }}
          >
            {!open && <Description />}
          </Grid>
          <Grid
            item
            xs={10}
            display="flex"
            justifyContent="center"
            sx={{ mt: 10 }}
          >
            {!open && <Footer />}
          </Grid>
          <Grid
            item
            xs={10}
            display="flex"
            justifyContent="center"
            sx={{ mt: 10 }}
          >
            <></>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
