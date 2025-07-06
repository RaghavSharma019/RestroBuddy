import React, { useEffect, useState } from "react";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import QrCodeOutlinedIcon from "@mui/icons-material/QrCodeOutlined";
import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Avatar from "@mui/material/Avatar";

import Slider from "react-slick";
import { FadeIn } from "react-slide-fade-in";
import "../../App.css";
import { Grid, Paper } from "@mui/material";
import { Diversity2Rounded } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { postData, serverURL } from "../../services/FetchNodeServices";

export default function Features() {
  var sliderRef = React.createRef();

  var settings = {
    // centerMode: true,
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false,
          infinite: true,
          arrows: false,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          slidesToShow: 6,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          infinite: true,
          arrows: false,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 900,
        settings: {
          dots: false,
          infinite: true,
          arrows: false,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          infinite: true,
          arrows: false,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          arrows: false,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  const image = [
    { images: "./images/social/mcdonalds-logo.png" },
    { images: "./images/social/social-logo.png" },
    { images: "./images/social/pvr-logo.png" },
    { images: "./images/social/blue-logo.png" },
    { images: "./images/social/Haldiram.png" },
    { images: "./images/social/drunken.png" },
    { images: "./images/social/biryani.png" },
    { images: "./images/social/burger.png" },
  ];
  const images = [
    { images: "./images/social/frozen.png" },
    { images: "./images/social/thick-shake.png" },
    { images: "./images/social/nic.png" },
    { images: "./images/social/giani.png" },
    { images: "./images/social/cafe.png" },
    { images: "./images/social/frankie.png" },
    { images: "./images/social/nirulas.png" },
    { images: "./images/social/mod.png" },
  ];

  const gotoNext = () => {
    sliderRef.current.slickNext();
  };
  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };
  const showCategoryList = () => {
    return image.map((item) => {
      return (
        <>
          <div
            style={{
              boxShadow:
                "0 7px 15px 0 rgba(0, 0, 0, .13), 0 1px 4px 0 rgba(0, 0, 0, .11)",
              margin: 10,
              padding: 10,
              borderRadius: 10,
              width: 120,
              display: "flex",
              position: "relative",
              alignItems: "center",
              flexDirection: "column",
              fontFamily: "kanit",
              fontWeight: "bold",
            }}
            // onClick={() => handleFoodListDialog(item.categoryid)}
          >
            <img
              alt={item.images}
              src={item.images}
              style={{ width: "100%", objectFit: "contain" }}
            />
          </div>
        </>
      );
    });
  };
  const showCategoryLists = () => {
    return images.map((item) => {
      return (
        <>
          <div
            style={{
              boxShadow:
                "0 7px 15px 0 rgba(0, 0, 0, .13), 0 1px 4px 0 rgba(0, 0, 0, .11)",
              margin: 10,
              padding: 10,
              borderRadius: 10,
              width: 120,
              display: "flex",
              position: "relative",
              alignItems: "center",
              flexDirection: "column",
              cursor: "pointer",
              fontFamily: "kanit",
              fontWeight: "bold",
            }}
            // onClick={() => handleFoodListDialog(item.categoryid)}
          >
            <img
              alt={item.images}
              src={item.images}
              style={{ width: "100%", objectFit: "contain" }}
            />
          </div>
        </>
      );
    });
  };
  return (
    <div className="container">
      <div
        className="font40 text-grediant mt1rem p1rem pl-0-5em pb-0-5em font-weight-600 text-center"
        data-aos="zoom-in"
        data-aos-easing="zoom-out"
        data-aos-duration="1500"
      >
        Trusted by leading businesses in India
      </div>
      {/* <div className="font24  pl-2em font-weight-600 text-center text-color-grey">
        Give us a try. There's nothing to install. No training manuals needed.
        No commitments.
      </div> */}

      <div
        style={{
          width: "92%",
          display: "flex",
          alignItems: "center",
        }}
        className="mt1rem"
      >
        {/* <div style={{ marginLeft: 0 }} onClick={() => gotoPrev()}>
          <ChevronLeftIcon style={{ fontSize: 40 }} />
        </div> */}
        <div
          style={{
            width: "100%",
          }}
        >
          <Slider {...settings} ref={sliderRef}>
            {showCategoryList()}
          </Slider>
          <Slider {...settings} ref={sliderRef}>
            {showCategoryLists()}
          </Slider>
        </div>
        {/* <div style={{ marginRight: 0 }} onClick={() => gotoNext()}>
          <ChevronRightIcon style={{ fontSize: 40 }} />
        </div> */}
      </div>
    </div>
  );
}
