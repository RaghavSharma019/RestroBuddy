import React, { useState } from "react";
import CallIcon from "@mui/icons-material/CallOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import Swal from "sweetalert2";
import "../../App.css";
import { Button, Grid, ImageListItem, Paper, TextField } from "@mui/material";
import { postData } from "../../services/FetchNodeServices";

export default function Contact() {
  const data = [
    // {
    //   id: 1,
    //   icon: <AccountCircleIcon style={{ fontSize: 50 }} />,
    //   // name: "Name",
    //   desc: "Aditya Jain",
    //   boxshadow: "#FDFCFBA0 6px 2px 16px 0px, #E2D1C399 -6px -2px 16px 0px",
    // },
    {
      id: 2,
      icon: <CallIcon style={{ fontSize: 50 }} />,
      // name: "Contact Number",
      desc: "+91-8462054552",
      boxshadow:
        "rgba(228,229,230,0) 6px 2px 16px 0px, rgba(255,160,43,0.1120904129542662) -6px -2px 16px 0px",
    },
    {
      id: 3,
      icon: <EmailIcon style={{ fontSize: 50 }} />,
      // name: "Email Address",
      desc: "tallybuddy@gmail.com",
      boxshadow:
        "rgba(0,65,106,0.1120904129542662) 6px 2px 16px 0px, rgba(228,229,230,0.1120904129542662) -6px -2px 16px 0px",
    },
  ];

  const [getName, setName] = React.useState("");
  const [getMobile, setMobile] = React.useState("");
  const [getEmail, setEmail] = React.useState("");
  const [getQuery, setQuery] = React.useState("");
  const [error, setError] = useState({});

  const handleError = (inputs, value) => {
    setError((prev) => ({ ...prev, [inputs]: value }));
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

    if (!getQuery) {
      handleError("getQuery", "Please Input Query");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async () => {
    if (validation()) {
      var body = {
        name: getName,
        mobile: getMobile,
        email: getEmail,
        query: getQuery,
      };
      // let config = { headers: { "content-type": "multerpart / form-Data" } };
      let result = await postData(
        "contact/create",
        body
        // config
      );

      if (result.status) {
        Swal.fire({
          icon: "success",
          title: "Done",
          text: result.message,
          timer: 2000,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops....",
          text: result.message,
        });
      }
    }
  };

  return (
    <div className="container" id="contact">
      {/* <div className="font40 pt-1em pb-0-5em font-weight-600 text-grediant">
        Schedule your free demo
      </div> */}
      {/* <div className="font24 font-weight-600 text-center text-color-grey">
        Fill in the details & our product specialist will reach out to you.
      </div> */}
      <div className="row pt-2-5em">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} style={{ display: "grid" }}>
            <div className="box-shadow border-radius-10">
              <Grid container>
                <Grid item xs={12} sm={6} className="p2rem">
                  <Grid container spacing={2}>
                    <Grid item sx={12}>
                      <div className="font40 colorbluelight text-grediant">
                        Schedule your free demo
                      </div>
                      <div className="font14 colorgreydark">
                        Fill in the details & our product specialist will reach
                        out to you.
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                        error={!error.getName ? false : true}
                        helperText={error.getName}
                        onFocus={() => handleError("getName", null)}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id="outlined-basic"
                        label="Mobile"
                        variant="outlined"
                        fullWidth
                        onChange={(event) => {
                          setMobile(event.target.value);
                        }}
                        error={!error.getMobile ? false : true}
                        helperText={error.getMobile}
                        onFocus={() => handleError("getMobile", null)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                        error={!error.getEmail ? false : true}
                        helperText={error.getEmail}
                        onFocus={() => handleError("getEmail", null)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id="outlined-multiline-static"
                        label="Query"
                        multiline
                        rows={4}
                        fullWidth
                        onChange={(event) => {
                          setQuery(event.target.value);
                        }}
                        error={!error.getQuery ? false : true}
                        helperText={error.getQuery}
                        onFocus={() => handleError("getQuery", null)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <div className="font14 pb-0-5em font-weight-500 text-center ">
                        By requesting a demo I hereby provide my consent to
                        receive emails, phone calls, messages and other
                        communications from Dotpe to understand about Dotpe's
                        services, offerings, promotions and other related
                        information.
                      </div>
                      <Button
                        fullWidth
                        variant="contained"
                        onClick={handleSubmit}
                      >
                        Send
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <img src="./images/social/contact_us.png" width={"85%"} />
                  <div
                    // className="row"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                      className="pt-0-5em pb-0-5em"
                    >
                      <div
                        className="font16 pl-0-5em font-weight-500 text-color-grey"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <img src="./images/social/map.png" width="25" />
                      </div>
                      <div className="font16 font-weight-500 text-color-grey">
                        CP Colony, Morar, Gwalior - 474005
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                      className="pt-0-5em pb-0-5em"
                    >
                      <div
                        className="font16 pl-0-5em font-weight-500 text-color-grey"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <img src="./images/social/phone.png" width="25" />
                      </div>
                      <div className="font16 text-color-grey">
                        +91-9340234793
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                      className="pt-0-5em pb-0-5em"
                    >
                      <div
                        className="font16 pl-0-5em font-weight-500 text-color-grey"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <img src="./images/social/mail.png" width="25" />
                      </div>
                      <div className="font16 text-color-grey">
                        raghav443sign@gmail.com
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          {/* {data.map((item, index) => {
            return (
              <Grid item xs={6} sm={6} style={{ display: "grid" }}>
                <div
                  class="p1rem border-radius-10 box-shadow text-center"
                  style={{
                    display: "grid",
                  }}
                >
                  <div
                    // className="row"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div className="pb-1em colororange text-center">
                      {item.icon}
                    </div>
                  </div>
                  <div className="font32" style={{ color: item.background }}>
                    {item.desc}
                  </div>
                </div>
              </Grid>
            );
          })} */}
          {/* <Grid item xs={12} sm={12}>
            <div
              className="box-shadow border-radius-10"
              style={{
                display: "grid",
                boxshadow:
                  "rgba(0,65,106,0.1120904129542662) 6px 2px 16px 0px, rgba(228,229,230,0.1120904129542662) -6px -2px 16px 0px",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.395709965219!2d78.19962787441457!3d26.21632898967206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c15535b9a103%3A0x8d43e9b0250c5347!2sNumeric%20infosystem%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1686311087693!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Grid> */}
        </Grid>
      </div>
    </div>
  );
}
