import { useStyles } from "./AllSalesCss";
import { useState, useEffect } from "react";
import MaterialTable from "@material-table/core";
import { serverURL, postData, getData } from "../../services/FetchNodeServices";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import moment from "moment";

export default function AllSales() {
  const classes = useStyles();
  const admin = JSON.parse(localStorage.getItem("ADMIN"));
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const getCurrentDate = () => {
    const date = new Date();
    const cd =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return cd;
  };
  const [listBill, setListBill] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [fromDate, setFromDate] = useState("");
  const [tillDate, setTillDate] = useState("");
  const [getCustomerBill, setCustomerBill] = useState("");

  const fetchTotalAmount = async () => {
    const result = await postData("billing/fetch_total", {
      fromdate: fromDate,
      tilldate: tillDate || getCurrentDate(),
      restaurantid: admin.restaurantid,
    });

    setTotalAmount(result.data[0]);
    // alert(result.data[0].totalbill);
  };

  const handleSearch = () => {
    fetchTotalAmount();
    fetchFilteredbill();
  };

  const handleShowBill = async (rowData) => {
    setOpen(true);
    const result = await postData("billing/fetch_customer_bill", {
      billno: rowData.billno,
      restaurantid: rowData.restaurantid,
    });
    setCustomerBill(result.data[0]);
    console.log("result.data", result.data[0]);
  };

  const fetchFilteredbill = async () => {
    const result = await postData("billing/fetch_filtered_bill", {
      fromdate: fromDate,
      tilldate: tillDate || getCurrentDate(),
      restaurantid: admin.restaurantid,
    });
    setListBill(result.data);
    console.log("setListBill", result.data);
  };

  const handleTillDate = (event) => {
    console.log("date...", event);
    const m = String(Number(event.$M) + 1);
    const d = String(event.$D);
    const y = String(event.$y);
    setTillDate(y + "-" + m + "-" + d);
  };

  const handleFromDate = (event) => {
    console.log("date...", event);
    const m = String(Number(event.$M) + 1);
    const d = String(event.$D);
    const y = String(event.$y);
    setFromDate(y + "-" + m + "-" + d);
  };

  useEffect(function () {
    fetchTotalAmount();
    fetchFilteredbill();
  }, []);

  function displayAll() {
    return (
      <MaterialTable
        title="All Sales"
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
          { title: "Server", field: "server" },
          { title: "Amount", field: "totalamount" },
          {
            title: "Print",
            render: (rowData) => (
              <>
                {listBill.length > 0 && (
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleShowBill(rowData)}
                  >
                    Bill
                  </Button>
                )}
              </>
            ),
          },
        ]}
        data={listBill}
        options={{
          paging: true,
          pageSize: 5, // make initial page size
          emptyRowsWhenPaging: false, // To avoid of having empty rows
          pageSizeOptions: [5, 10, 25], // rows selection options
        }}
      />
    );
  }

  const handleDialogClose = () => {
    setOpen(false);
  };

  function handlePrint() {
    var printContents = document.getElementById("printarea");
    // var originalContents = document.body.innerHTML;
    var popupWin = window.open("", "_blank", "width=930");
    // popupWin.document.open();
    popupWin.document.write(
      '<html><body onload="window.print()" style="font-family: sans-serif;"' +
        printContents.innerHTML +
        "</body></html>"
    );
    popupWin.document.close();

    // document.body.innerHTML = printContents;

    // window.print();

    // document.body.innerHTML = originalContents;
  }
  const amountDetail = () => {
    return (
      <>
        <table border="0" width="100%" style={{ fontSize: 12 }}>
          <tr>
            <th style={{ textAlign: "left" }}>Amount:</th>
            <th style={{ textAlign: "right" }}>
              &#8377;
              {getCustomerBill?.billingdetails
                ? Object?.values(
                    JSON?.parse(getCustomerBill?.billingdetails)
                  )?.reduce((acc, item) => {
                    acc += Number(item?.price * item?.qty);
                    return acc;
                  }, 0)
                : ""}
            </th>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>Discount:</th>

            <th style={{ textAlign: "right" }}>
              {" "}
              &#8377;
              {getCustomerBill?.billingdetails
                ? Object?.values(
                    JSON?.parse(getCustomerBill?.billingdetails)
                  )?.reduce((acc, item) => {
                    if (item?.offerprice > 0) {
                      acc += Number(
                        item?.price * item?.qty - item?.offerprice * item?.qty
                      );
                    }
                    return acc;
                  }, 0)
                : ""}
            </th>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>Total Amount:</th>
            <th style={{ textAlign: "right" }}>
              {getCustomerBill?.billingdetails
                ? Object?.values(
                    JSON?.parse(getCustomerBill?.billingdetails)
                  )?.reduce((acc, item) => {
                    acc += Number(item?.price * item?.qty);
                    return acc;
                  }, 0) -
                  Object?.values(
                    JSON?.parse(getCustomerBill?.billingdetails)
                  )?.reduce((acc, item) => {
                    if (item?.offerprice > 0) {
                      acc += Number(
                        item?.price * item?.qty - item?.offerprice * item?.qty
                      );
                    }
                    return acc;
                  }, 0)
                : ""}
            </th>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>CGST:</th>
            <th style={{ textAlign: "right" }}>
              {getCustomerBill?.billingdetails
                ? ((Object?.values(
                    JSON?.parse(getCustomerBill?.billingdetails)
                  )?.reduce((acc, item) => {
                    acc += Number(item?.price * item?.qty);
                    return acc;
                  }, 0) -
                    Object?.values(
                      JSON?.parse(getCustomerBill?.billingdetails)
                    )?.reduce((acc, item) => {
                      if (item?.offerprice > 0) {
                        acc += Number(
                          item?.price * item?.qty - item?.offerprice * item?.qty
                        );
                      }
                      return acc;
                    }, 0)) *
                    9) /
                  100
                : ""}
            </th>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>SGST:</th>
            <th style={{ textAlign: "right" }}>
              {getCustomerBill?.billingdetails
                ? ((Object?.values(
                    JSON?.parse(getCustomerBill?.billingdetails)
                  )?.reduce((acc, item) => {
                    acc += Number(item?.price * item?.qty);
                    return acc;
                  }, 0) -
                    Object?.values(
                      JSON?.parse(getCustomerBill?.billingdetails)
                    )?.reduce((acc, item) => {
                      if (item?.offerprice > 0) {
                        acc += Number(
                          item?.price * item?.qty - item?.offerprice * item?.qty
                        );
                      }
                      return acc;
                    }, 0)) *
                    9) /
                  100
                : ""}
            </th>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>Net Amount:</th>
            <th style={{ textAlign: "right" }}>
              &#8377;
              {getCustomerBill?.totalamount}
            </th>
          </tr>
        </table>
      </>
    );
  };

  const showFoodDialog = () => {
    return (
      <>
        {getCustomerBill?.billingdetails
          ? Object?.values(JSON?.parse(getCustomerBill?.billingdetails))?.map(
              (item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item?.fooditemname}</td>
                  <td style={{ textAlign: "right" }}>&#8377; {item?.price}</td>
                  <td style={{ textAlign: "right" }}>
                    &#8377; {item?.offerprice}
                  </td>
                  <td style={{ textAlign: "right" }}>{item?.qty}</td>
                  <td style={{ textAlign: "right" }}>
                    &#8377;{" "}
                    {item?.offerprice > 0
                      ? item?.offerprice * item?.qty
                      : item?.price * item?.qty}
                  </td>
                </tr>
              )
            )
          : ""}
      </>
    );
  };
  return (
    <div className={classes.rootDisplay}>
      <div className={classes.boxDisplay}>
        <Dialog maxWidth={"xs"} open={open} onClose={handleDialogClose}>
          <div id="printarea">
            <DialogTitle id="scroll-dialog-title" style={{ fontSize: 14 }}>
              <table border="0" width="100%">
                <tr>
                  <th>
                    <img
                      src={`${serverURL}/images/${admin.filelogo}`}
                      width="120"
                    />
                  </th>
                </tr>
                <tr>
                  <th>{admin.restaurantname}</th>
                </tr>
              </table>
            </DialogTitle>
            <DialogContent dividers>
              <Grid container spacing={1}>
                <table
                  border="0"
                  width="100%"
                  style={{ fontSize: 9, fontWeight: "bold" }}
                >
                  <tr>
                    <th colspan="2">{admin.address}</th>
                  </tr>
                  <tr>
                    <th colspan="2">
                      <Divider />
                    </th>
                  </tr>
                  <tr>
                    <td>Bill No: {getCustomerBill.billno}</td>
                    <td style={{ float: "right" }}>
                      Date & Time:
                      {moment(getCustomerBill.billdate).format("DD-MM-YYYY")}
                      &nbsp;&nbsp;
                      {getCustomerBill.billtime}
                    </td>
                  </tr>
                  <tr>
                    <td>Customer: {getCustomerBill.customername}</td>
                    <td style={{ float: "right" }}>
                      Mobile: {getCustomerBill.mobileno}
                    </td>
                  </tr>
                  <tr>
                    <th colspan="2">
                      <Divider />
                    </th>
                  </tr>
                </table>

                {/* {tableHeading()} */}

                <table border="0" width="100%" style={{ fontSize: 9 }}>
                  <tr>
                    <th style={{ textAlign: "left" }}>S.No.</th>
                    <th style={{ textAlign: "left" }}>Item</th>
                    <th style={{ textAlign: "right" }}>Rate</th>
                    <th style={{ textAlign: "right" }}>Offer</th>
                    <th style={{ textAlign: "right" }}>Qty</th>
                    <th style={{ textAlign: "right" }}>Amount</th>
                  </tr>
                  <tr>
                    <th colspan="6">
                      <Divider />
                    </th>
                  </tr>
                  {showFoodDialog()}
                </table>

                <Grid item xs={12}>
                  <Divider />
                </Grid>
                {amountDetail()}
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <table border="0" width="100%" style={{ fontSize: 9 }}>
                  <tr>
                    <th style={{ textAlign: "left" }}>GSTIN: {admin.gstno}</th>
                    <th style={{ textAlign: "left" }}>FSSAI:{admin.fssai}</th>
                  </tr>
                </table>
              </Grid>
            </DialogContent>
          </div>
          <DialogActions>
            <Button
              onClick={() => {
                handlePrint();
              }}
            >
              Print Bill
            </Button>

            {/* <input
            type="button"
            onClick={() => printDiv("printableArea")}
            value="print a div!"
          /> */}
          </DialogActions>
        </Dialog>
        <Grid
          container
          spacing={3}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Grid
            item
            xs={12}
            md={2}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              fontFamily: "kanit",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            <div>Total Sales</div>
            <div style={{ fontSize: 24 }}>
              &#8377;{" "}
              {parseFloat(
                totalAmount?.totalbill == null ? 0 : totalAmount?.totalbill
              ).toFixed(2)}
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs} size="small">
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  label="From Date"
                  format="DD-MM-YYYY"
                  defaultValue={dayjs(getCurrentDate())}
                  onChange={handleFromDate}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>

          <Grid item xs={12} md={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  label="Till Date"
                  format="DD-MM-YYYY"
                  defaultValue={dayjs(getCurrentDate())}
                  onChange={handleTillDate}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>

          <Grid item xs={6} sm={6} md={2}>
            <Button
              variant="contained"
              style={{ fontSize: 12 }}
              fullWidth
              onClick={handleSearch}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className={classes.boxDisplay}>{displayAll()}</div>
    </div>
  );
}
