import React, { useEffect, useState } from "react";

import {
  Grid,
  Divider,
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import { postData, serverURL } from "../../services/FetchNodeServices";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Plusminus from "../Plusminus/Plusminus";
import Swal from "sweetalert2";
import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import io from "socket.io-client";

export default function TableCart(props) {
  const socket = io.connect(serverURL);

  var admin = JSON.parse(localStorage.getItem("ADMIN"));
  const [customername, setCustomerName] = useState();
  const [mobileno, setMobileNo] = useState();
  const [billNo, setBillNo] = useState(0);
  const [open, setOpen] = useState(false);
  var gst = parseInt(admin.gsttype) / 2;
  var navigate = useNavigate();
  const [Razorpay] = useRazorpay();
  var dispatch = useDispatch();
  var foodOrder = useSelector((state) => state.orderData);
  var foodList = [];
  if (props.tableNo.length != 1) {
    var cart = foodOrder[props.tableNo];
    if (cart != undefined) foodList = Object.values(cart);
  } else if (props.getTakeAndHome != "") {
    var cart = foodOrder[props.getTakeAndHome];
    if (cart != undefined) foodList = Object.values(cart);
  }
  var totalAmount = foodList.reduce(calculateTotal, 0);
  var totalOffer = foodList.reduce(calculateTotalOffer, 0);

  function calculateTotal(item1, item2) {
    return item1 + item2.price * item2.qty;
  }

  useEffect(() => {
    setupSocketListeners();
    return () => socket.on("disconnect");
  }, [0]);

  function setupSocketListeners() {
    socket.on("order");
  }

  function calculateTotalOffer(item1, item2) {
    var price = item2.offerprice > 0 ? item2.price * item2.qty : 0;
    return item1 + (price - item2.offerprice * item2.qty);
  }

  var admin = JSON.parse(localStorage.getItem("ADMIN"));

  const getCurrentDate = () => {
    var date = new Date();
    var cd =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return cd;
  };
  const getCurrentTime = () => {
    var time = new Date();
    var ct = time.getHours() + ":" + time.getMinutes();
    return ct;
  };
  ////////////////////Payment API/////////////////////

  const handlePayment = useCallback(
    async (na) => {
      const options = {
        key: "rzp_test_GQ6XaPC6gMPNwH",
        amount: na * 100,
        currency: "INR",
        name: admin.restaurantname,
        description: "Online Payments",
        image: `${serverURL}/images/${admin.filelogo}`,

        handler: (res) => {
          console.log("Payment Details", res);
        },
        prefill: {
          name: customername,
          email: "youremail@example.com",
          contact: mobileno,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzpay = new Razorpay(options);
      rzpay.open();
    },
    [Razorpay]
  );

  ////////////////////////////////////////////////////////

  const handleOpen = async () => {
    const result = await postData("billing/fetch_total_order", {
      restaurantid: admin.restaurantid,
    });
    setBillNo(result.data.billno + 1);
    setOpen(true);
  };
  const handleSave = async () => {
    Swal.fire({
      title: "Are you sure to Save the Bill?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        var body = {
          billtime: getCurrentTime(),
          billdate: getCurrentDate(),
          tableno: props.tableNo != "#" ? props.tableNo : props.getTakeAndHome,
          server: props.waiterName,
          fssai: admin.fssai,
          cnote: "",
          gst: admin.gstno,
          billingdetails: JSON.stringify(
            foodOrder[
              props.tableNo != "#" ? props.tableNo : props.getTakeAndHome
            ]
          ),
          totalamount:
            totalAmount -
            totalOffer +
            ((totalAmount - totalOffer) * admin.gsttype) / 100,
          customername,
          mobileno,
          restaurantid: admin.restaurantid,
        };
        var response = await postData("billing/bill_submit", body);
        if (result.isConfirmed) {
          props.setSelected(0);
          Swal.fire("Saved!", "Your Bill has been saved", "success");
          dispatch({
            type: "DEL_ORDER",
            payload: [
              props.tableNo != "#" ? props.tableNo : props.getTakeAndHome,
            ],
          });
          socket.emit("neworder", body);
          props.setRefresh(!props.refresh);
          if (response.status) {
            props.setSelected(0);
            props.setSelectedFloor(-1);
            props.setSelectedTable(-1);
            props.setRefresh(false);
            props.setTableNo("");
            props.setFloorNo("");
            setCustomerName("");
            setMobileNo("");
            Swal.fire({
              icon: "success",
              title: `Order Confirm`,
              text: `Your Order No. ${billNo}`,
            });
            setOpen(false);
            printDiv();
          } else {
            Swal.fire({
              icon: "error",
              title: `Order Not Confirm`,
            });
          }
        }
      }
      // else if (result.isDenied) {
      //   props.setSelected(0);
      //   props.setSelectedFloor(-1);
      //   props.setSelectedTable(-1);
      //   props.setRefresh(false);
      //   props.setTableNo("");
      //   props.setFloorNo("");
      // }
      // else {
      //   printDiv();
      // }
    });
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  function printDiv() {
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
  const handleQtyChange = (v, item) => {
    var foodlist = foodOrder[props.tableNo] || foodOrder[props.getTakeAndHome];
    if (v == 0) {
      delete foodlist[item.fooditemid];
      foodOrder[props.tableNo] = foodlist;
    } else {
      foodlist[item.fooditemid].qty = v;
      foodOrder[props.tableNo] = foodlist;
    }
    console.log("CART", foodOrder);
    dispatch({
      type: "ADD_ORDER",
      payload: [props.tableNo, foodOrder[props.tableNo]],
    });
    props.setRefresh(!props.refresh);
  };

  const showFoodDialog = () => {
    return foodList.map((item, index) => {
      return (
        <>
          <tr>
            <td>{index + 1}</td>
            <td>{item?.fooditemname}</td>
            <td style={{ textAlign: "right" }}>&#8377;{item?.price}</td>
            <td style={{ textAlign: "right" }}>&#8377;{item?.offerprice}</td>
            <td style={{ textAlign: "right" }}>{item?.qty}</td>
            <td style={{ textAlign: "right" }}>
              &#8377;
              {item?.offerprice > 0
                ? item?.offerprice * item?.qty
                : item?.price * item?.qty}
            </td>
          </tr>
        </>
      );
    });
  };

  const showFoodList = () => {
    return foodList.map((item, index) => {
      return (
        <>
          <Grid item xs={1}>
            {index + 1}
          </Grid>
          <Grid item xs={3}>
            {item?.fooditemname}
          </Grid>
          <Grid item xs={2} style={{ textAlign: "right" }}>
            &#8377;{item?.price}
          </Grid>
          <Grid item xs={2} style={{ textAlign: "right" }}>
            &#8377;{item?.offerprice}
          </Grid>
          <Grid
            item
            xs={2}
            style={{ display: "flex", justifyContent: "right" }}
          >
            <Plusminus
              onChange={(v) => handleQtyChange(v, item)}
              qty={item?.qty}
            />
          </Grid>
          <Grid item xs={2} style={{ textAlign: "right", fontWeight: "bold" }}>
            &#8377;
            {item?.offerprice > 0
              ? item?.offerprice * item?.qty
              : item?.price * item?.qty}
          </Grid>
        </>
      );
    });
  };
  const showTotalBill = () => {
    return (
      <>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        {amountDetail()}{" "}
        {foodList.length > 0 && (
          <>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={handleOpen}
                variant="contained"
                fullWidth
                // style={{ display: "flex", marginLeft: "auto" }}
                color="primary"
              >
                View & Confirm Order
              </Button>
            </Grid>
          </>
        )}
      </>
    );
  };

  const heading = () => {
    return (
      <div>
        <Grid
          container
          spacing={1}
          style={{ fontFamily: "kanit", fontSize: 14 }}
        >
          <Grid item xs={6}>
            <TextField
              onChange={(event) => setCustomerName(event.target.value)}
              label="Customer Name"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              onChange={(event) => setMobileNo(event.target.value)}
              label="Mobile"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          {tableHeading()}
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: 200,
              overflowY: "scroll",
            }}
            className={"tablecart"}
          >
            <Grid container spacing={1}>
              {showFoodList()}
            </Grid>
          </Grid>
          {showTotalBill()}
        </Grid>
      </div>
    );
  };

  const tableHeading = () => {
    return (
      <>
        <Grid item xs={1} style={{ fontWeight: "bold" }}>
          Sn
        </Grid>
        <Grid item xs={3} style={{ fontWeight: "bold" }}>
          Name
        </Grid>
        <Grid item xs={2} style={{ fontWeight: "bold", textAlign: "right" }}>
          Rate
        </Grid>
        <Grid item xs={2} style={{ fontWeight: "bold", textAlign: "right" }}>
          Offer
        </Grid>
        <Grid item xs={2} style={{ fontWeight: "bold", textAlign: "right" }}>
          Qty
        </Grid>
        <Grid item xs={2} style={{ fontWeight: "bold", textAlign: "right" }}>
          Amount
        </Grid>
      </>
    );
  };

  const amountDetail = () => {
    return (
      <>
        <table border="0" width="100%" style={{ fontSize: 12 }}>
          <tr>
            <th style={{ textAlign: "left" }}>Amount:</th>
            <th style={{ textAlign: "right" }}>&#8377;{totalAmount}</th>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>Discount:</th>
            <th style={{ textAlign: "right" }}> &#8377;{totalOffer}</th>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>Total Amount:</th>
            <th style={{ textAlign: "right" }}>
              &#8377;{totalAmount - totalOffer}
            </th>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>CGST:</th>
            <th style={{ textAlign: "right" }}>
              &#8377;{((totalAmount - totalOffer) * gst) / 100}
            </th>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>SGST:</th>
            <th style={{ textAlign: "right" }}>
              &#8377;{((totalAmount - totalOffer) * gst) / 100}
            </th>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>Net Amount:</th>
            <th style={{ textAlign: "right" }}>
              &#8377;
              {totalAmount -
                totalOffer +
                ((totalAmount - totalOffer) * admin.gsttype) / 100}
            </th>
          </tr>
        </table>
        {/* <Grid item xs={6} style={{ fontWeight: "bold" }}>
          Amount:
        </Grid>
        <Grid item xs={6} style={{ fontWeight: "bold", textAlign: "right" }}>
          &#8377;{totalAmount}
        </Grid>
        <Grid item xs={6} style={{ fontWeight: "bold" }}>
          Discount:
        </Grid>
        <Grid item xs={6} style={{ fontWeight: "bold", textAlign: "right" }}>
          &#8377;{totalOffer}
        </Grid>
        <Grid item xs={6} style={{ fontWeight: "bold" }}>
          Total Amount:
        </Grid>
        <Grid item xs={6} style={{ fontWeight: "bold", textAlign: "right" }}>
          &#8377;{totalAmount - totalOffer}
        </Grid>
        <Grid item xs={6} style={{ fontWeight: "bold" }}>
          CGST:
        </Grid>
        <Grid item xs={6} style={{ fontWeight: "bold", textAlign: "right" }}>
          &#8377;{((totalAmount - totalOffer) * gst) / 100}
        </Grid>
        <Grid item xs={6} style={{ fontWeight: "bold" }}>
          SGST:
        </Grid>
        <Grid item xs={6} style={{ fontWeight: "bold", textAlign: "right" }}>
          &#8377;{((totalAmount - totalOffer) * gst) / 100}
        </Grid>
        <Grid item xs={6} style={{ fontWeight: "bold" }}>
          Net Amount:
        </Grid>
        <Grid item xs={6} style={{ fontWeight: "bold", textAlign: "right" }}>
          &#8377;
          {totalAmount -
            totalOffer +
            ((totalAmount - totalOffer) * admin.gsttype) / 100}
        </Grid> */}
      </>
    );
  };

  return (
    <div>
      {heading()}
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
                  <td>Bill No: {billNo}</td>
                  <td style={{ float: "right" }}>
                    Date & Time: {getCurrentDate()}&nbsp;&nbsp;
                    {getCurrentTime()}
                  </td>
                </tr>
                <tr>
                  <td>Customer: {customername}</td>
                  <td style={{ float: "right" }}>Mobile: {mobileno}</td>
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
              handleSave();
              // printDiv();
            }}
          >
            Save & Print
          </Button>

          <Button
            onClick={() =>
              handlePayment(
                totalAmount -
                  totalOffer +
                  ((totalAmount - totalOffer) * admin.gsttype) / 100
              )
            }
            variant="contained"
            style={{ display: "flex", marginLeft: "auto" }}
            color="primary"
          >
            Payment Online
          </Button>
          {/* <input
            type="button"
            onClick={() => printDiv("printableArea")}
            value="print a div!"
          /> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
