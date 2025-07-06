import React, { useState, useEffect } from "react";
// import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import {
  Grid,
  TextField,
  Button,
  Checkbox,
  AppBar,
  Toolbar,
  Hidden,
  FormHelperText,
} from "@mui/material";
import { postData, getData } from "../../services/FetchNodeServices";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import AssignmentIcon from "@mui/icons-material/Assignment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "@mui/material";
import MaterialTable from "@material-table/core";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Swal from "sweetalert2";
import { useStyles } from "./EmployeeCss";
import { roles as userRoles, showStatus } from "../../Helper/Helper";

// import { ExportCsv, ExportPdf } from "@material-table/exporters";
// const useStyles = makeStyles({
//   root: {
//     display: "flex",
//     backgroundColor: "yellow",
//   },
//   subdiv: {
//     background: "#fff",
//     padding: 20,
//   },
// });
function CreateEmployee(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  var admin = JSON.parse(localStorage.getItem("ADMIN"));
  //   const classes = useStyles();
  const [employeeList, setEmployeeList] = useState([]);
  const [rolesList, setRolesList] = useState(userRoles);
  const [getName, setName] = useState("");
  const [getMobile, setMobile] = useState("");
  const [getEmail, setEmail] = useState("");
  const [roles, setRoles] = useState([]);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({});

  useEffect(function () {
    fetchAllEmployee();
  }, []);
  const [status, setStatus] = useState("");

  const [errors, setErrors] = useState({});
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
    if (!password) {
      handleError("password", "Please Input Password");
      isValid = false;
    }
    if (!status) {
      handleError("status", "Please Select Status");
      isValid = false;
    }

    return isValid;
  };
  const handleSubmit = async () => {
    var isValid = validate();
    if (isValid) {
      var body = {
        restaurantid: admin?.restaurantid,
        name: getName,
        email: getEmail,
        mobile: getMobile,
        password: password,
        status: status,
        role: roles.join("#"),
      };
      var result = await postData("admin/AddEmployee", body);
      if (result.status) {
        Swal.fire({
          title: admin?.organizationname,
          text: "Employee Submitted Successfully..",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: admin?.organizationname,
          text: "Fail To Submit Employee",
          icon: "error",
        });
      }
    }
    fetchAllEmployee();
  };

  const fetchAllEmployee = async () => {
    var body = { restaurantid: admin?.restaurantid };
    var result = await postData("admin/displayAll", body);
    setEmployeeList(result.data);
  };

  const handleDelete = async (employee_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        var body = { employeeid: employee_id };
        var result = await postData("admin/deleteemployee", body);
        if (result.status)
          Swal.fire("Deleted!", "Employee has been deleted.", "success");
      } else Swal.fire("Deleted!", "Fail to Delete Employee .", "error");
      fetchAllEmployee();
    });
  };
  const handleGeneratePassword = () => {
    var ar = [
      "0",
      "1",
      "2",
      "3",
      "@",
      "#",
      "?",
      "A",
      "P",
      "Q",
      "R",
      "a",
      "h",
      "s",
      "i",
      "t",
    ];
    var pwd = "";
    for (var i = 1; i <= 8; i++) {
      var c = ar[Math.floor(Math.random() * 9)];

      pwd += c;
    }
    setPassword(pwd);
  };

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
              value={getName}
              error={!error.getName ? false : true}
              helperText={error.getName}
              onFocus={() => handleError("getName", null)}
              // onBlur={validate}
              size="small"
              onChange={(event) => setName(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant="outlined"
              label="Email Address"
              // type="email"
              value={getEmail}
              error={!error.getEmail ? false : true}
              helperText={error.getEmail}
              onFocus={() => handleError("getEmail", null)}
              // onBlur={validate}
              size="small"
              onChange={(event) => setEmail(event.target.value)}
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
            <FormControl variant="outlined" fullWidth size="small">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(event) => setPassword(event.target.value)}
                error={!error.password ? false : true}
                helperText={error.password}
                onFocus={() => handleError("password", null)}
                value={password}
                size="small"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <Button
              fullWidth
              onClick={() => handleGeneratePassword()}
              variant="contained"
              className="btn"
            >
              Create Password
            </Button>
          </Grid>
          <Grid item xs={4}>
            <FormControl
              component="fieldset"
              error={!error.status ? false : true}
            >
              <FormLabel
                component="legend"
                style={{ fontWeight: 600, color: "#2C3A47" }}
              >
                Status
              </FormLabel>
              <RadioGroup
                row
                aria-label="status"
                name="row-radio-buttons-group"
                error={!error.status ? false : true}
                helperText={error.status}
                onFocus={() => handleError("status", null)}
                // onBlur={validate}
                onChange={(e) => setStatus(e.target.value)}
              >
                <FormControlLabel
                  value={1}
                  control={<Radio style={{ color: "#2C3A47" }} />}
                  label="Activate"
                />
                <FormControlLabel
                  value={0}
                  control={<Radio style={{ color: "#2C3A47" }} />}
                  label="Deactivate"
                />
              </RadioGroup>
              <FormHelperText style={{ color: "#d32f2f" }}>
                {error.status}
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12} container>
            {rolesList.map((item) => {
              const checked = roles.indexOf(item.value) != -1 ? true : false;
              return (
                <>
                  <Grid item xs={6} sm={6} md={3}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked}
                          helperText={error.roles}
                          error={!error.roles ? false : true}
                          onFocus={() => handleError("roles", null)}
                          onChange={(e) =>
                            handleChangeRole(e.target.checked, item.value)
                          }
                          // onBlur={validate}
                          style={{ color: "#2C3A47" }}
                        />
                      }
                      label={item.label}
                    />
                  </Grid>
                </>
              );
            })}
          </Grid>

          <Grid item xs={12}>
            <Button
              onClick={() => handleSubmit()}
              variant="contained"
              className="btn"
            >
              Add Employee
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className={classes.box}>
        <Grid xs={12} md={12}>
          <MaterialTable
            title="Employees"
            columns={[
              {
                title: "Name",
                field: "name",
                headerStyle: {
                  backgroundColor: "#435360",
                  color: "#FFF",
                  width: 300,
                },
                render: (rowData) => rowData.name,
              },
              {
                title: "Email",
                field: "email",
                headerStyle: {
                  backgroundColor: "#435360",
                  color: "#FFF",
                },
              },
              {
                title: "Mobile",
                field: "mobile",
                headerStyle: {
                  backgroundColor: "#435360",
                  color: "#FFF",
                },
              },
              {
                title: "Roles",
                field: "role",
                headerStyle: {
                  backgroundColor: "#435360",
                  color: "#FFF",
                },
              },
              {
                title: "Status",
                field: "status",
                headerStyle: {
                  backgroundColor: "#435360",
                  color: "#FFF",
                },
                render: (rowData) => showStatus[rowData.status],
              },
            ]}
            data={employeeList.filter((item) => item.role != "ADMIN")}
            actions={[
              {
                icon: "edit",
                tooltip: "Edit Employee ",
                onClick: (event, rowData) =>
                  navigate(
                    "/admindashboard/EditEmployee/" + rowData.employee_id
                  ),
              },
              {
                icon: "delete",
                tooltip: "Delete Employee ",
                onClick: (event, rowData) => handleDelete(rowData.employee_id),
              },
            ]}
            options={{
              // exportMenu: [
              //   {
              //     label: "Export PDF",
              //     exportFunc: (cols, datas) =>
              //       ExportPdf(cols, datas, "EmployeeList"),
              //   },
              //   {
              //     label: "Export CSV",
              //     exportFunc: (cols, datas) =>
              //       ExportCsv(cols, datas, "EmployeeList"),
              //   },
              // ],
              headerStyle: {
                backgroundColor: "#2C3A47",
                color: "#FFF",
              },
              searchFieldStyle: {
                backgroundColor: "rgb(229, 231, 235)",
                padding: 5,
                borderRadius: 5,
                color: "#000",
              },

              actionsColumnIndex: -1,
            }}
          />
        </Grid>
      </div>
    </div>
  );
}

export default CreateEmployee;
