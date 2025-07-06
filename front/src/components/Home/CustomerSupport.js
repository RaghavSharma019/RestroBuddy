import * as React from "react";
import CampaignIcon from "@mui/icons-material/Campaign";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";

import "../../App.css";
import { Grid, ImageListItem, Paper } from "@mui/material";

export default function CustomerSupport() {
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
      <title>CSS Card Hover Effects Html CSS</title>

      <div
        className="font40 font-weight-600 text-grediant2 text-center"
        data-aos="zoom-in"
        data-aos-easing="zoom-out"
        data-aos-duration="1500"
      >
        Discover the &#x2764; Rista Advantage
      </div>
      {/* <div className="font24 font-weight-600 text-center text-color-grey">
        Give us a try. There's nothing to install. No training manuals needed.
        No commitments.
      </div> */}
      {/* <div className="wrapper">
        <div className="card">
          <div className="img-box">
            <img
              src="https://st2.depositphotos.com/4285045/7260/i/450/depositphotos_72609979-stock-photo-ojos-de-gata.jpg"
              alt="image url"
            />
          </div>
          <div className="content">
            <div className="card-one">Security</div>
            <p>
              <b>Data Encryption: </b>Protect customer and financial data with
              encryption to prevent security breaches
            </p>
            <p>
              <b>User Authentication: </b> Require secure logins for employees
              and monitor access to the system.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="img-box">
            <img
              src="https://st2.depositphotos.com/4285045/7260/i/450/depositphotos_72609979-stock-photo-ojos-de-gata.jpg"
              alt="image url"
            />
          </div>
          <div className="content">
            <div className="card-one">Customer Feedback</div>
            <p>
              <b>Survey and Review Integration: </b> Collect feedback from
              customers through the POS system and encourage online reviews.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="img-box">
            <img
              src="https://st2.depositphotos.com/4285045/7260/i/450/depositphotos_72609979-stock-photo-ojos-de-gata.jpg"
              alt="image url"
            />
          </div>
          <div className="content">
            <div className="card-one">Customer Support & Training</div>
            <p>
              <b>24/7 Support:</b> Access to customer support for
              troubleshooting and assistance.
            </p>
          </div>
        </div>
      </div> */}
      <div className="row mt3rem">
        {/* <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <div className="wrapper">
              <div className="card">
                <div className="img-box">
                  <img src="./images/social/security.jpg" alt="image url" />
                </div>
                <div className="content">
                  <div className="card-one">Security</div>
                  <p>
                    <b>Data Encryption: </b>Protect customer and financial data
                    with encryption to prevent security breaches
                  </p>
                  <p>
                    <b>User Authentication: </b> Require secure logins for
                    employees and monitor access to the system.
                  </p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="wrapper">
              <div className="card">
                <div className="img-box">
                  <img
                    src="./images/social/customer_feedback2.png"
                    alt="image url"
                  />
                </div>
                <div className="content">
                  <div className="card-one">Customer Feedback</div>
                  <p>
                    <b>Survey and Review Integration: </b> Collect feedback from
                    customers through the POS system and encourage online
                    reviews.
                  </p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="wrapper">
              <div className="card">
                <div className="img-box">
                  <img
                    src="./images/social/customer-service-team2.png"
                    alt="image url"
                  />
                </div>
                <div className="content">
                  <div className="card-one">Customer Support & Training</div>
                  <p>
                    <b>24/7 Support:</b> Access to customer support for
                    troubleshooting and assistance.
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid> */}
        <div className="containers">
          <div className="cards">
            <img
              src="./images/social/security.jpg"
              alt="Animated Card Hover Effect Html & CSS"
            />
            <div className="overlay">
              <h1 className="text-h1">Security</h1>
              <p className="text-p">
                <b>Data Encryption: </b>Protect customer and financial data with
                encryption to prevent security breaches
              </p>
              <p className="text-p">
                <b>User Authentication: </b> Require secure logins for employees
                and monitor access to the system.
              </p>
              {/* <a className="link-a" href="#">
                {" "}
                Read More
              </a> */}
            </div>
          </div>

          <div className="cards">
            <img
              src="./images/social/customer_feedback2.png"
              alt="Animated Card Hover Effect Html & CSS"
            />
            <div className="overlay">
              <h1 className="text-h1">Customer Feedback</h1>
              <p className="text-p">
                <b>Survey and Review Integration: </b> Collect feedback from
                customers through the POS system and encourage online reviews.
              </p>
              {/* <a className="link-a" href="#">
                {" "}
                Read More
              </a> */}
            </div>
          </div>

          <div className="cards">
            <img
              src="./images/social/customer-service-team2.png"
              alt="Animated Card Hover Effect Html & CSS"
            />
            <div className="overlay">
              <h1 className="text-h1">Customer Support & Training</h1>
              <p className="text-p">
                <b>24/7 Support:</b> Access to customer support for
                troubleshooting and assistance.
              </p>
              {/* <a className="link-a" href="#">
                {" "}
                Read More
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
