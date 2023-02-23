import { Button, Grid, TextField, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import instance from "../../utils/services/axios";
// import sendEmail from "../../utils/services/Email";
// import { SMTPClient } from "emailjs";
// import nodemailer from "nodemailer";

import { Arrow } from "../arrow/Arrow";
import CustomSnackbar from "../snackbar/Snackbar";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#2c32b3",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#2c32b3",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgb(44,50,179, 0.5)",
    },
    "&:hover fieldset": {
      borderColor: "#2c32b3",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2c32b3",
    },
  },
});

const CustomButton = ({ label, handleChange, value, submit }) => {
  return (
    <>
      <Grid item xs={6.01}>
        <CssTextField
          required={label === "name" || label === "email"}
          sx={{ mb: 1.25 }}
          fullWidth
          size="small"
          label={label.charAt(0).toUpperCase() + label.slice(1)}
          id={label.toLowerCase()}
          value={value[label.toLowerCase()]}
          InputLabelProps={{
            style: { color: "white" },
          }}
          InputProps={{
            style: { color: "white" },
          }}
          onChange={handleChange}
          error={
            submit && !value[label] && (label === "name" || label === "email")
          }
          // helperText={
          //   !value[label] &&
          //   (label === "name" || label === "email") &&
          //   `${label.charAt(0).toUpperCase() + label.slice(1)} is required.`
          // }
        />
      </Grid>
    </>
  );
};

const ContactUs = () => {
  let navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
  });

  const [submit, setSubmit] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [rotate, setRotate] = useState(-45);

  const handleNavigate = () => {
    navigate("/");
  };

  const handleErrorEmail = () => {
    setMessage("Unable to send email!");
    setSeverity("error");
    setBackgroundColor("error");
    setOpen(true);
  };

  const handleSentEmail = () => {
    setMessage("Email sent successfully!");
    setSeverity("success");
    setBackgroundColor("#2c32b3");
    setOpen(true);
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email) {
      setSubmit(true);
      return;
    }

    try {
      const response = await instance.post("/email", form);

      console.log(response.data);

      if (response.data.code !== 0) {
        setForm({
          name: "",
          email: "",
          phone: "",
          organization: "",
        });
        throw new Error();
      }
      handleSentEmail();
      setSubmit(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        organization: "",
      });
    } catch (error) {
      handleErrorEmail();
    }

    // setSubmit(false);
  };

  const handleMouseEnter = () => {
    setRotate(0);
  };

  const handleMouseLeave = () => {
    setRotate(-45);
  };

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"end"}
          // border={"1px solid red"}
        >
          <motion.div
            animate={{ rotate: -180 }}
            whileInView={{ rotate: 180 }}
            whileHover={{ rotate: 360 }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <Close sx={{ fontSize: "4vw" }} onClick={handleNavigate} />
          </motion.div>
        </Grid>
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"start"}
          mt={10}
          // border={"1px solid red"}
        >
          <Typography component={"div"} fontSize={"2.5vw"} fontWeight={"bold"}>
            Let's talk!
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"start"}
          // border={"1px solid red"}
        >
          <Typography component={"div"} fontSize={"1.25vw"}>
            Fill out the following to get your project started
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container mt={5}>
            {Object.keys(form).map((item, index) => (
              <CustomButton
                key={index}
                label={item}
                value={form}
                handleChange={handleChange}
                submit={submit}
              />
            ))}
          </Grid>
        </Grid>
        <Grid>
          <Button
            color="secondary"
            variant="contained"
            size="small"
            onClick={handleSubmit}
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
              Continue
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <CustomSnackbar
        open={open}
        setOpen={setOpen}
        message={message}
        severity={severity}
        backgroundColor={backgroundColor}
      />
    </>
  );
};

export default ContactUs;
