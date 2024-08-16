import React, { useEffect } from "react";
import { Box, TextField, Button, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setName, setEmail, setSubject, setMessage, clearForm } from "../store";
import Snackbar from "@mui/material/SnackbarContent";

function ContactForm() {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    setOpen(true);
    dispatch(clearForm());
  };
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  }, [open]);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        CLOSE
      </Button>
    </React.Fragment>
  );

  return (
    <Box
      id="contact"
      sx={{
        height: "100vh",
        backgroundColor: "#f0f4ff ",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} style={{ marginTop: "30px" }}>
          <Grid item xs={12}>
            <Typography variant="h4">Contact Us</Typography>
            <Typography variant="h6">
              Get in touch with us and find out how we can help you reimagine
              your enterprise for the digital age.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Name"
              fullWidth
              value={form.name}
              onChange={(e) => dispatch(setName(e.target.value))}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Email"
              fullWidth
              value={form.email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Subject"
              fullWidth
              value={form.subject}
              onChange={(e) => dispatch(setSubject(e.target.value))}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              fullWidth
              multiline
              rows={4}
              value={form.message}
              onChange={(e) => dispatch(setMessage(e.target.value))}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>

        {open ? (
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Sent"
            action={action}
          />
        ) : (
          ""
        )}
      </form>
    </Box>
  );
}

export default React.memo(ContactForm);
