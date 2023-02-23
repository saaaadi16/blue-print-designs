import { Box, Grid } from "@mui/material";
import ContactUs from "../components/contact-us/ContactUs";

const ContactUsPage = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          minHeight: "100vh",
        }}
      >
        <Grid container display="flex" justifyContent="center">
          <Grid
            item
            xs={10}
            display="flex"
            justifyContent="center"
            sx={{ mt: 2 }}
          >
            <ContactUs />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ContactUsPage;
