import { Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const SubBodyAttributes = ({ heading, description }) => {
  return (
    <Grid item xs={4} display={"flex"} justifyContent={"center"}>
      <Grid container>
        <Grid item xs={12}>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            animate={{ y: 300, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 25,
              // delay: 0.3,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1em", sx: "2em", md: "2.2em", lg: "3em" },
              }}
            >
              {heading}
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12}>
          <motion.div
            whileInView={{ y: 0, opacity: 0.8 }}
            animate={{ y: 400, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 25,
              delay: 0.1,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "0.6em", sx: "0.8em", md: "1em", lg: "1.3em" },
              }}
            >
              {description}
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </Grid>
  );
};

const items = [
  {
    id: 0,
    heading: "Creëer.",
    description:
      "Laat jouw creatieve visie door ons team van top experts tot leven brengen. Wij zien hier met een doel: Het helpen en optimaliseren van de digitalisatie van jouw bedrijf.",
  },
  {
    id: 1,
    heading: "Samenwerken.",
    description:
      "Laat jouw creatieve visie door ons team van top experts tot leven brengen. Wij zien hier met een doel: Het helpen en optimaliseren van de digitalisatie van jouw bedrijf.",
  },
  {
    id: 3,
    heading: "Voortdurend.",
    description:
      "Laat jouw creatieve visie door ons team van top experts tot leven brengen. Wij zien hier met een doel: Het helpen en optimaliseren van de digitalisatie van jouw bedrijf.",
  },
];

const BodyAttributes = () => {
  return (
    <>
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        spacing={3}
        // sx={{ border: "1px solid red" }}
      >
        {items.map(({ id, heading, description }) => (
          <SubBodyAttributes
            key={id}
            heading={heading}
            description={description}
          />
        ))}
      </Grid>
    </>
  );
};

export default BodyAttributes;
