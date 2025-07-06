import React, { useEffect, useState } from "react";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Visibility from "@mui/icons-material/Visibility";
import CallIcon from "@mui/icons-material/CallOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import SendIcon from "@mui/icons-material/Send";
import { postData } from "../../services/FetchNodeServices";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import "../../App.css";
import {
  FormControl,
  Grid,
  Hidden,
  IconButton,
  ImageListItem,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  Paper,
} from "@mui/material";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Swal from "sweetalert2";
import MenuIcon from "@mui/icons-material/Menu";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>,
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Header() {
  const [state, setState] = React.useState({
    right: false,
  });
  const [error, setError] = useState({});
  const [open, setOpen] = React.useState(false);
  const [getName, setName] = React.useState("");
  const [getMobile, setMobile] = React.useState("");
  const [getEmail, setEmail] = React.useState("");
  const [getBusinessType, setBusinessType] = React.useState("");
  const [getAddress, setAddress] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const validation = () => {
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

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(getEmail)) {
      handleError("getEmail", "Please enter a valid emailAddress");
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

    if (!getAddress) {
      handleError("getAddress", "Please Input address");
      isValid = false;
    }
    if (!getBusinessType) {
      handleError("getBusinessType", "Please Input Name");
      isValid = false;
    }
    if (getBusinessType) {
      if (getBusinessType.length > 30 || getBusinessType.length < 4) {
        handleError(
          "getBusinessType",
          "Please Input Name Between 4 to 30 letters"
        );
        isValid = false;
      }
    }
    return isValid;
  };
  const handleError = (inputs, value) => {
    setError((prev) => ({ ...prev, [inputs]: value }));
  };
  const handleSubmit = async () => {
    if (validation()) {
      var formData = new FormData();
      formData.append("name", getName);
      formData.append("mobile", getMobile);
      formData.append("email", getEmail);
      formData.append("businesstype", getBusinessType);
      formData.append("address", getAddress);

      let result = await postData(
        "studetail/addNewRecord",
        formData
        // config
      );

      if (result.status) {
        Swal.fire({
          icon: "success",
          title: "Done",
          text: result.message,
          timer: 2000,
        });
        // window.location.reload();
        // navigate("/dashboard/displayStudent");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops....",
          text: result.message,
        });
      }
    }
  };

  const list = (right) => (
    <Box
      sx={{ width: right === "top" || right === "bottom" ? "auto" : 200 }}
      role="presentation"
      onClick={toggleDrawer("right", false)}
      onKeyDown={toggleDrawer("right", false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton href="#home" className="menu-link">
            <ListItemIcon>
              <img
                src="./images/social/logo.png"
                class="logo"
                width={50}
                // height="50"
                //   srcSet={`./assets/images/tallybuddy_logo.png 2x`}
                alt={""}
                loading="lazy"
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton href="#home" className="menu-link">
            {/* <ListItemIcon>
              <MailIcon />
            </ListItemIcon> */}
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        {/* <ListItem disablePadding>
          <ListItemButton
            href="#career"
            onClick={handleClickOpen}
            className="menu-link"
          >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Career" />
          </ListItemButton>
        </ListItem> */}
        <ListItem disablePadding>
          <ListItemButton href="#about" className="menu-link">
            {/* <ListItemIcon>
              <MailIcon />
            </ListItemIcon> */}
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="#contact" className="menu-link">
            {/* <ListItemIcon>
              <MailIcon />
            </ListItemIcon> */}
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Hidden mdDown>
        <Link
          href="#home"
          color="inherit"
          underline="none"
          className="menu-link"
        >
          {" "}
          Home
        </Link>
        {/* <Link
          href="#career"
          onClick={handleClickOpen}
          color="inherit"
          underline="none"
          className="menu-link"
        >
          {" "}
          Career
        </Link> */}
        <Link
          href="#about"
          color="inherit"
          underline="none"
          className="menu-link"
        >
          About
        </Link>
        <Link
          href="#contact"
          color="inherit"
          underline="none"
          className="menu-link"
        >
          Contact
        </Link>
      </Hidden>
      <Hidden mdUp>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          // sx={{ mr: 2 }}
        >
          <MenuIcon onClick={toggleDrawer("right", true)} />
        </IconButton>
      </Hidden>
      <React.Fragment key={"right"}>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>

      {/* Dialog */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <Divider />
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl fullWidth variant="standard">
                <InputLabel htmlFor="standard-adornment-text">Name</InputLabel>
                <Input
                  id="standard-adornment-text"
                  type={"text"}
                  onChange={(event) => setName(event.target.value)}
                  endAdornment={
                    <InputAdornment position="start">
                      <PersonOutlineRoundedIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="standard">
                <InputLabel htmlFor="standard-adornment-text">
                  Mobile
                </InputLabel>
                <Input
                  id="standard-adornment-text"
                  onChange={(event) => setMobile(event.target.value)}
                  type={"text"}
                  endAdornment={
                    <InputAdornment position="start">
                      <PhoneOutlinedIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="standard">
                <InputLabel htmlFor="standard-adornment-text">Email</InputLabel>
                <Input
                  id="standard-adornment-text"
                  type={"text"}
                  onChange={(event) => setEmail(event.target.value)}
                  endAdornment={
                    <InputAdornment position="start">
                      <EmailOutlinedIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="standard">
                <InputLabel htmlFor="standard-adornment-text">
                  Business Type
                </InputLabel>
                <Input
                  id="standard-adornment-text"
                  onChange={(event) => setBusinessType(event.target.value)}
                  type={"text"}
                  endAdornment={
                    <InputAdornment position="start">
                      <WorkOutlineOutlinedIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="standard">
                <InputLabel htmlFor="outlined-multiline-static">
                  Address
                </InputLabel>
                <Input
                  id="outlined-multiline-static"
                  label="Multiline"
                  onChange={(event) => setAddress(event.target.value)}
                  multiline
                  rows={4}
                  error={!error.getAddress ? false : true}
                  helperText={error.getAddress}
                  onFocus={() => handleError("getAddress", null)}
                  defaultValue="Default Value"
                  type={"text"}
                  // endAdornment={
                  //   <InputAdornment position="start">
                  //     <Visibility />
                  //   </InputAdornment>
                  // }
                />
              </FormControl>
              {error.getAddress}
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button
            size="small"
            onClick={() => handleSubmit()}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
