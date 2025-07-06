import * as React from "react";
import CampaignIcon from "@mui/icons-material/Campaign";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";

import "../../App.css";
import { Grid, ImageListItem, Paper } from "@mui/material";

export default function Others() {
  const data = [
    {
      id: 1,
      icon: "./assets/images/features/inventory-management.png",
      name: "CENTRALIZE ORDERS",
      desc: "Send online orders from every major platform to Slice Register",
      background:
        "linear-gradient(140deg, rgba(253, 252, 251, 0), rgba(226, 209, 195, 0.4120904129542662) 100%)",
      boxshadow: "#FDFCFBA0 6px 2px 16px 0px, #E2D1C399 -6px -2px 16px 0px",
    },
    {
      id: 2,
      icon: "./assets/images/features/invoice.png",
      name: "GROW ORDERS",
      desc: "Digitize customers and watch ticket sizes double",
      background:
        "linear-gradient(140deg, rgba(228,229,230,0) 0%, rgba(255,160,43,0.0800904129542662) 100%)",
      boxshadow:
        "rgba(228,229,230,0) 6px 2px 16px 0px, rgba(255,160,43,0.0800904129542662) -6px -2px 16px 0px",
    },
    {
      id: 3,
      icon: "./assets/images/features/customer_account.png",
      name: "STREAMLINE WORKFLOWS",
      desc: "Take orders faster with a pizza-friendly system",
      background:
        "linear-gradient(320deg, rgba(0,65,106,0.0800904129542662) 0%, rgba(228,229,230,0.0800904129542662) 100%)",
      boxshadow:
        "rgba(0,65,106,0.0800904129542662) 6px 2px 16px 0px, rgba(228,229,230,0.0800904129542662) -6px -2px 16px 0px",
    },
    {
      id: 4,
      icon: "./assets/images/features/barcode.png",
      name: "LOWER COSTS",
      desc: "Make fewer errors and save on processing",
      background:
        "linear-gradient(140deg, rgba(255,255,255,0.0800904129542662) 0%, rgba(0,212,255,0.1000904129542662) 100%)",
      boxshadow:
        "rgba(255,255,255,1) 6px 2px 16px 0px, rgba(0,212,255,0.1000904129542662) -6px -2px 16px 0px",
    },
  ];

  return (
    <div
      className="container mt3rem p2rem"
      style={{ backgroundColor: "#211E1E", color: "#fff" }}
    >
      <div
        className="font32 font-weight-600 text-grediant2 text-center"
        data-aos="zoom-in"
        data-aos-easing="zoom-out"
        data-aos-duration="1500"
      >
        Restro Buddy is the easy-to-install, simple-to-use POS that transforms
        your <br />
        business and makes your customers more valuable.
      </div>
      {/* <div className="font24 font-weight-600 text-center text-color-grey">
        Give us a try. There's nothing to install. No training manuals needed.
        No commitments.
      </div> */}
      <div className="row mt3rem">
        <Grid container spacing={3}>
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            style={{ display: "grid" }}
            data-aos="fade-right"
            data-aos-easing="fade-right"
            data-aos-duration="300"
          >
            <div
              className="p1rem border-radius-10 "
              style={{
                display: "grid",
              }}
            >
              <div className="row1" style={{ alignItems: "center" }}>
                <div className="pb-1em hover">
                  <img
                    src={
                      "./images/CMP-SliceRegister-2023-March-LP-Update-Icons-Streamline.png"
                    }
                    width="140"
                  />
                </div>
                <div className="font-weight-700 text-center pb-1em font20">
                  CENTRALIZE
                  <br /> ORDERS
                </div>
              </div>
              <div className="font12 font-weight500 text-center">
                Send online orders from every major platform to Slice Register
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            style={{ display: "grid" }}
            data-aos="fade-right"
            data-aos-easing="fade-right"
            data-aos-duration="600"
          >
            <div
              className="p1rem border-radius-10 "
              style={{
                display: "grid",
              }}
            >
              <div className="row1" style={{ alignItems: "center" }}>
                <div className="pb-1em hover">
                  <img
                    src={
                      "./images/CMP-SliceRegister-2023-March-LP-Update-Icons.png"
                    }
                    width="140"
                  />
                </div>
                <div className="font-weight-700 text-center pb-1em font20">
                  GROW <br /> ORDERS
                </div>
              </div>
              <div className="font12 font-weight500 text-center">
                Digitize customers and watch ticket sizes double
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            style={{ display: "grid" }}
            data-aos="fade-right"
            data-aos-easing="fade-right"
            data-aos-duration="900"
          >
            <div
              className="p1rem border-radius-10 "
              style={{
                display: "grid",
              }}
            >
              <div className="row1" style={{ alignItems: "center" }}>
                <div className="pb-1em hover">
                  <img
                    src={
                      "./images/CMP-SliceRegister-2023-March-LP-Update-Icons-Pizza-sides.png"
                    }
                    width="140"
                  />
                </div>
                <div className="font-weight-700 text-center pb-1em font20">
                  STREAMLINE <br /> WORKFLOWS
                </div>
              </div>
              <div className="font12 font-weight500 text-center">
                Take orders faster with a pizza-friendly system
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            style={{ display: "grid" }}
            data-aos="fade-right"
            data-aos-easing="fade-right"
            data-aos-duration="1500"
          >
            <div
              className="p1rem border-radius-10 "
              style={{
                display: "grid",
              }}
            >
              <div className="row1" style={{ alignItems: "center" }}>
                <div className="pb-1em hover">
                  <img
                    src={
                      "./images/CMP-SliceRegister-2023-March-LP-Update-Icons-Lower.png"
                    }
                    width="140"
                  />
                </div>
                <div className="font-weight-700 text-center pb-1em font20">
                  LOWER <br /> COSTS
                </div>
              </div>
              <div className="font12 font-weight500 text-center">
                Make fewer errors and save on processing
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} style={{ display: "grid" }}>
            <div
              // elevation={0}
              className="divhover border-radius-10 mt3rem mb3rem"
              style={{
                background: "#dee0e5",
                display: "grid",
              }}
              data-aos="fade-down"
              data-aos-easing="fade-down"
              data-aos-duration="1500"
            >
              <Grid container spacing={0}>
                <Grid item xs={12} sm={6} className="p2rem">
                  <div className="font-weight-900 pb-1em colorgreydark font40">
                    Let’s Build the Future of Technology Together
                  </div>
                  <div className="font20 font-weight-500 text-color-black">
                    Let our team provide you with a no-cost, no-commitment
                    technical proposal for your next enterprise custom project.
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    src="./images/social/pos-3.png"
                    width="300"
                    // className="imgh"
                    style={{ alignSelf: "center" }}
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
      <Grid
        container
        spacing={0}
        data-aos="fade-up"
        data-aos-easing="fade-up"
        data-aos-duration="1500"
      >
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          // style={{ display: "flex", justifyContent: "center" }}
        >
          <figure class="snip1543">
            <img
              src="./images/CMP-SliceRegister-2023-March-LP-Update-4x-Banner-2.jpg"
              alt="sample101"
              width="100%"
            />
            <figcaption>
              <h3>Billing & Payment</h3>
              {/* <p>
                But Calvin is no kind and loving god! He's one of the old gods!
                He demands sacrifice!
              </p> */}
            </figcaption>
            <a href="#"></a>
          </figure>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <figure class="snip1543">
            <img
              src="./images/CMP-SliceRegister-2023-March-LP-Update-4x-Banner-8.jpg"
              alt="sample101"
              width="100%"
            />
            <figcaption>
              <h3>Table Reservation</h3>
              {/* <p>
                But Calvin is no kind and loving god! He's one of the old gods!
                He demands sacrifice!
              </p> */}
            </figcaption>
            <a href="#"></a>
          </figure>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <figure class="snip1543">
            <img
              src="./images/CMP-SliceRegister-2023-March-LP-Update-4x-Banner-11.jpg"
              alt="sample101"
              width="100%"
            />
            <figcaption>
              <h3>Food Service</h3>
              {/* <p>
                But Calvin is no kind and loving god! He's one of the old gods!
                He demands sacrifice!
              </p> */}
            </figcaption>
            <a href="#"></a>
          </figure>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <figure class="snip1543">
            <img
              src="./images/CMP-SliceRegister-2023-March-LP-Update-4x-Banner-12.jpg"
              alt="sample101"
              width="100%"
            />
            <figcaption>
              <h3>Order Management</h3>
              {/* <p>
                But Calvin is no kind and loving god! He's one of the old gods!
                He demands sacrifice!
              </p> */}
            </figcaption>
            <a href="#"></a>
          </figure>
        </Grid>
      </Grid>
    </div>
  );
}
