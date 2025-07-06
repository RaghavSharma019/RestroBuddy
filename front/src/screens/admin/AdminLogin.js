import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { postData } from "../../services/FetchNodeServices";

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function AdminLogin() {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [getIndex, setIndex] = useState(0);
  const [getLoginType, setLoginType] = useState("Restaurant");
  const [error, setError] = useState({});

  const navigate = useNavigate();
  const handleError = (inputs, value) => {
    setError((prev) => ({ ...prev, [inputs]: value }));
  };
  const validation = () => {
    var isValid = true;

    if (!emailId) {
      handleError("emailId", "Please fill out this emailId.");
      isValid = false;
    }

    if (!password) {
      handleError("password", "Please fill out this Password.");
      isValid = false;
    }
    return isValid;
  };
  const handleClick = async () => {
    if (validation()) {
      const body = { emailid: emailId, password: password };
      if (getLoginType == "Restaurant") {
        var result = await postData("admin/checklogin", body);
      } else {
        var result = await postData("admin/EmpCheckLogin", body);
      }
      if (result.status) {
        localStorage.setItem("ADMIN", JSON.stringify(result.data));
        localStorage.setItem("TOKEN", result.token);
        navigate("/admindashboard");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: result.message,
          timer: 1500,
          showConfirmButton: false,
          // toast:true
        });
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <div>
              <Grid item md={12} lg={12}>
                <FormControl
                  error={!error.getLoginType ? false : true}
                  size="small"
                >
                  <RadioGroup
                    size="small"
                    onFocus={() => handleError("getLoginType", null)}
                    value={getLoginType}
                    Restaurant
                    // onChange={(event) => alert(event.target.value)}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Restaurant"
                      control={<Radio size="small" />}
                      label="Restaurant"
                      onChange={(event) => {
                        setLoginType(event.target.value);
                        setIndex(0);
                      }}
                      style={{
                        marginLeft: 0,
                        // marginRight: 10,
                        paddingRight: 10,
                        border:
                          getIndex == 0
                            ? "2px solid #1976d2"
                            : "1px solid #95a5a6",
                        borderRadius: 5,
                        boxShadow:
                          getIndex == 0
                            ? "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                            : "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
                      }}
                    />
                    <FormControlLabel
                      value="Employee"
                      control={<Radio size="small" />}
                      onChange={(event) => {
                        setLoginType(event.target.value);
                        setIndex(1);
                      }}
                      label="Employee"
                      style={{
                        marginLeft: 5,
                        paddingRight: 10,
                        border:
                          getIndex == 1
                            ? "2px solid #1976d2"
                            : "1px solid #95a5a6",
                        borderRadius: 5,
                        boxShadow:
                          getIndex == 1
                            ? "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                            : "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
                      }}
                    />
                  </RadioGroup>
                  <FormHelperText style={{ color: "#d32f2f" }}>
                    {error.getLoginType}
                  </FormHelperText>
                </FormControl>
              </Grid>
            </div>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event) => setEmailId(event.target.value)}
              error={!error.emailId ? false : true}
              helperText={error.emailId}
              onFocus={() => handleError("emailId", null)}
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
              onChange={(event) => setPassword(event.target.value)}
              error={!error.password ? false : true}
              helperText={error.password}
              onFocus={() => handleError("password", null)}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  handleClick();
                }
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClick}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
