import React, { useState, useEffect } from "react";
import { useStyles } from "./AdminDashboardCss";
import {
  Avatar,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Grid,
  Paper,
  Menu,
  Tooltip,
  IconButton,
  MenuItem,
  Button,
} from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import CategoryInterface from "../category/CategoryInterface";
import DisplayAllCategory from "../category/DisplayAllCategory";
import FoodItemInterface from "../fooditem/FoodItemInterface";
import DisplayAllFoodItem from "../fooditem/DisplayAllFoodItem";
import TableBookingInterface from "../tablebooking/TableBookingInterface";
import DisplayAllTable from "../tablebooking/DisplayAllTable";
import WaiterInterface from "../waiter/WaiterInterface";
import DisplayAllWaiter from "../waiter/DisplayAllWaiter";
import WaiterTableInterface from "../waitertable/WaiterTableInterface";
import DisplayAllWaiterTable from "../waitertable/DisplayAllWaiterTable";
import FoodBooking from "../FoodBooking/FoodBooking";
import OrderManagement from "../FoodBooking/OrderManagement";
import AllSales from "../allsales/AllSales";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import { Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { serverURL } from "../../services/FetchNodeServices";
import Summary from "./Summary";
import Chart from "../../components/DashboardComponent/Chart";
import FoodBookingOrder from "../FoodBooking/FoodBookingOrder";
import CreateEmployee from "../Employee/CreateEmployee";
import EditEmployee from "../Employee/EditEmployee";
import { rolesNum, validateRole } from "../../Helper/Helper";
import io from "socket.io-client";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
export default function AdminDashboard(props) {
  const socket = io.connect(serverURL);
  const [audio] = useState(new Audio("/images/BellSound.mp3"));

  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  var admin = JSON.parse(localStorage.getItem("ADMIN"));
  const [count, setCount] = useState(0);
  const [state, setstate] = useState(false);

  useEffect(() => {
    setupSocketListeners();
    return () => socket.on("disconnect");
  }, [0]);

  useEffect(() => {
    audio.addEventListener("ended", () => {});
    return () => {
      audio.removeEventListener("ended", () => {});
    };
  }, [audio]);

  function setupSocketListeners() {
    socket.on("ordernotification", (data) => {
      var admin = JSON.parse(localStorage.getItem("ADMIN"));

      if (admin.restaurantid == data.restaurantid && admin.role != "Admin") {
        setCount((prev) => prev + 1);
        setstate(true);
        audio.play();
        // getDashboardInfo();
      }
    });
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate("/adminlogin");
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" style={{ background: "#354052" }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            {admin.restaurantname}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {admin.ownername}
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile">
              <img
                src={`${serverURL}/images/${admin.filelogo}`}
                onClick={handleOpenUserMenu}
                width="60"
                style={{ borderRadius: 10, marginRight: 10, cursor: "pointer" }}
              />
            </Tooltip>
            <Menu
              sx={{ mt: "45px", cursor: "pointer" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <div
                onClick={handleCloseUserMenu}
                style={{
                  padding: 10,
                  width: 160,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ManageAccountsIcon style={{ fontSize: 18, marginRight: 10 }} />
                <small>
                  <b>Profile</b>
                </small>
              </div>
              <Divider />
              <div
                onClick={handleLogout}
                style={{
                  padding: 10,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <LogoutIcon style={{ fontSize: 18, marginRight: 10 }} />
                <small>
                  <b>Logout</b>
                </small>
              </div>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <div className="main">
        <div className="left">
          <ul>
            <li className="menu-heading">
              <img
                src={`${serverURL}/images/${admin.filelogo}`}
                style={{
                  display: "block",
                  padding: 5,
                  background: "#fff",
                  borderRadius: 10,
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
                width="50%"
                height="50"
              />
            </li>
            {validateRole(rolesNum.DASHBOARD) && (
              <li onClick={() => navigate("/admindashboard/summary")}>
                <a data-toggle="tab">
                  <img
                    src="/images/menu/dashboard.png"
                    style={{
                      padding: 5,
                      background: "#fff",
                      borderRadius: 10,
                      marginRight: 10,
                    }}
                    width="36"
                  />{" "}
                  Dashboard
                </a>
              </li>
            )}
            {validateRole(rolesNum.EMPLOYEE) && (
              <li>
                <a
                  data-toggle="tab"
                  onClick={() => navigate("/admindashboard/EmployeeInterface")}
                >
                  <img
                    src="/images/menu/add-user.png"
                    style={{
                      padding: 5,
                      background: "#fff",
                      borderRadius: 10,
                      marginRight: 10,
                    }}
                    width="36"
                  />
                  Add User
                </a>
              </li>
            )}
            {validateRole(rolesNum.CATEGORY) && (
              <li>
                <a
                  data-toggle="tab"
                  onClick={() => navigate("/admindashboard/displayallcategory")}
                >
                  <img
                    src="/images/menu/drink.png"
                    style={{
                      padding: 5,
                      background: "#fff",
                      borderRadius: 10,
                      marginRight: 10,
                    }}
                    width="36"
                  />{" "}
                  Category
                </a>
              </li>
            )}
            {validateRole(rolesNum.FOODITEM) && (
              <li>
                <a
                  data-toggle="tab"
                  onClick={() => navigate("/admindashboard/displayallfooditem")}
                >
                  <img
                    src="/images/menu/burger.png"
                    style={{
                      padding: 5,
                      background: "#fff",
                      borderRadius: 10,
                      marginRight: 10,
                    }}
                    width="36"
                  />{" "}
                  Food Item
                </a>
              </li>
            )}
            {validateRole(rolesNum.TABLE) && (
              <li>
                <a
                  data-toggle="tab"
                  onClick={() => navigate("/admindashboard/displayalltable")}
                >
                  <img
                    src="/images/menu/restaurant.png"
                    style={{
                      padding: 5,
                      background: "#fff",
                      borderRadius: 10,
                      marginRight: 10,
                    }}
                    width="36"
                  />{" "}
                  Table
                </a>
              </li>
            )}
            {validateRole(rolesNum.WAITER) && (
              <li>
                <a
                  data-toggle="tab"
                  onClick={() => navigate("/admindashboard/displayallwaiter")}
                >
                  <img
                    src="/images/menu/waiter.png"
                    style={{
                      padding: 5,
                      background: "#fff",
                      borderRadius: 10,
                      marginRight: 10,
                    }}
                    width="36"
                  />{" "}
                  Waiter
                </a>
              </li>
            )}
            {validateRole(rolesNum.WAITERTABLE) && (
              <li>
                <a
                  data-toggle="tab"
                  onClick={() =>
                    navigate("/admindashboard/displayallwaitertable")
                  }
                >
                  <img
                    src="/images/menu/waiter_2.png"
                    style={{
                      padding: 5,
                      background: "#fff",
                      borderRadius: 10,
                      marginRight: 10,
                    }}
                    width="36"
                  />{" "}
                  Waiter Table
                </a>
              </li>
            )}
            {validateRole(rolesNum.BILLING) && (
              <li>
                <a
                  data-toggle="tab"
                  onClick={() => navigate("/admindashboard/foodbooking")}
                >
                  <img
                    src="/images/menu/receipt.png"
                    style={{
                      padding: 5,
                      background: "#fff",
                      borderRadius: 10,
                      marginRight: 10,
                    }}
                    width="36"
                  />{" "}
                  Billing
                </a>
              </li>
            )}
            {validateRole(rolesNum.SALESREPORT) && (
              <li>
                <a
                  data-toggle="tab"
                  onClick={() => navigate("/admindashboard/allsales")}
                >
                  <img
                    src="/images/menu/sale-report_2.png"
                    style={{
                      padding: 5,
                      background: "#fff",
                      borderRadius: 10,
                      marginRight: 10,
                    }}
                    width="36"
                  />{" "}
                  Sales Report
                </a>
              </li>
            )}
            <li>
              <a
                data-toggle="tab"
                onClick={() => navigate("/admindashboard/ordermanagement")}
              >
                <img
                  src="/images/menu/kitchen.png"
                  style={{
                    padding: 5,
                    background: "#fff",
                    borderRadius: 10,
                    marginRight: 10,
                  }}
                  width="36"
                />{" "}
                Order Management
              </a>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="tab-content">
            <div id="user-profile" className="tab-pane fade in active">
              {/* <div className="header"> */}

              {/* </div> */}

              <div className="content">
                <div className="ro1w">
                  <div
                    className="col-sm-12"
                    style={{ paddingLeft: 0, paddingRight: 0 }}
                  >
                    <div className="card-12">
                      {/* Nav tabs */}
                      <Routes>
                        {validateRole(rolesNum.DASHBOARD) && (
                          <Route
                            path="/"
                            element={
                              <Navigate
                                to="/admindashboard/Summary"
                                replace={true}
                              />
                            }
                          />
                        )}
                        {validateRole(rolesNum.EMPLOYEE) && (
                          <>
                            <Route
                              element={<CreateEmployee />}
                              path="/EmployeeInterface"
                            />
                            <Route
                              element={<EditEmployee />}
                              path={"/EditEmployee/:empid"}
                            />
                          </>
                        )}
                        {validateRole(rolesNum.CATEGORY) && (
                          <>
                            {" "}
                            <Route
                              element={<CategoryInterface />}
                              path="/categoryinterface"
                            />
                            <Route
                              element={<DisplayAllCategory />}
                              path="/displayallcategory"
                            />
                          </>
                        )}
                        {validateRole(rolesNum.FOODITEM) && (
                          <>
                            <Route
                              element={<FoodItemInterface />}
                              path="/fooditeminterface"
                            />
                            <Route
                              element={<DisplayAllFoodItem />}
                              path="/displayallfooditem"
                            />
                          </>
                        )}
                        {validateRole(rolesNum.TABLE) && (
                          <>
                            <Route
                              element={<TableBookingInterface />}
                              path="/tablebookinginterface"
                            />
                            <Route
                              element={<DisplayAllTable />}
                              path="/displayalltable"
                            />
                          </>
                        )}
                        {validateRole(rolesNum.WAITER) && (
                          <>
                            <Route
                              element={<WaiterInterface />}
                              path="/waiterinterface"
                            />
                            <Route
                              element={<DisplayAllWaiter />}
                              path="/displayallwaiter"
                            />
                          </>
                        )}
                        {validateRole(rolesNum.WAITERTABLE) && (
                          <>
                            <Route
                              element={<WaiterTableInterface />}
                              path="/waitertableinterface"
                            />
                            <Route
                              element={<DisplayAllWaiterTable />}
                              path="/displayallwaitertable"
                            />
                          </>
                        )}
                        {validateRole(rolesNum.BILLING) && (
                          <Route
                            element={<FoodBooking />}
                            path="/foodbooking"
                          />
                        )}
                        {validateRole(rolesNum.SALESREPORT) && (
                          <Route element={<AllSales />} path="/allsales" />
                        )}
                        <Route element={<Summary />} path="/summary" />

                        <Route
                          element={<OrderManagement />}
                          path="/ordermanagement"
                        />
                      </Routes>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Grid container spacing={0}>
        <Grid item xs={2}>
          <Paper style={{ position: "sticky", top: 50 }}>
            <div className={classes.leftBarStyle}>
              <img src={`${serverURL}/images/${admin.filelogo}`} width="100" />
              <div className={classes.nameStyle}>{}</div>
              <div className={classes.emailStyle}>
                {admin.emailid || admin.email}
              </div>
              <div className={classes.phoneStyle}>
                +91{admin.mobileno || admin.mobile}
              </div>
            </div>
            <div className={classes.menuStyle}>
              <List>
                <Divider />
                <ListItem disablePadding className={classes.listItem}>
                  {validateRole(rolesNum.DASHBOARD) && (
                    <ListItemButton
                      style={{ padding: "5px 10px" }}
                      onClick={() => navigate("/admindashboard/summary")}
                    >
                      <ListItemIcon style={{ minWidth: 40 }}>
                        <img src="/images/menu/dashboard_2.png" width="22" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <span className={classes.menuItemStyle}>
                            Dashboard
                          </span>
                        }
                      />
                    </ListItemButton>
                  )}
                </ListItem>
                <ListItem disablePadding className={classes.listItem}>
                  {validateRole(rolesNum.EMPLOYEE) && (
                    <ListItemButton
                      style={{ padding: "5px 10px" }}
                      onClick={() =>
                        navigate("/admindashboard/EmployeeInterface")
                      }
                    >
                      <ListItemIcon style={{ minWidth: 40 }}>
                        <img src="/images/menu/add-user.png" width="22" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <span className={classes.menuItemStyle}>
                            Employee Interface
                          </span>
                        }
                      />
                    </ListItemButton>
                  )}
                </ListItem>
                <ListItem disablePadding className={classes.listItem}>
                  {validateRole(rolesNum.CATEGORY) && (
                    <ListItemButton
                      style={{ padding: "5px 10px" }}
                      onClick={() =>
                        navigate("/admindashboard/displayallcategory")
                      }
                    >
                      <ListItemIcon style={{ minWidth: 40 }}>
                        <img src="/images/menu/drink.png" width="22" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <span className={classes.menuItemStyle}>
                            Category List
                          </span>
                        }
                      />
                    </ListItemButton>
                  )}
                </ListItem>

                <ListItem disablePadding className={classes.listItem}>
                  {validateRole(rolesNum.FOODITEM) && (
                    <ListItemButton
                      style={{ padding: "5px 10px" }}
                      onClick={() =>
                        navigate("/admindashboard/displayallfooditem")
                      }
                    >
                      <ListItemIcon style={{ minWidth: 40 }}>
                        <img src="/images/menu/burger.png" width="22" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <span className={classes.menuItemStyle}>
                            Food Item List
                          </span>
                        }
                      />
                    </ListItemButton>
                  )}
                </ListItem>

                <ListItem disablePadding className={classes.listItem}>
                  {validateRole(rolesNum.TABLE) && (
                    <ListItemButton
                      style={{ padding: "5px 10px" }}
                      onClick={() =>
                        navigate("/admindashboard/displayalltable")
                      }
                    >
                      <ListItemIcon style={{ minWidth: 40 }}>
                        <img src="/images/menu/restaurant.png" width="22" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <span className={classes.menuItemStyle}>
                            Table List
                          </span>
                        }
                      />
                    </ListItemButton>
                  )}
                </ListItem>

                <ListItem disablePadding className={classes.listItem}>
                  {validateRole(rolesNum.WAITER) && (
                    <ListItemButton
                      style={{ padding: "5px 10px" }}
                      onClick={() =>
                        navigate("/admindashboard/displayallwaiter")
                      }
                    >
                      <ListItemIcon style={{ minWidth: 40 }}>
                        <img src="/images/menu/waiter.png" width="22" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <span className={classes.menuItemStyle}>
                            Waiter List
                          </span>
                        }
                      />
                    </ListItemButton>
                  )}
                </ListItem>

                <ListItem disablePadding className={classes.listItem}>
                  {validateRole(rolesNum.WAITERTABLE) && (
                    <ListItemButton
                      style={{ padding: "5px 10px" }}
                      onClick={() =>
                        navigate("/admindashboard/displayallwaitertable")
                      }
                    >
                      <ListItemIcon style={{ minWidth: 40 }}>
                        <img src="/images/menu/waiter_2.png" width="22" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <span className={classes.menuItemStyle}>
                            WaiterTable List
                          </span>
                        }
                      />
                    </ListItemButton>
                  )}
                </ListItem>
                <ListItem disablePadding className={classes.listItem}>
                  {validateRole(rolesNum.BILLING) && (
                    <ListItemButton
                      style={{ padding: "5px 10px" }}
                      onClick={() => navigate("/admindashboard/foodbooking")}
                    >
                      <ListItemIcon style={{ minWidth: 40 }}>
                        <img src="/images/menu/receipt.png" width="22" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <span className={classes.menuItemStyle}>Billing</span>
                        }
                      />
                    </ListItemButton>
                  )}
                </ListItem>
                <ListItem disablePadding className={classes.listItem}>
                  {validateRole(rolesNum.SALESREPORT) && (
                    <ListItemButton
                      style={{ padding: "5px 10px" }}
                      onClick={() => navigate("/admindashboard/allsales")}
                    >
                      <ListItemIcon style={{ minWidth: 40 }}>
                        <img src="/images/menu/sale-report_2.png" width="22" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <span className={classes.menuItemStyle}>
                            Sales Report
                          </span>
                        }
                      />
                    </ListItemButton>
                  )}
                </ListItem>

                <ListItem disablePadding className={classes.listItem}>
                  {validateRole(rolesNum.SALESREPORT) && (
                    <ListItemButton
                      style={{ padding: "5px 10px" }}
                      onClick={() =>
                        navigate("/admindashboard/ordermanagement")
                      }
                    >
                      <ListItemIcon style={{ minWidth: 40 }}>
                        <img src="/images/menu/kitchen.png" width="22" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <span className={classes.menuItemStyle}>
                            Order Management
                          </span>
                        }
                      />
                    </ListItemButton>
                  )}
                </ListItem>

                <Divider />
              </List>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Routes>
            {validateRole(rolesNum.DASHBOARD) && (
              <Route
                path="/"
                element={
                  <Navigate to="/admindashboard/Summary" replace={true} />
                }
              />
            )}
            {validateRole(rolesNum.EMPLOYEE) && (
              <>
                <Route element={<CreateEmployee />} path="/EmployeeInterface" />
                <Route
                  element={<EditEmployee />}
                  path={"/EditEmployee/:empid"}
                />
              </>
            )}
            {validateRole(rolesNum.CATEGORY) && (
              <>
                {" "}
                <Route
                  element={<CategoryInterface />}
                  path="/categoryinterface"
                />
                <Route
                  element={<DisplayAllCategory />}
                  path="/displayallcategory"
                />
              </>
            )}
            {validateRole(rolesNum.FOODITEM) && (
              <>
                <Route
                  element={<FoodItemInterface />}
                  path="/fooditeminterface"
                />
                <Route
                  element={<DisplayAllFoodItem />}
                  path="/displayallfooditem"
                />
              </>
            )}
            {validateRole(rolesNum.TABLE) && (
              <>
                <Route
                  element={<TableBookingInterface />}
                  path="/tablebookinginterface"
                />
                <Route element={<DisplayAllTable />} path="/displayalltable" />
              </>
            )}
            {validateRole(rolesNum.WAITER) && (
              <>
                <Route element={<WaiterInterface />} path="/waiterinterface" />
                <Route
                  element={<DisplayAllWaiter />}
                  path="/displayallwaiter"
                />
              </>
            )}
            {validateRole(rolesNum.WAITERTABLE) && (
              <>
                <Route
                  element={<WaiterTableInterface />}
                  path="/waitertableinterface"
                />
                <Route
                  element={<DisplayAllWaiterTable />}
                  path="/displayallwaitertable"
                />
              </>
            )}
            {validateRole(rolesNum.BILLING) && (
              <Route element={<FoodBooking />} path="/foodbooking" />
            )}
            {validateRole(rolesNum.SALESREPORT) && (
              <Route element={<AllSales />} path="/allsales" />
            )}
            <Route element={<Summary />} path="/summary" />

            <Route element={<OrderManagement />} path="/ordermanagement" />
          </Routes>
        </Grid>
      </Grid> */}
    </Box>
  );
}
