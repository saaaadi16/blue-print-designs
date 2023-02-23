import { Box, Grid, Typography } from "@mui/material";
import { CustomTypographyHeading } from "../custom-typography/CustomTypography";
import { useState } from "react";
import { AnimationBody } from "../animation/Animation";

import Project1 from "../../assets/project 1.png";
import Project2 from "../../assets/project 2.jpeg";
import Project3 from "../../assets/project 3.jpeg";

const ProjectsItem = ({ image, text, description }) => {
  const [color, setColor] = useState("white");

  const handleMouseEnter = () => {
    setColor("#2c32b3");
  };

  const handleMouseLeave = () => {
    setColor("white");
  };

  return (
    <>
      <Grid item xs={12} sm={6}>
        <Grid
          container
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          my={2}
        >
          <Grid item xs={12}>
            <AnimationBody>
              <Typography
                fontWeight={"bold"}
                sx={{ color: color, fontSize: { xs: 12, sm: 20 } }}
              >
                {text}
              </Typography>
            </AnimationBody>
          </Grid>
          <Grid item xs={12}>
            <AnimationBody>
              <Typography
                fontSize={12}
                color={"gray"}
                sx={{ fontSize: { xs: 8, sm: 17 } }}
              >
                {description}
              </Typography>
            </AnimationBody>
          </Grid>
          <Grid item xs={12} mt={2}>
            <AnimationBody>
              <Box
                component={"img"}
                src={image}
                alt={text}
                width={"40vw"}
                height={"40vw"}
              />
            </AnimationBody>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const Projects = () => {
  const items = [
    {
      id: 0,
      image: Project1,
      text: "PlotCore",
      description:
        "Plotcore biedt woningzoekenden een platform om woningen onder de marktwaarde te vinden die al te koop staan. Een extra dienstverlening die ervoor zorgt dat geïnteresseerden naar de juiste woningen zoeken met de juiste prijs.",
    },
    {
      id: 1,
      image: Project3,
      text: "The Growth Capital",
      description:
        "The Growth Capital is een financiele instelling waarbij wij het genoegen hadden om hun visie in kaart te brengen. The Growth Capital staat voor het veranderen van de werkersmentaliteit naar het passief beleggen.",
    },
    {
      id: 2,
      image: Project2,
      text: "Norib",
      description:
        "Problematic voor moslim woningzoekenden is dat er niet om rentes heen gewerkt kan worden bij de aanschaf van woningen. Norib gaat dit tegen door een revolutionaire manier van financieren te verzorgen voor deze doelgroep waarbij zij toch een woning kunnen kopen.",
    },
  ];

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <CustomTypographyHeading>Our Projects</CustomTypographyHeading>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={0.5}>
            {items.map(({ id, image, text, description }) => (
              <ProjectsItem
                key={id}
                image={image}
                text={text}
                description={description}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Projects;
