import React, { useState, createRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DialogTitle from "@mui/material/DialogTitle";
import CheckIcon from "@mui/icons-material/Check";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Slider from "react-slick";
import { Grid } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & {
//     children: React.ReactElement<any, any>,
//   },
//   ref: React.Ref<unknown>
// ) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

export default function Career() {
  const [open, setOpen] = React.useState(false);
  const [getIndex, setIndex] = React.useState("");
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  var sliderRef = createRef();

  var settings = {
    // centerMode: true,
    dots: false,
    infinite: false,
    arrows: false,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: (oldIndex, newIndex, current, next) => {
      switch (newIndex) {
        case 0:
          setIndex(0);
          break;
        case 1:
          setIndex(1);
          break;
        case 2:
          setIndex(2);
          break;
        case 3:
          setIndex(3);
          break;
        case 4:
          setIndex(4);
          break;
        case 5:
          setIndex(5);
          break;
        case 6:
          setIndex(6);
          break;
        default:
        // setOldSlide(current);
        // setActiveSlide(next);
      }
      setOldSlide(current);
      setActiveSlide(next);
    },
    // beforeChange: (current, next) => {
    //   setOldSlide(current);
    //   setActiveSlide(next);
    // },
    afterChange: (current) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false,
          infinite: false,
          arrows: false,
          autoplay: false,
          speed: 500,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          infinite: false,
          arrows: false,
          autoplay: false,
          speed: 500,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 900,
        settings: {
          dots: false,
          infinite: false,
          arrows: false,
          autoplay: false,
          speed: 500,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          infinite: false,
          arrows: false,
          autoplay: false,
          speed: 500,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: false,
          arrows: false,
          autoplay: false,
          speed: 500,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  const images = [
    {
      title: "Order Management",
      images: "./images/social/frozen.png",
      one: "Table Service- Manage orders for dine-in customers by assigning tables, splitting bills, and tracking order progress.",
      two: "Takeout and Delivery- Process orders for customers who prefer takeout or delivery, including address management and delivery tracking.",
    },
    {
      title: "Menu Management",
      images: "./images/social/thick-shake.png",
      one: "Easily update and customize your menu, including pricing, descriptions, and images.",
      two: "Add modifiers for menu items, allowing for customer-specific modifications or substitutions.",
    },
    {
      title: "Inventory Management",
      images: "./images/social/nic.png",
      one: "Automatically update inventory levels as items are sold, helping to prevent overordering or running out of popular dishes.",
      two: "Maintain a list of preferred suppliers for easy reordering.",
    },
    {
      title: "Table Reservation",
      images: "./images/social/giani.png",
      one: "Accept and manage reservations, assign tables, and send confirmation messages to customers.",
      two: "",
    },
    {
      title: "Billing & Payment",
      images: "./images/social/cafe.png",
      one: "Split Bills- Divide a check among multiple customers and accept various payment methods, including cash, credit cards, mobile payments, and even split payments.",
      two: "Automatic Tax Calculation- Calculate taxes and gratuities based on the order and local regulations.",
    },
    {
      title: "Reporting & Analytics",
      images: "./images/social/frankie.png",
      one: "Sales Reports- Generate daily, weekly, and monthly sales reports, helping you track performance and make data-driven decisions.",
      two: "Inventory Reports- Monitor inventory levels, sales trends, and waste to optimize your supply chain.",
    },
    {
      title: "Employee Management",
      images: "./images/social/frankie.png",
      one: "Access Control- Assign different user roles and permissions to control access to sensitive information.",
      two: "Time and Attendance- Record employee work hours and manage schedules.",
    },
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const gotoNext = () => {
    sliderRef.current.slickNext();
  };
  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  const showTab = () => {
    return images.map((item, index) => {
      return (
        <>
          {/* <Button variant="contained">{item.title}</Button> */}
          <div
            variant={index != getIndex ? "outlined" : "contained"}
            onClick={() => sliderRef.current.slickGoTo(index)}
          >
            <div
              className={
                index == getIndex &&
                "font-weight-500 colorwhite bg border-radius-10 "
              }
              style={{
                padding: 10,
                margin: 10,
                fontWeight: 500,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              {item.title}
            </div>
          </div>
        </>
      );
    });
  };

  const showCategoryLists = () => {
    return images.map((item) => {
      return (
        <>
          <Grid container spacing={0}>
            <Grid
              item
              xs={12}
              sm={6}
              className="p2rem"
              // data-aos="fade-right"
              // // data-aos-easing="fade-right"
              // data-aos-duration="1500"
            >
              <div className="font-weight-700 pl-0-5em pb-1em text-grediant font40">
                {item.title}
              </div>
              <div
                className="font16 font-weight-600 text-color-black"
                style={{ display: "flex" }}
              >
                {item.one != "" && (
                  <>
                    <CheckIcon style={{ fontSize: 20 }} className="pl-0-5em" />{" "}
                    {item.one}
                  </>
                )}
              </div>
              <div
                className="font16 pt-0-5em font-weight-600 text-color-black"
                style={{ display: "flex" }}
              >
                {item.two != "" && (
                  <>
                    <CheckIcon className="pl-0-5em" style={{ fontSize: 20 }} />{" "}
                    {item.two}
                  </>
                )}
              </div>
              <div id="container" className="pt-0-5em pt-1em">
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Learn More</span>
                </button>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              className="p2rem"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src="./images/images.jpg"
                width="100%"
                // className="imgh"
                style={{ alignSelf: "center" }}
              />
            </Grid>
          </Grid>
        </>
      );
    });
  };
  return (
    <>
      <div
        className="container mt3rem p2rem"
        style={{ backgroundColor: "#211E1E", color: "#fff" }}
      >
        <div className="row mt3rem">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} style={{ display: "grid" }}>
              <div
              // elevation={0}
              // className="divhover border-radius-10 mt3rem mb3rem"
              // style={{
              //   background: "#dee0e5",
              //   display: "grid",
              // }}
              // data-aos="fade-left"
              // data-aos-easing="fade-left"
              // data-aos-duration="1500"
              >
                <Grid container spacing={0}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    data-aos="fade-down"
                    data-aos-easing="fade-down"
                    data-aos-duration="1000"
                  >
                    <div className="font-weight-900 pb-1em p3rem text-grediant2 font50">
                      ENJOY SIMPLE, BEST-IN-CLASS RATES.
                    </div>
                    <div className="font20 font-weight-500  p3rem text-color-white">
                      Skip complicated, unpredictable pricing models and get the
                      lowest processing fees around — or choose Cash Discount to
                      eliminate processing fees altogether.
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    style={{ display: "flex", justifyContent: "center" }}
                    data-aos="fade-up"
                    data-aos-easing="fade-up"
                    data-aos-duration="1000"
                  >
                    <img
                      src="./images/social/pos-3.png"
                      width="80%"
                      // className="imgh"
                      style={{ alignSelf: "center" }}
                    />
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="container">
        <div className="font40 text-grediant mt1rem p1rem pl-0-5em pb-0-5em font-weight-600 text-center">
          A restaurant POS software that offers eveything
        </div>
        <div className="font20 mt1rem mb1rem pl-2em font-weight-600 text-center text-color-grey">
          An online Point of Sale (POS) system designed for restaurants is a
          critical tool for managing the front-of-house and back-of-house
          operations efficiently. Below is a detailed description of the key
          features typically found in a modern online POS system for restaurants
        </div>

        <div
          style={{
            width: "92%",
            display: "flex",
            alignItems: "center",
          }}
          className="mt1rem"
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                // boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                // padding: 5,
              }}
              className="border-radius-10 box-shadow"
            >
              {showTab()}
            </div>
            <Slider {...settings} ref={sliderRef} className="mt1rem">
              {showCategoryLists()}
            </Slider>
          </div>
        </div>
        {/* <div
          style={{
            width: "92%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ChevronLeftIcon
            style={{
              fontSize: 32,
              border: "1px solid #211E1E",
              cursor: "pointer",
              margin: 10,
            }}
            onClick={() => gotoPrev()}
          />
          <ChevronRightIcon
            style={{
              fontSize: 32,
              border: "1px solid #211E1E",
              cursor: "pointer",
              margin: 10,
            }}
            onClick={() => gotoNext()}
          />
        </div> */}
      </div>
    </>
  );
}
