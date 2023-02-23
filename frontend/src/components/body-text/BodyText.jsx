import { Grid, Typography } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
// import TypewriterStyled from "./BodyTextStyle";
// import Typewriter from "typewriter-effect";

const BodyText = () => {
  return (
    <Grid container>
      <Grid item xs={12} mt={8}>
        <Typography
          component="span"
          sx={{ fontSize: { xs: "20px", sm: "30px", md: "40px", lg: "50px" } }}
        >
          Een digitaal bureau voor de toekomst. Wij creëren en onderhouden
          end-to-end{" "}
          <span style={{ color: "#2c32b3" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "Websites",
                "Mobiele Applicaties",
                "Web Apps",
                "Digital Expertise",
                "Web Scraping",
                "Automation",
              ]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={3000}
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default BodyText;
