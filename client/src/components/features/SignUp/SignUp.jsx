import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { createUser } from "../../../services/user";
import Alert from "@mui/material/Alert";

const theme = createTheme();

export default function SignUp() {
  const [inputs, setInputs] = useState({});
  const [errorInput, setErrorInput] = useState();

  const handleSubmit = () => {
    createUser(inputs).then((res) => {
      if (res.firstName) {
        return setErrorInput(res.firstName);
      }
      if (res.lastName) {
        return setErrorInput(res.lastName);
      }
      if (res.email) {
        return setErrorInput(res.email);
      }
      if (res.password) {
        return setErrorInput(<Alert severity="success">{res.password}</Alert>);
      }
      if (res.massage) {
        return setErrorInput(<Alert severity="success">{res.massage}</Alert>);
      }

      if (res.passwordConfirm) {
        return setErrorInput(<Alert severity="success">{res.passwordConfirm}</Alert>);
      }
    });
  };
  const changeInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={(e) => changeInput(e)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => changeInput(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => changeInput(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => changeInput(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passwordConfirm"
                  label="passwordConfirm"
                  type="passwordConfirm"
                  id="passwordConfirm"
                  autoComplete="passwordConfirm"
                  onChange={(e) => changeInput(e)}
                />
              </Grid>
              <Box>{errorInput}</Box>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => handleSubmit()}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
