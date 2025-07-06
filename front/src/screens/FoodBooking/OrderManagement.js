import { useStyles } from "./FoodBookingCss";
import React, { useState, useEffect } from "react";
import MaterialTable from "@material-table/core";
import { serverURL, postData, getData } from "../../services/FetchNodeServices";
import { useLocation, useNavigate } from "react-router-dom";

import moment from "moment";
import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export default function OrderManagement() {
  const classes = useStyles();
  const admin = JSON.parse(localStorage.getItem("ADMIN"));
  const [value, setValue] = React.useState("");
  const getCurrentDate = () => {
    const date = new Date();
    const cd =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return cd;
  };
  const [listBill, setListBill] = useState([]);
  const [bill, setBill] = useState([]);
  const [orderDetail, setOrderDetail] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [tillDate, setTillDate] = useState("");
  const [getCustomerBill, setCustomerBill] = useState("");
  const [getStatus, setStatus] = useState("");

  const fetchTotalAmount = async () => {
    const result = await postData("billing/fetch_total", {
      fromdate: getCurrentDate(),
      tilldate: getCurrentDate(),
      restaurantid: admin.restaurantid,
    });
    setOrderDetail(result.data);
    console.log("result.data", result.data);
  };

  const fetchFilteredbill = async (e) => {
    const result = await postData("billing/fetch_order_filtered_bill", {
      fromdate: getCurrentDate(),
      tilldate: getCurrentDate(),
      restaurantid: admin.restaurantid,
      orderstatus: e || "",
    });
    setListBill(result.data);
    console.log("result.data2", result.data);
  };
  const fetchBill = async () => {
    const result = await postData("billing/fetch_filtered_bill", {
      fromdate: getCurrentDate(),
      tilldate: getCurrentDate(),
      restaurantid: admin.restaurantid,
      // orderstatus: "",
    });
    setBill(result.data);
    console.log("result.data2", result.data);
  };
  const handleOrderStatus = async (e) => {
    fetchFilteredbill(e);
  };
  const handleChange = async (billno, e) => {
    const result = await postData("billing/order_update", {
      order_status: e.target.value,
      billno: billno,
      restaurantid: admin.restaurantid,
      orderstatus: e.target.value,
    });
    setValue(e.target.value);
    fetchFilteredbill();
    fetchTotalAmount();
  };

  useEffect(function () {
    // setInterval(function () {
    fetchBill();
    fetchTotalAmount();
    fetchFilteredbill();
    // }, 3000);
  }, []);

  function displayAll() {
    return (
      <MaterialTable
        title="Order List"
        columns={[
          { title: "Bill No", field: "billno" },
          {
            title: "Bill Date",
            render: (rowData) => (
              <>
                <div>
                  {moment(rowData.billdate).format("YYYY-MM-DD")}{" "}
                  {rowData.billtime}
                </div>
              </>
            ),
          },
          {
            title: "Name",
            render: (rowData) => (
              <>
                <div>{rowData.customername}</div>
                {rowData.mobileno}
              </>
            ),
          },
          { title: "Table No", field: "tableno" },
          { title: "Amount", field: "totalamount" },
          {
            title: "Action",
            render: (rowData) => (
              <>
                {/* {bill.length > 0 && (
                  <FormControl>
                    <RadioGroup
                      row
                      value={rowData.order_status}
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Order Confirm"
                        control={<Radio size="small" />}
                        onChange={(e) => handleChange(rowData.billno, e)}
                        label="Order Confirm"
                        disabled
                      />
                      <FormControlLabel
                        value="In Process"
                        control={<Radio size="small" />}
                        onChange={(e) => handleChange(rowData.billno, e)}
                        label="In Process"
                        disabled={
                          rowData.order_status == "In Process" ||
                          rowData.order_status == "Complete"
                            ? true
                            : false
                        }
                      />
                      <FormControlLabel
                        value="Complete"
                        control={<Radio size="small" />}
                        onChange={(e) => handleChange(rowData.billno, e)}
                        label="Complete"
                        disabled={
                          rowData.order_status == "Complete" ||
                          rowData.order_status != "In Process"
                            ? true
                            : false
                        }
                      />
                    </RadioGroup>
                  </FormControl>

                  // <img src="/images/menu.png" width="24" />
                )} */}
              </>
            ),
          },
        ]}
        data={bill}
        options={{
          paging: true,
          pageSize: 5, // make initial page size
          emptyRowsWhenPaging: false, // To avoid of having empty rows
          pageSizeOptions: [5, 10, 25], // rows selection options
        }}
      />
    );
  }
  const showFoodDialog = () => {
    return (
      <>
        {listBill.map((item, index) =>
          item.order_status == null ||
          item.order_status == "In Process" ||
          item.order_status == "Complete" ? (
            <div
              className="col-12 col-sm-6 col-md-4"
              style={{ display: "flex", marginBottom: 20 }}
            >
              <div
                className="card-6 dashboardcard  dashboard-card-body"
                style={{
                  boxShadow: "0 0 5px #aaa",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h5>
                    Order No:{item.billno}
                    {/* <p className="pull-right">
                <select className="form-control">
                  <option>All types</option>
                  <option>This day</option>
                  <option>Last week</option>
                </select>
              </p> */}
                  </h5>
                  <Divider />
                  <div className="table-responsive">
                    <table className="table ">
                      <tbody>
                        {item?.billingdetails
                          ? Object?.values(
                              JSON?.parse(item?.billingdetails)
                            )?.map((items, index) => (
                              <tr>
                                <td style={{ width: "5%" }}>
                                  {items?.foodtype == "Veg" ? (
                                    <img src="/images/veg.jpeg" width="14" />
                                  ) : (
                                    <img src="/images/nonveg.jpeg" width="14" />
                                  )}
                                </td>
                                <td style={{ width: "75%" }}>
                                  {items?.qty} x {items?.fooditemname}
                                </td>
                                {/* <td style={{ textAlign: "right" }}>
                                &#8377; {items?.price}
                              </td>
                              <td style={{ textAlign: "right" }}>
                                &#8377; {items?.offerprice}
                              </td> */}
                                <td style={{ textAlign: "right" }}>
                                  &#8377;{" "}
                                  {items?.offerprice > 0
                                    ? items?.offerprice * items?.qty
                                    : items?.price * items?.qty}
                                </td>
                              </tr>
                            ))
                          : ""}
                        {/* <tr>
                      <td>{index + 1}</td>
                      <td style={{ textAlign: "right" }}>
                        &#8377; {item?.price}
                      </td>
                      <td style={{ textAlign: "right" }}>
                        &#8377; {item?.offerprice}
                      </td>
                      <td style={{ textAlign: "right" }}>{item.qty}</td>
                      <td style={{ textAlign: "right" }}>
                        &#8377;{" "}
                        {item.offerprice > 0
                          ? item.offerprice * item.qty
                          : item.price * item.qty}
                      </td>
                    </tr> */}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <Divider />
                  {/* {item.length > 0 && ( */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 15,
                    }}
                  >
                    <Button
                      value="In Process"
                      variant="contained"
                      onClick={(e) => handleChange(item.billno, e)}
                      disabled={
                        item.order_status == "In Process" ||
                        item.order_status == "Complete"
                          ? true
                          : false
                      }
                    >
                      Process
                    </Button>
                    <Button
                      variant="contained"
                      value="Complete"
                      onClick={(e) => handleChange(item.billno, e)}
                      disabled={
                        item.order_status == "Complete" ||
                        item.order_status != "In Process"
                          ? true
                          : false
                      }
                    >
                      Complete
                    </Button>
                  </div>
                  {/* <FormControl>
                    <RadioGroup
                      row
                      value={item.order_status}
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Order Confirm"
                        control={<Radio size="small" />}
                        onChange={(e) => handleChange(item.billno, e)}
                        label="Order Confirm"
                        disabled
                      />
                      <FormControlLabel
                        value="In Process"
                        control={<Radio size="small" />}
                        onChange={(e) => handleChange(item.billno, e)}
                        label="In Process"
                        disabled={
                          item.order_status == "In Process" ||
                          item.order_status == "Complete"
                            ? true
                            : false
                        }
                      />
                      <FormControlLabel
                        value="Complete"
                        control={<Radio size="small" />}
                        onChange={(e) => handleChange(item.billno, e)}
                        label="Complete"
                        disabled={
                          item.order_status == "Complete" ||
                          item.order_status != "In Process"
                            ? true
                            : false
                        }
                      />
                    </RadioGroup>
                  </FormControl> */}
                </div>
                {/* // <img src="/images/menu.png" width="24" /> */}
                {/* )} */}
              </div>
            </div>
          ) : (
            <></>
          )
        )}
      </>
    );
  };
  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <div
          className="row"
          style={{
            width: "100%",
            marginLeft: 0,
            marginRight: 0,
            alignItems: "flex-start",
          }}
        >
          {/* {listBill.map((item) => {
            return (
              <div className="col-12 col-sm-6 col-md-6">
                <h3>
                  Recently Opened
                  <p className="pull-right">
                    <select className="form-control">
                      <option>All types</option>
                      <option>This day</option>
                      <option>Last week</option>
                    </select>
                  </p>
                </h3>
                <div className="card-6">
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="https://bit.ly/2N7po7n"
                              className="img-rounded"
                            />
                          </td>
                          <td>
                            <i className="fa fa-file-pdf-o text-red" />{" "}
                            {item.billingdetails.fooditemname}
                          </td>
                          <td>25MB | Edited 1 minute ago</td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="https://bit.ly/2yYgK2x"
                              className="img-rounded"
                            />
                          </td>
                          <td>
                            <i className="fa fa-file-pdf-o text-red" /> Sea
                            Presentation.pdf
                          </td>
                          <td>12MB | Edited 3 minute ago</td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="https://bit.ly/2OXtcKC"
                              className="img-rounded"
                            />
                          </td>
                          <td>
                            <i className="fa fa-file-text-o text-success" />{" "}
                            Lakes in India.doc
                          </td>
                          <td>25MB | Edited 1 minute ago</td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="https://bit.ly/2N7po7n"
                              className="img-rounded"
                            />
                          </td>
                          <td>
                            <i className="fa fa-file-pdf-o text-red" />{" "}
                            Santorini.pdf
                          </td>
                          <td>25MB | Edited 1 minute ago</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })} */}

          <div className="col-12 col-sm-6 col-md-4">
            <div className="dashboardcard card-purple-blue text-white mb-3 mb-md-0">
              <div className="dashboard-card-body d-flex justify-content-between align-items-end">
                <div className="card-number">
                  <div className="h3 m-0">
                    {orderDetail[0]?.totalorder == null
                      ? 0
                      : orderDetail[0]?.totalorder}
                  </div>
                  <small>
                    <strong>Total Orders</strong>
                  </small>
                </div>
                <div className="card-description text-right">
                  <small>
                    <img
                      src="/images/gif/clipboard.gif"
                      width="60"
                      style={{
                        backgroundColor: "#fff",
                        padding: 5,
                        borderRadius: 10,
                      }}
                    />
                  </small>
                  <br />
                  <small>
                    {/* &#8377; {parseFloat(getCount.totalbill).toFixed(2)} */}
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="dashboardcard card-salmon-pink text-white">
              <div className="dashboard-card-body d-flex justify-content-between align-items-end">
                <div className="card-number">
                  <div className="h3 m-0">
                    {
                      orderDetail.filter(function (item) {
                        return item.order_status == "In Process";
                      }).length
                    }
                  </div>
                  <small>
                    <strong>Process Order</strong>
                  </small>
                </div>
                <div className="card-description text-right">
                  <small>
                    <img
                      src="/images/gif/catering.gif"
                      width="60"
                      style={{
                        backgroundColor: "#fff",
                        padding: 5,
                        borderRadius: 10,
                      }}
                    />
                  </small>
                  <br />
                  <small>
                    {/* {parseFloat(
                      data?.order?.totalbill == null
                        ? 0
                        : data?.order?.totalbill
                    ).toFixed(2)} */}
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="dashboardcard card-purple-pink text-white">
              <div className="dashboard-card-body d-flex justify-content-between align-items-end">
                <div className="card-number">
                  <div className="h3 m-0">
                    {
                      orderDetail.filter(function (item) {
                        return item.order_status == "Complete";
                      }).length
                    }
                  </div>
                  <small>
                    <strong>Complete Order</strong>
                  </small>
                </div>
                <div className="card-description text-right">
                  <small>
                    <img
                      src="/images/gif/delivery-completed.gif"
                      width="60"
                      style={{
                        backgroundColor: "#fff",
                        padding: 5,
                        borderRadius: 10,
                      }}
                    />
                  </small>
                  <br />
                  {/* <small>0.00%</small> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{
            width: "100%",
            marginLeft: 0,
            marginRight: 0,
            alignItems: "flex-start",
          }}
        >
          <div className="col-12 col-sm-6 col-md-12">
            <Button
              variant="outlined"
              // className="btn btn-success"
              onClick={() => handleOrderStatus("")}
            >
              All (
              {orderDetail[0]?.totalorder == null
                ? 0
                : orderDetail[0]?.totalorder}
              )
            </Button>
            <Button
              variant="outlined"
              // className="btn btn-success"
              onClick={() => handleOrderStatus("In Process")}
            >
              Preparing (
              {
                orderDetail.filter(function (item) {
                  return item.order_status == "In Process";
                }).length
              }
              )
            </Button>
            <Button
              // className="btn btn-success"
              variant="outlined"
              onClick={() => handleOrderStatus("Complete")}
            >
              Complete (
              {
                orderDetail.filter(function (item) {
                  return item.order_status == "Complete";
                }).length
              }
              )
            </Button>
          </div>
        </div>
        <div
          className="row"
          style={{
            width: "100%",
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 20,
            display: "-webkit-inline-box",
            alignItems: "flex-start",
          }}
        >
          {showFoodDialog()}
        </div>
        {displayAll()}
      </div>
    </div>
  );
}
