import { useEffect, useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { trySignIn, trySignUp, useAppDispatch } from "store";
import { useNavigate } from "react-router-dom";
import { getToken } from "utils/auth";

interface IAuth {
  mode?: "signIn" | "signUp";
}

interface IForm {
  login: HTMLInputElement;
  password: HTMLInputElement;
}

const Auth: React.FC<IAuth> = ({ mode = "signIn" }) => {
  const dispatch = useAppDispatch();
  const [authMode, setAuthMode] = useState(mode);

  let navigate = useNavigate();

  const formRef = useRef<IForm>(null);
  const token = getToken();

  useEffect(() => {
    setAuthMode(mode);
  }, []);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formRef.current) {
      const name = formRef.current.login.value;
      const password = formRef.current.password.value;

      const body = { name, password };

      if (authMode === "signIn") {
        dispatch(trySignIn(body)).then((res) => {
          if (res.meta.requestStatus === "fulfilled") {
            navigate("/");
          }
        });
      } else {
        dispatch(trySignUp(body)).then((res) => {
          if (res.meta.requestStatus === "fulfilled") {
            navigate("/");
          }
        });
      }
    }
  };

  const handleToggleMode = () => {
    if (authMode === "signIn") {
      setAuthMode("signUp");
    } else {
      setAuthMode("signIn");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {authMode === "signIn" ? "Sign in" : "Sign Up"}
        </Typography>
        <Box
          ref={formRef}
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="login"
            label="Login"
            name="name"
            autoComplete="login"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {authMode === "signIn" ? "Sign in" : "Sign Up"}
          </Button>
          <Grid container>
            <Grid item>
              {/* <Button onClick={handleToggleMode}>
                {authMode === "signIn"
                  ? "Don't have an account? Sign Up"
                  : "Do you have an account? Sign In"}
              </Button> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export { Auth };
