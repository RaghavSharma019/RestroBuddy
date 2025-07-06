import * as React from "react";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "../../App.css";
import { Grid, Paper } from "@mui/material";
import Features from "./Features";
import Others from "./Others";
import Footer from "./Footer";
import Contact from "./Contact";
import Header from "./Header";
import About from "./About";
import Career from "./Career";
import CustomerSupport from "./CustomerSupport";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [colorChange, setColorchange] = React.useState(false);
  const [scroll, setScroll] = React.useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY > 80) {
      setColorchange(true);
      // function myFunction() {
      //   var winScroll =
      //     document.body.scrollTop || document.documentElement.scrollTop;
      //   var height =
      //     document.documentElement.scrollHeight -
      //     document.documentElement.clientHeight;
      //   var scrolled = (winScroll / height) * 100;
      //   document.getElementById("myBar").style.width = scrolled + "%";
      //   // alert(scrolled)
      //   // setScroll(scrolled);
      // }
      // window.onscroll = function () {
      //   myFunction();
      // };
    } else {
      setColorchange(false);
    }
  };

  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    (document.getElementById("myBar").style.width = scrolled + "%") ||
      (document.getElementById("myBars").style.width = scrolled + "%");
    // alert(scrolled)
    // setScroll(scrolled);
  }
  window.onscroll = function () {
    myFunction();
  };
  // window.addEventListener("scroll", (event) => {
  //   document.querySelector("h1").textContent = this.scrollY;
  //   document.querySelector("h2").textContent = ("sticky", window.scrollY > 0);
  // });
  window.addEventListener("scroll", changeNavbarColor);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <Box
        sx={{ flexGrow: 1 }}
        className="container top-background"
        style={
          {
            // position: "sticky",
            // top: 0,
            // top: colorChange ? "4%" : "0%",
            // zIndex: 9999,
            // display: "flex",
            // justifyContent: "center",
          }
        }
      > */}
      <AppBar
        position="sticky"
        // top="0"
        color="inherit"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        // class={colorChange ? "fixed" : "header"}
      >
        <div className="header">
          <div className="progress-container">
            <div className="progress-bar" id="myBar"></div>
          </div>
        </div>
        {/* {colorChange ? (
          <div className="header">
            <div className="progress-container">
              <div className="progress-bar" id="myBar"></div>
            </div>
          </div>
        ) : (
          <div className="header">
            <div className="progress-container">
              <div className="progress-bar" id="myBar"></div>
            </div>
          </div>
        )} */}
        <Toolbar style={{ width: "90%", height: 70, marginTop: 0 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, mt: 1 }}>
            <img
              src="./images/social/logo.png"
              class="logo"
              alt={""}
              loading="lazy"
            />
          </Typography>
          <Header />
        </Toolbar>
      </AppBar>

      {/* {colorChange ? (
          <AppBar
            position="sticky"
            color="inherit"
            className={colorChange ? "bg" : "header"}
          >
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img
                  src="./images/images.jpg"
                  class="logo"
                  // height="50"
                  //   srcSet={`./assets/images/tallybuddy_logo.png 2x`}
                  alt={""}
                  loading="lazy"
                />
              </Typography>

              <Header />
            </Toolbar>
          </AppBar>
        ) : (
          <AppBar
            position="sticky"
            color="inherit"
            style={{
              boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
            }}
            className="bg"
          >
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img
                  src="./images/images.jpg"
                  class="logo"
                  alt={""}
                  loading="lazy"
                />
              </Typography>
              <Header />
            </Toolbar>
          </AppBar>
        )} */}
      {/* </Box> */}
      <div
        className="container pb-2-5em mt3rem mt3rem"
        style={{ paddingBottom: "10em" }}
        id="home"
      >
        <div className="row">
          <Grid container spacing={0}>
            <Grid
              xs={12}
              sm={12}
              md={6}
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div
                className="font40 font-weight-700  mb3rem"
                data-aos="fade-down"
                data-aos-easing="fade-down"
                data-aos-duration="2000"
              >
                Restaurant Billing POS
                <br /> that does so much
                <span className="text-grediant2"> MORE!</span>
              </div>
              <div
                className="font30 font-weight-600 text-color-grey"
                data-aos="fade-up"
                data-aos-easing="fade-up"
                data-aos-duration="2000"
              >
                <span className="font24 font-weight-700 text-color-black">
                  Successful Food Businesses run on{" "}
                  <span className="text-grediant">Restro Buddy</span>
                </span>
                <br />
                Billing, Online Orders, Inventory & Customer Relations - all on
                a Centralised Dashboard
              </div>
              <div id="container" className="pt-0-5em mt1rem">
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Learn More</span>
                </button>
              </div>
            </Grid>
            <Grid xs={12} sm={12} md={6}>
              <div
                className="mt3rem"
                data-aos="fade-left"
                data-aos-easing="fade-left"
                data-aos-duration="3000"
                // style={{ position: "relative" }}
              >
                <img
                  src="./images/images.jpg"
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                    borderRadius: 5,
                    // position: "absolute",
                    top: 0,
                  }}
                  alt={""}
                  loading="lazy"
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div
        className="container pb-2-5em"
        data-aos="zoom-in"
        data-aos-easing="zoom-out"
        data-aos-duration="1000"
        style={{ marginTop: -130 }}
        id="home"
      >
        <div className="row" style={{ justifyContent: "center" }}>
          <div
            style={{
              backgroundColor: "#fff",
              padding: 10,
              borderRadius: 10,
              boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
              width: "80%",
              padding: "3%",
            }}
            className="mt3rem"
          >
            <Grid container spacing={0}>
              <Grid
                item
                xs={2}
                sm={1}
                style={{ display: "flex", alignItems: "center" }}
                // data-aos="fade-right"
                // // data-aos-easing="fade-right"
                // data-aos-duration="1500"
              >
                {/* <div className="font-weight-900 p1rem colorgreydark font40"> */}
                <img
                  src="./images/star.svg"
                  style={{
                    width: "80px",
                    objectFit: "contain",
                    borderRadius: 5,
                  }}
                  alt={""}
                  loading="lazy"
                  className=""
                />
                {/* </div> */}
              </Grid>
              <Grid xs={10} sm={5}>
                <div className="font20 p1rem font-weight-500 ">
                  <b>India’s Best POS</b>
                  <br />
                  ET Hospitality World, 2022
                </div>
              </Grid>
              <Grid
                item
                xs={2}
                sm={1}
                style={{ display: "flex", alignItems: "center" }}
                // data-aos="fade-right"
                // // data-aos-easing="fade-right"
                // data-aos-duration="1500"
              >
                {/* <div className="font-weight-900 p1rem colorgreydark font40"> */}
                <img
                  src="./images/star.svg"
                  style={{
                    width: "80px",
                    objectFit: "contain",
                    borderRadius: 5,
                  }}
                  alt={""}
                  loading="lazy"
                  className=""
                />
                {/* </div> */}
              </Grid>
              <Grid xs={10} sm={5}>
                <div className="font20 p1rem font-weight-500 ">
                  <b>Tech Startup of the Year</b>
                  <br />
                  MSME India Business Convention, 2022
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <Career />
      <Others />
      <Features />
      <CustomerSupport />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
