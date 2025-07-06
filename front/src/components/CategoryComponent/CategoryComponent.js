import { createRef, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { getData, serverURL, postData } from "../../services/FetchNodeServices";
import FoodComponent from "../FoodComponent/FoodComponent";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Swal from "sweetalert2";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
export default function CategoryComponent(props) {
  var sliderRef = createRef();
  const [listCategory, setListCategory] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [open, setOpen] = useState(false);
  var admin = JSON.parse(localStorage.getItem("ADMIN"));
  useEffect(function () {
    fetchAllCategory();
  }, []);
  var settings = {
    // centerMode: true,
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const fetchAllCategory = async () => {
    var result = await postData("category/fetch_all_category", {
      restaurantid: admin.restaurantid,
    });
    setListCategory(result.data);
  };
  const handleFoodListDialog = (cid) => {
    if (props.getTakeAndHome != "Home") {
      setCategoryId(cid);
      setOpen(true);
      props.setSelected(cid);
    } else if (props.floorNo == "") {
      Swal.fire({
        icon: "error",
        title: "Please Select Floor",
      });
    } else if (props.tableNo == "") {
      Swal.fire({
        icon: "error",
        title: "Please Select Table",
      });
    } else {
      setCategoryId(cid);
      setOpen(true);
      props.setSelected(cid);
    }
  };
  const showCategoryList = () => {
    return listCategory.map((item) => {
      return (
        <>
          <div
            style={{
              boxShadow:
                "0 7px 15px 0 rgba(0, 0, 0, .13), 0 1px 4px 0 rgba(0, 0, 0, .11)",
              margin: 8,
              padding: 5,
              borderRadius: 10,
              width: 90,
              display: "flex",
              position: "relative",
              alignItems: "center",
              flexDirection: "column",
              cursor: "pointer",
              fontFamily: "kanit",
              fontWeight: "bold",
            }}
            onClick={() => handleFoodListDialog(item.categoryid)}
          >
            {props.getSelected == item.categoryid ? (
              // <div>
              <CheckCircleOutlineIcon
                style={{
                  color: "#44bd32",
                  position: "absolute",
                  zIndex: 10,
                  right: 10,
                  top: 10,
                  fontSize: 20,
                }}
              />
            ) : (
              // </div>
              ""
            )}
            <Avatar
              alt={item.categoryname}
              src={`${serverURL}/images/${item.icon}`}
              sx={{ width: 50, height: 50 }}
            />
            <div style={{ fontSize: 12 }}>{item.categoryname}</div>
          </div>
        </>
      );
    });
  };

  const gotoNext = () => {
    sliderRef.current.slickNext();
  };
  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {listCategory.length > 7 ? (
          <div
            style={{
              width: "92%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: 0 }} onClick={() => gotoPrev()}>
              <ChevronLeftIcon style={{ fontSize: 40 }} />
            </div>
            <div
              style={{
                width: "100%",
              }}
            >
              {props.tableNo != "" && (
                <Slider {...settings} ref={sliderRef}>
                  {showCategoryList()}
                </Slider>
              )}
            </div>
            <div style={{ marginRight: 0 }} onClick={() => gotoNext()}>
              <ChevronRightIcon style={{ fontSize: 40 }} />
            </div>
          </div>
        ) : (
          showCategoryList()
        )}
      </div>
      {open && (
        <>
          <FoodComponent
            categoryid={categoryId}
            tableNo={props.tableNo}
            floorNo={props.floorNo}
            setOpen={setOpen}
            getTakeAndHome={props.getTakeAndHome}
            setTakeAndHome={props.setTakeAndHome}
            open={open}
            refresh={props.refresh}
            setRefresh={props.setRefresh}
          />
        </>
      )}
      {/* <FormControl>
       
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          defaultValue={getTakeAndHome}
        >
          <FormControlLabel
            value="Home"
            control={<Radio size="small" />}
            label="Home"
            onChange={(event) => {
              setTakeAndHome(event.target.value);
              // props.setFloorNo("");
              // props.setTableNo("");
              // props.setSelectedFloor(-1);
              // props.setSelectedTable(-1);
            }}
          />
          <FormControlLabel
            value="TakeAway"
            control={<Radio size="small" />}
            label="Take & Away"
            onChange={(event) => {
              setTakeAndHome(event.target.value);
              // props.setFloorNo("");
              // props.setTableNo("");
              // props.setSelectedFloor(-1);
              // props.setSelectedTable(-1);
            }}
          />
        </RadioGroup>
      </FormControl> */}
    </Box>
  );
}
