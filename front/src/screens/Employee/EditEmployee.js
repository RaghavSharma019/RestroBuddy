import React, { useState, useEffect } from "react";
// import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import {
  Grid,
  TextField,
  Button,
  Checkbox,
  Paper,
  AppBar,
  Toolbar,
  FormHelperText,
} from "@mui/material";
import { postData, getData } from "../../services/FetchNodeServices";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate, useParams } from "react-router-dom";
import { MenuItem } from "@mui/material";
import { useStyles } from "./EmployeeCss";
import InputLabel from "@mui/material/InputLabel";
import { roles as userRoles, stringToInt } from "../../Helper/Helper";

import Swal from "sweetalert2";
import Select from "@mui/material/Select";
const Input = styled("input")({
  display: "none",
});

function EditEmployee(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem("ADMIN"));
  const params = useParams();

  const [rolesList, setRolesList] = useState(userRoles);
  const [getName, setName] = useState("");
  const [getMobile, setMobile] = useState("");
  const [getEmail, setEmail] = useState("");
  const [roles, setRoles] = useState([]);
  const [error, setError] = useState({});
  // const [department, setDepartment] = useState("");
  // const [designation, setDesignation] = useState("");
  const [status, setStatus] = useState("");

  const handleError = (inputs, value) => {
    setError((prev) => ({ ...prev, [inputs]: value }));
  };
  const validate = () => {
    var isValid = true;

    if (!getName) {
      handleError("getName", "Please Input Name");
      isValid = false;
    }
    if (getName) {
      if (getName.length > 30 || getName.length < 4) {
        handleError("getName", "Please Input Name Between 4 to 30 letters");
        isValid = false;
      }
    }

    if (!/^[a-zA-Z()\s.]*$/.test(getName)) {
      handleError("getName", "Please Input Valid Name");
      isValid = false;
    }
    if (getMobile.length) {
      if (!/^[6789]\d{9}$/.test(getMobile)) {
        handleError(
          "getMobile",
          "Please enter a valid mobile no start with 6,7,8,9"
        );
        isValid = false;
      }
    }

    if (isNaN(getMobile) || getMobile.length < 10) {
      handleError("getMobile", "Please enter a valid mobile number");
      isValid = false;
    }
    // if (!department) {
    //   error = { ...error, department: "Please Select department" };
    //   isValid = false;
    // }
    // if (!designation) {
    //   error = { ...error, designation: "Please Select Position" };
    //   isValid = false;
    // }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(getEmail)) {
      handleError("getEmail", "Please enter a valid Email Address");
      isValid = false;
    }
    if (!roles) {
      handleError("roles", "Please Choose Roles");
      isValid = false;
    }
    if (!status) {
      handleError("status", "Please Select Status");
      isValid = false;
    }

    return isValid;
  };
  const handleEdit = async () => {
    if (validate()) {
      var body = {
        restaurantid: admin?.restaurantid,
        employeeid: params.empid,
        name: getName,
        email: getEmail,
        mobile: getMobile,
        status: status,
        role: roles.join("#"),
      };
      var result = await postData("admin/EditEmployee", body);
      if (result.status) {
        Swal.fire({
          title: admin?.restaurantname,
          text: "Employee Edited Successfully..",
          icon: "success",
        });
        navigate("/admindashboard/EmployeeInterface");
      } else {
        Swal.fire({
          title: admin?.restaurantname,
          text: "Fail To Edit Employee",
          icon: "error",
        });
      }
    }
  };

  const fetchEmployeeData = async () => {
    var body = {
      employeeid: params.empid,
      restaurantid: admin?.restaurantid,
    };
    var result = await postData("admin/DisplayByEmployeeId", body);

    if (result.status) {
      setName(result.data.name);
      setMobile(result.data.mobile);
      setEmail(result.data.email);
      setStatus(result.data.status);
      setRoles(stringToInt(result.data.role.split("#")));
    }
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const handleChangeRole = (status, id) => {
    if (status) {
      var arr = [...roles];
      arr.push(id);
      setRoles([...arr]);
    } else {
      var arr = [...roles];
      var index = arr.indexOf(id);
      if (index != -1) {
        arr.splice(index, 1);
      }
      setRoles([...arr]);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <AppBar position="static" style={{ background: "#2C3A47" }}>
              <Toolbar>
                <Grid
                  container
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Grid item xs={12}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: "bold" }}>
                        Restaurant Id: {admin?.restaurantid}
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant="outlined"
              label="Name"
              size="small"
              onChange={(event) => setName(event.target.value)}
              value={getName}
              error={!error.getName ? false : true}
              helperText={error.getName}
              onFocus={() => handleError("getName", null)}
              fullWidth
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              variant="outlined"
              size="small"
              label="Mobile"
              value={getMobile}
              error={!error.getMobile ? false : true}
              helperText={error.getMobile}
              onFocus={() => handleError("getMobile", null)}
              // onBlur={validate}
              onChange={(event) => setMobile(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant="outlined"
              label="Email Id"
              size="small"
              error={!error.getEmail ? false : true}
              helperText={error.getEmail}
              onFocus={() => handleError("getEmail", null)}
              onChange={(event) => setEmail(event.target.value)}
              value={getEmail}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} container>
            {rolesList.map((item) => {
              const checked = roles.indexOf(item.value) != -1 ? true : false;
              return (
                <Grid item xs={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(e) =>
                          handleChangeRole(e.target.checked, item.value)
                        }
                        style={{ color: "#263a4a" }}
                      />
                    }
                    label={item.label}
                  />
                </Grid>
              );
            })}
          </Grid>

          <Grid item xs={12}>
            <FormControl error={!error.status ? false : true}>
              <FormLabel
                id="demo-controlled-radio-buttons-group"
                style={{ fontWeight: 600, color: "#263a4a" }}
                error={!error.status ? false : true}
              >
                Status
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                error={!error.status ? false : true}
                helperText={error.status}
                onFocus={() => handleError("status", null)}
              >
                <FormControlLabel
                  value={1}
                  control={<Radio style={{ color: "#263a4a" }} />}
                  label="Activate"
                />
                <FormControlLabel
                  value={0}
                  control={<Radio style={{ color: "#263a4a" }} />}
                  label="Deactivate"
                />
              </RadioGroup>
              <FormHelperText style={{ color: "#d32f2f" }}>
                {error.status}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "right" }}
          >
            <Button
              variant="outlined"
              style={{ border: "1px solid #263a4a", color: "#263a4a" }}
              onClick={() => navigate("/admindashboard/EmployeeInterface")}
            >
              Back
            </Button>
            <Button
              onClick={() => handleEdit()}
              variant="contained"
              style={{ marginLeft: 10, backgroundColor: "#263a4a" }}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default EditEmployee;
