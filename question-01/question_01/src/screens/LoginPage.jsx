import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";

const theme = createTheme();

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const [token, setToken] = React.useState("");
  const submit = (data) => {
    axios
      .post("https://dummyjson.com/auth/login", data)
      .then((res) => {
        console.log(res.data);
        setToken(res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
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
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="usernmae"
              name="usernmae"
              autoComplete="username"
              label="username"
              autoFocus
              {...register("username", {
                required: "Please enter your first name.",
              })}
              defaultValue="kminchelle"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              label="password"
              id="password"
              autoComplete="current-password"
              {...register("password", {
                required: "Please enter your password.",
              })}
              defaultValue="0lelplR"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit(submit)}
            >
              Sign In
            </Button>
          </Box>
          <Typography component="h1" variant="h5">
            Token:{token}
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
