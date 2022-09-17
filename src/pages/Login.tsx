import React, { useState, useContext } from "react";
import SportsMotorsportsSharpIcon from "@mui/icons-material/SportsMotorsportsSharp";

import Users from "../Json/Users.json";
import { useNavigate } from "react-router-dom";
import { OgContext } from "../contexts/OgContext";
import { TextField, Grid, Button, ThemeProvider } from "@mui/material";
import { theme } from "../Theme";
const Login = () => {
  const { auth, setAuth } = useContext(OgContext);
  let navigate = useNavigate();
  const [creds, setCreds] = useState({ user: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };
  //handling login click
  const loginClick = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    Users.map(async (user) => {
      if (user.name === creds.user) {
        if (user.password === creds.password) {
          await setAuth(user.name);
          console.log(auth);
          sessionStorage.setItem("auth", user.name);
          return navigate(`/${user.name}`);
        } else {
          console.log("error");
        }
      }
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          rowSpacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "60vh" }}
        >
          <Grid item>
            <SportsMotorsportsSharpIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                fontSize: "4rem",
              }}
              color="primary"
            />
           
          </Grid>
          <Grid item>
            <TextField
              color="primary"
              id="outlined-basic"
              label="User Name"
              variant="outlined"
              sx={{ width: "15rem" }}
              name="user"
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              sx={{ width: "15rem" }}
              onChange={handleChange}
              type="password"
              name="password"
            />
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={loginClick}>
              Login
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Login;
