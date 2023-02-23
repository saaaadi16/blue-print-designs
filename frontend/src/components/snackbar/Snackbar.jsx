import { Snackbar, Alert as MuiAlert } from "@mui/material";
import { forwardRef } from "react";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomSnackbar({
  open,
  setOpen,
  message,
  severity,
  backgroundColor,
}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          sx={{ width: "100%", backgroundColor: { backgroundColor } }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
