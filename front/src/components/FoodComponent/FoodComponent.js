import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  TextField,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { getData, serverURL, postData } from "../../services/FetchNodeServices";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function FoodComponent(props) {
  const [listFood, setListFood] = useState([]);
  const [tempListFood, setTempListFood] = useState([]);
  const [order, setOrder] = useState([]);
  var dispatch = useDispatch();
  var foodOrder = useSelector((state) => state.orderData);
  console.log("foodOrder", foodOrder);
  var admin = JSON.parse(localStorage.getItem("ADMIN"));

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(
    function () {
      fetchAllFood();
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    },
    [open]
  );

  const fetchAllFood = async () => {
    var result = await postData("fooditem/fetch_all_fooditem_categorywise", {
      restaurantid: admin.restaurantid,
      categoryid: props.categoryid,
    });
    setListFood(result.data);
    setTempListFood(result.data);
  };

  // if (props.floorNo != "") {
  //   fetchAllFood();
  // } else if (props.tableNo != "") {
  //   fetchAllFood();
  // } else {
  //   props.setOpen(false);
  //   Swal.fire({
  //     icon: "error",
  //     title: "Please Select Floor",
  //   });
  // }
  const searchFood = (e) => {
    var temp = tempListFood.filter((item) =>
      item.fooditemname.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setListFood(temp);
  };
  // alert(props.getTakeAndHome);
  // alert(JSON.stringify(props.getTakeAndHome));
  const handleOrder = (item) => {
    var key = "";
    if (props.getTakeAndHome == "Home") {
      key = `#${props.floorNo}${props.tableNo}`;
      // alert(1);
    } else {
      // alert(2);
      key = props.getTakeAndHome;
    }
    try {
      var foodlist = foodOrder[key];
      try {
        foodlist[item.fooditemid].qty =
          parseInt(foodlist[item.fooditemid].qty) + 1;
      } catch (e) {
        item.qty = 1;
        foodlist[item.fooditemid] = item;
        foodOrder[key] = foodlist;
      }
    } catch (e) {
      var foodlist = {};
      item.qty = 1;
      foodlist[item.fooditemid] = item;
      foodOrder[key] = { ...foodlist };
    }
    dispatch({ type: "ADD_ORDER", payload: [key, foodOrder[key]] });
    props.setRefresh(!props.refresh);
    console.log("foodlist", key);
  };

  const showFoodList = () => {
    return listFood.map((item) => {
      return (
        <>
          <div className="col-12 col-sm-6 col-md-2" style={{ padding: 3 }}>
            <div className="outer" onClick={() => handleOrder(item)}>
              <div
                className="inner"
                style={{
                  backgroundImage: `url(${serverURL}/images/${item.icon})`,
                }}
              />
              <div className="item">
                <div className="item-name">
                  <h4>{item.fooditemname}</h4>
                  {/* <p>Fresh &amp; sweet</p> */}
                </div>
                <div className="item-price">
                  <div className="item-price-p">
                    {item.offerprice > 0 ? (
                      <span>
                        <s style={{ color: "#ea5753", fontSize: 10 }}>
                          &#8377;{item.price}
                        </s>{" "}
                        <b style={{ color: "#46b83d" }}>
                          &#8377;{item.offerprice}
                        </b>
                      </span>
                    ) : (
                      <b style={{ color: "#46b83d" }}>&#8377;{item.price}</b>
                    )}
                  </div>
                  {/* <div className="rating">
                  <div />
                  <div />
                  <div />
                  <div />
                </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="card_food">
            <div className="card__image">
              <img
                src={`${serverURL}/images/${item.icon}`}
                // alt="Salad"
              />
            </div>
            <div className="card__info">
              <div className="car__info--title">
                <h3>{item.fooditemname}</h3>
                <p>Fresh &amp; sweet</p>
              </div>
              <div className="card__info--price">
                <p>
                  {item.offerprice > 0 ? (
                    <span>
                      <s>&#8377;{item.price}</s> <b>&#8377;{item.offerprice}</b>
                    </span>
                  ) : (
                    <b>&#8377;{item.price}</b>
                  )}
                </p>
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
              </div>
            </div>
          </div> */}

          {/* <List
            sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}
          >
            <ListItemButton
              onClick={() => handleOrder(item)}
              sx={{
                height: 30,
                display: "flex",
                alignItems: "center",
                padding: 3,
              }}
              alignItems="flex-start"
            >
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src={`${serverURL}/images/${item.icon}`}
                  sx={{ width: 30, height: 30 }}
                />
              </ListItemAvatar>

              <ListItemText
                primary={item.fooditemname}
                secondary={
                  item.offerprice > 0 ? (
                    <span>
                      <s>&#8377;{item.price}</s> <b>&#8377;{item.offerprice}</b>
                    </span>
                  ) : (
                    <b>&#8377;{item.price}</b>
                  )
                }
              />
            </ListItemButton>
          </List>
          <Divider /> */}
          {/* </div> */}
        </>
      );
    });
  };
  const handleDialogClose = () => {
    props.setOpen(false);
  };
  // const showFoodDialog = () => {
  //   return (

  //   );
  // };

  return (
    <React.Fragment>
      {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
      <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
      <Dialog
        open={props.open}
        onClose={handleDialogClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="scroll-dialog-title">
          {/* <TextField
            onChange={(e) => searchFood(e)}
            fullWidth
            label="Search food items.."
            variant="standard"
          /> */}
          <div
            component="form"
            style={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              borderRadius: 50,
              boxShadow:
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <img src="/images/searching.png" width="24" />
            </IconButton>
            <InputBase
              onChange={(e) => searchFood(e)}
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search food items..."
              inputProps={{ "aria-label": "Search food items..." }}
            />
          </div>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {" "}
              {showFoodList()}
              {showFoodList()}
              {showFoodList()}
              {showFoodList()}
            </div>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions> */}
      </Dialog>
    </React.Fragment>
  );
}
