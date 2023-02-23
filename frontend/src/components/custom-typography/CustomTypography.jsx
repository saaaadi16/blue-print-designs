import { Typography } from "@mui/material";

export const CustomTypographyBody = (props) => {
  return (
    <Typography
      sx={{
        fontSize: !props?.fontSize
          ? { xs: "0.4em", sx: "0.5em", md: "0.7em", lg: "1em" }
          : props.fontSize,
        ...props,
      }}
    >
      {props.children}
    </Typography>
  );
};

export const CustomTypographyHeading = ({ children }) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: { xs: "1em", sx: "2em", md: "2.2em", lg: "3em" },
        }}
      >
        {children}
      </Typography>
    </>
  );
};
