import { Grid } from "@mui/material";

import ProjectMarque from "../project-marquee/ProjectMarquee";
import Carousel from "../carousel/Carousel";
import { AnimationHeading, AnimationBody } from "../animation/Animation";
import { CustomTypographyHeading } from "../custom-typography/CustomTypography";

const BodyProjects = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <AnimationHeading>
            <CustomTypographyHeading>Lopende Projecten</CustomTypographyHeading>
          </AnimationHeading>
        </Grid>
        <Grid item xs={12}>
          <AnimationBody>
            <ProjectMarque />
          </AnimationBody>
        </Grid>
        <Grid item xs={12}>
          <AnimationBody>
            <Carousel />
          </AnimationBody>
        </Grid>
      </Grid>
    </>
  );
};

export default BodyProjects;
