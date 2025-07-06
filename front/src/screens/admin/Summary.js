import React, { useEffect, useState } from "react";
import Chart from "../../components/DashboardComponent/Chart";
import Deposits from "../../components/Deposits";
import { Grid, Paper } from "@mui/material";
import Title from "../../components/Title";
import { useStyles } from "./AdminDashboardCss";
import AllSales from "../allsales/AllSales";
import { postData } from "../../services/FetchNodeServices";
import { useLocation } from "react-router-dom";
export default function Summary(props) {
  var location = useLocation();
  var data = location.state;
  // alert(JSON.stringify(location.state));
  // console.log("data.order", data);
  console.log("data.todayorder", data);
  // alert(JSON.stringify(location.state.todayorder.todayorder));
  const admin = JSON.parse(localStorage.getItem("ADMIN"));
  const [getCount, setCount] = useState("");
  const [getCustomer, setCustomer] = useState("");
  const handleShowBill = async () => {
    const result = await postData("billing/fetch_total_dashboard", {
      restaurantid: admin.restaurantid,
    });
    setCount(result.data);
  };
  const handleShowCustomer = async () => {
    const result = await postData("billing/fetch_total_customer", {
      restaurantid: admin.restaurantid,
    });
    setCustomer(result.data);
  };

  useEffect(function () {
    handleShowBill();
    handleShowCustomer();
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.box}>
        {/* Chart */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <div
              className="row"
              style={{ width: "100%", marginLeft: 0, marginRight: 0 }}
            >
              <div className="col-12 col-sm-6 col-md-3">
                <div className="dashboardcard card-purple-blue text-white mb-3 mb-md-0">
                  <div className="dashboard-card-body d-flex justify-content-between align-items-end">
                    <div className="card-number">
                      <div className="h3 m-0">
                        {/* {data?.totalorder?.totalorder} */}
                        {getCount.totalorder}
                      </div>
                      <small>
                        <strong>Total Orders</strong>
                      </small>
                    </div>
                    <div className="card-description text-right">
                      <small>
                        <img
                          src="/images/gif/catering_2.gif"
                          width="50"
                          style={{
                            backgroundColor: "#fff",
                            padding: 2,
                            borderRadius: 10,
                          }}
                        />
                      </small>
                      <br />
                      <small>
                        &#8377; {parseFloat(getCount.totalbill).toFixed(2)}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3">
                <div className="dashboardcard card-salmon-pink text-white">
                  <div className="dashboard-card-body d-flex justify-content-between align-items-end">
                    <div className="card-number">
                      <div className="h3 m-0">{data?.order?.todayorder}</div>
                      <small>
                        <strong>Today Order</strong>
                      </small>
                    </div>
                    <div className="card-description text-right">
                      <small>
                        <img
                          src="/images/gif/clipboard.gif"
                          width="50"
                          style={{
                            backgroundColor: "#fff",
                            padding: 2,
                            borderRadius: 10,
                          }}
                        />
                      </small>
                      <br />
                      <small>
                        &#8377;{" "}
                        {parseFloat(
                          data?.order?.totalbill == null
                            ? 0
                            : data?.order?.totalbill
                        ).toFixed(2)}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3">
                <div className="dashboardcard card-blue-green text-white">
                  <div className="dashboard-card-body d-flex justify-content-between align-items-end">
                    <div className="card-number">
                      <div className="h3 m-0">{getCustomer.mobileno}</div>
                      <small>
                        <strong>Total Customer</strong>
                      </small>
                    </div>
                    <div className="card-description text-right">
                      <small>
                        <img
                          src="/images/gif/man.gif"
                          width="50"
                          style={{
                            backgroundColor: "#fff",
                            padding: 2,
                            borderRadius: 10,
                          }}
                        />
                      </small>
                      <br />
                      <small>0.00%</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3">
                <div className="dashboardcard card-purple-pink text-white">
                  <div className="dashboard-card-body d-flex justify-content-between align-items-end">
                    <div className="card-number">
                      <div className="h3 m-0">
                        {parseFloat(
                          getCount.totalbill / getCount.totalorder
                        ).toFixed(2)}
                      </div>
                      <small>
                        <strong>Revenue Day Ratio</strong>
                      </small>
                    </div>
                    <div className="card-description text-right">
                      <small>
                        <img
                          src="/images/gif/chart.gif"
                          width="50"
                          style={{
                            backgroundColor: "#fff",
                            padding: 2,
                            borderRadius: 10,
                          }}
                        />
                      </small>
                      <br />
                      <small>0.00%</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <Chart />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <Deposits />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <AllSales />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
