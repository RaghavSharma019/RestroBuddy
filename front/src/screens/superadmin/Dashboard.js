import { useState } from "react";
import {
  Avatar,
  Paper,
  Grid,
  AppBar,
  Toolbar,
  Box,
  Menu,
  Tooltip,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import RestaurantInterface from "../restaurant/RestaurantInterface";
import DisplayAllRestaurant from "../restaurant/DisplayAllRestaurant";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { serverURL } from "../../services/FetchNodeServices";
const useStyles = makeStyles({
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  leftBarStyle: {
    padding: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  nameStyle: {
    fontFamily: "Kanit",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 2,
  },
  phoneStyle: {
    fontFamily: "Kanit",
    fontSize: 12,
    fontWeight: "bold",

    color: "#fff",
  },
  emailStyle: {
    fontFamily: "Kanit",
    fontSize: 12,
    fontWeight: "bold",

    color: "#fff",
  },
  menuStyle: {
    fontFamily: "Kanit",
    fontSize: 18,
    fontWeight: "bold",
    display: "flex",
    justifyContent: "left",
    width: 250,
  },
  menuItemStyle: {
    fontFamily: "Kanit",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default function Dashboard(props) {
  var classes = useStyles();
  var navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);
  var sa = JSON.parse(localStorage.getItem("SUPER"));
  const handleLogout = () => {
    localStorage.clear();
    navigate("/loginpage");
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box>
      <AppBar position="sticky" style={{ background: "#354052" }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Super Admin
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile">
              <img
                src={`${serverURL}/images/${sa.picture}`}
                onClick={handleOpenUserMenu}
                width="40"
                height="40"
                style={{
                  borderRadius: 100,
                  marginRight: 10,
                  cursor: "pointer",
                }}
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
                  <b>Hi, {sa.superadminname}</b>
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
                src={`${serverURL}/images/${sa.picture}`}
                style={{
                  display: "block",
                  padding: 5,
                  background: "#fff",
                  borderRadius: 10,
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
                width="100%"
                // height="50"
              />
              {/* <div className={classes.nameStyle}>
                {sa.superadminname.split(" ")[0]}
              </div> */}
              <div className={classes.emailStyle}>{sa.emailid}</div>
              <div className={classes.phoneStyle}>+919340234793</div>
            </li>
            <li>
              <a
                data-toggle="tab"
                onClick={() => navigate("/dashboard/restaurantinterface")}
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
            <li>
              <a
                data-toggle="tab"
                onClick={() => navigate("/dashboard/displayallrestaurant")}
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
                Display Users
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
                        <Route
                          element={<RestaurantInterface />}
                          path="/restaurantinterface"
                        />
                        <Route
                          element={<DisplayAllRestaurant />}
                          path="/displayallrestaurant"
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
      {/* <Grid container spaces={3}>
        <Grid item xs={2} style={{ marginTop: 50 }}>
          <Paper className={classes.leftBarStyle}>
            <Avatar
              src={`${serverURL}/images/${sa.picture}`}
              variant="circular"
              style={{ width: 80, height: 80 }}
            />
            <div className={classes.nameStyle}>{sa.superadminname}</div>
            <div className={classes.emailStyle}>{sa.emailid}</div>
            <div className={classes.phoneStyle}>+919340234793</div>

            <div className={classes.menuStyle}>
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => navigate("/dashboard/restaurantinterface")}
                  >
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <span className={classes.menuItemStyle}>
                          Add restaurant
                        </span>
                      }
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => navigate("/dashboard/displayallrestaurant")}
                  >
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <span className={classes.menuItemStyle}>
                          Restaurant List
                        </span>
                      }
                    />
                  </ListItemButton>
                </ListItem>

                <Divider variant="inset" />

                <ListItem disablePadding>
                  <ListItemButton onClick={handleLogout}>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <span className={classes.menuItemStyle}>Logout</span>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
          </Paper>
        </Grid>
      </Grid> */}
    </Box>
  );
}
