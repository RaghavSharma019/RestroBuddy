import React, { useEffect, useState } from "react";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import { postData } from "../../services/FetchNodeServices";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function TableComponent(props) {
  var navigate = useNavigate();
  var foodOrder = useSelector((state) => state.orderData);
  var foodList = [];

  function calculate(tn) {
    // alert(tn)
    var cart = foodOrder[tn];
    //console.log(tn,cart)
    if (cart != undefined) {
      foodList = Object.values(cart);

      var totalAmount = foodList.reduce(calculateTotal, 0);
      var totalOffer = foodList.reduce(calculateTotalOffer, 0);
      return totalAmount - totalOffer;
    } else {
      return 0;
    }
  }

  function calculateTotal(item1, item2) {
    return item1 + item2.price * item2.qty;
  }
  function calculateTotalOffer(item1, item2) {
    var price = item2.offerprice > 0 ? item2.price * item2.qty : 0;
    return item1 + (price - item2.offerprice * item2.qty);
  }

  var admin = JSON.parse(localStorage.getItem("ADMIN"));
  const [floor, setFloor] = useState([]);
  const [table, setTable] = useState([]);
  const [selectedValue, setSelectedValue] = useState("a");
  // const [getHomeTake, setHomeTake] = useState("");

  // const [selectedFloor, setSelectedFloor] = useState(-1);
  // const [tableCheck, setTableCheck] = useState(-1);
  // const [getSelected, setSelected] = useState(0);

  const fetchAllFloor = async () => {
    const result = await postData("tablebooking/fetch_all_floor", {
      restaurantid: admin.restaurantid,
    });
    setFloor(result.data);
  };
  const fetchAllTable = async (fn, i) => {
    props.setTableNo("");
    props.setFloorNo(fn);
    const result = await postData("tablebooking/fetch_all_table_by_floor", {
      restaurantid: admin.restaurantid,
      floor: fn,
    });
    setTable(result.data);
    props.setSelectedFloor(i);
    props.setSelectedTable(-1);
  };
  const handleTableClick = (item, i) => {
    props.setTableNo(item.tableno);
    props.setSelectedTable(i);
  };

  useEffect(function () {
    fetchAllFloor();
  }, []);
  const showTable = () => {
    return table.map((item, i) => {
      return (
        <Paper
          onClick={() => handleTableClick(item, i)}
          elevation={3}
          style={{
            borderRadius: 5,
            width: 80,
            height: 80,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
            margin: 8,
            background: "#d35400",
            flexDirection: "column",
            position: "relative",
            cursor: "pointer",
          }}
        >
          {i == props.selectedTable ? (
            <CheckCircleOutlineIcon
              style={{
                color: "#fff",
                position: "absolute",
                zIndex: 10,
                right: 5,
                top: 5,
                fontSize: 20,
              }}
            />
          ) : (
            ""
          )}
          <div
            style={{
              fontFamily: "kanit",
              fontWeight: "bold",
              fontSize: 16,
              color: "#fff",
              padding: 0,
            }}
          >
            Table {item.tableno}
          </div>
          <div
            style={{
              fontFamily: "kanit",
              fontWeight: "600",
              fontSize: 10,
              color: "#fff",
              padding: 0,
            }}
          >
            Chairs {item.noofchairs}
          </div>
          <div
            style={{
              fontFamily: "kanit",
              fontWeight: "bold",
              fontSize: 16,
              color: "#fff",
              padding: 2,
            }}
          >
            &#8377; {calculate(`#${props.floorNo}${item.tableno}`)}
          </div>
        </Paper>
      );
    });
  };

  const showFloor = () => {
    return floor.map((item, i) => {
      return (
        <Paper
          onClick={() => fetchAllTable(item.floor, i)}
          elevation={3}
          style={{
            borderRadius: 5,
            width: 80,
            height: 80,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            padding: 5,
            margin: 8,
            background: i == props.selectedFloor ? "#27ae60" : "#7bed9f",
            cursor: "pointer",
          }}
        >
          {i == props.selectedFloor ? (
            <CheckCircleOutlineIcon
              style={{
                color: "#fff",
                position: "absolute",
                zIndex: 10,
                right: 5,
                top: 5,
                fontSize: 20,
              }}
            />
          ) : (
            ""
          )}
          <div
            style={{
              fontFamily: "kanit",
              fontWeight: "bold",
              fontSize: 16,
              color: "#fff",
              padding: 2,
            }}
          >
            {item.floor}
          </div>
        </Paper>
      );
    });
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 5 }}>
      {props.getTakeAndHome == "Home" ? (
        <>
          <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 10 }}>
            {showFloor()}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {props.floorNo != "" ? showTable() : ""}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
