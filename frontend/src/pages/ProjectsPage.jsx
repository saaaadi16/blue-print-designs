import { Box, Grid } from "@mui/material";
import Projects from "../components/projects/Projects";
import Navbar from "../components/navbar/Navbar";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/footer/Footer";
import BGImg from "../assets/background-projects.jpg";

const ProjectPage = () => {
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
        sx={{
          backgroundImage: `url(${BGImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          // width: "vw",
          // height: "auto",
          backgroundColor: "black",
          color: "white",
          minHeight: "100vh",
          // cursor: `url(${Cursor})`,
        }}
      >
        {/* <Box
          component={"div"}
          sx={{
            backgroundImage: `url(${BGImg})`,
            width: "98.5vw",
            height: "50vh",
          }}
        >
          Saad Naumab
        </Box> */}
        <Grid container display="flex" justifyContent="center">
          <Grid item xs={12} display="flex" justifyContent="center">
            <Navbar open={open} setOpen={setOpen} wheel={wheel} />
          </Grid>
          <Grid
            item
            xs={10}
            display="flex"
            justifyContent="center"
            sx={{ mt: 20 }}
          >
            {!open && <Projects />}
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

export default ProjectPage;
