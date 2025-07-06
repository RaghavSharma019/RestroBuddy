var express = require("express");
var router = express.Router();
const pool = require("./pool");
const upload = require("./multer");

router.post("/bill_submit", function (req, res, next) {
  pool.query(
    "insert into billing(billtime, billdate, tableno, server, fssai, cnote, gst, billingdetails, totalamount, customername, mobileno,restaurantid)values(?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      req.body.billtime,
      req.body.billdate,
      req.body.tableno,
      req.body.server,
      req.body.fssai,
      req.body.cnote,
      req.body.gst,
      req.body.billingdetails,
      req.body.totalamount,
      req.body.customername,
      req.body.mobileno,
      req.body.restaurantid,
    ],
    function (error, result) {
      if (error) {
        res.status(500).json({ status: false, message: "Database Error" });
      } else {
        res
          .status(200)
          .json({ status: true, message: "Bill Submitted Successfully" });
      }
    }
  );
});

router.post("/fetch_total_order", function (req, res) {
  pool.query(
    "select * from billing where restaurantid=? order by billno desc limit 1;",
    [req.body.restaurantid],
    function (error, result) {
      if (error) {
        res
          .status(500)
          .json({ status: false, message: "Database Error", data: [] });
      } else {
        res.status(200).json({
          status: true,
          data: result[0],
          message: "Get Bill No",
        });
      }
    }
  );
});

router.post("/fetch_total_dashboard", function (req, res) {
  pool.query(
    "select sum(totalamount) as totalbill,count(*) as totalorder from billing where restaurantid=?",
    [req.body.restaurantid],
    function (error, result) {
      if (error) {
        res
          .status(500)
          .json({ status: false, message: "Database Error", data: [] });
      } else {
        res.status(200).json({
          status: true,
          data: result[0],
          message: "Fetch Total Amount & Total Order",
        });
      }
    }
  );
});

router.post("/order_update", function (req, res) {
  pool.query(
    "update billing set order_status=? where restaurantid=? and billno=?",
    [req.body.order_status, req.body.restaurantid, req.body.billno],
    function (error, result) {
      if (error) {
        res
          .status(500)
          .json({ status: false, message: "Database Error", data: [] });
      } else {
        res.status(200).json({
          status: true,
          data: result[0],
          message: "Order Status Update...",
        });
      }
    }
  );
});

router.post("/fetch_total_customer", function (req, res) {
  pool.query(
    "select count(*) as mobileno from billing where restaurantid=? group by mobileno",
    [req.body.restaurantid],
    function (error, result) {
      if (error) {
        res
          .status(500)
          .json({ status: false, message: "Database Error", data: [] });
      } else {
        res.status(200).json({
          status: true,
          data: result[0],
          message: "Fetch Total Amount & Total Order",
        });
      }
    }
  );
});

router.post("/fetch_total", function (req, res) {
  pool.query(
    "select *,(select sum(totalamount) from billing where billdate between ? and ? and restaurantid=?) as totalbill,(select count(*) from billing where billdate between ? and ? and restaurantid=?) as totalorder from billing where billdate between ? and ? and restaurantid=?",
    [
      req.body.fromdate,
      req.body.tilldate,
      req.body.restaurantid,
      req.body.fromdate,
      req.body.tilldate,
      req.body.restaurantid,
      req.body.fromdate,
      req.body.tilldate,
      req.body.restaurantid,
    ],
    function (error, result) {
      if (error) {
        res
          .status(500)
          .json({ status: false, message: "Database Error", data: [] });
      } else {
        // console.log(
        //   "bbbbb",
        //   result
        //     .reduce(
        //       (accumulator, currentValue) => accumulator.concat(currentValue),
        //       []
        //     )
        //     .filter((item) => item.order_status).length
        // );
        res.status(200).json({
          status: true,
          data: result,
          message: "bills Get Successfully",
        });
      }
    }
  );
});

router.post("/fetch_filtered_bill", function (req, res) {
  var sql = "";
  if (req.body.fromdate == "" && req.body.tilldate == "") {
    sql = `select * from billing where billdate restaurantid=${req.body.restaurantid} order by billno desc`;
  } else {
    sql = `select * from billing where billdate between "${req.body.fromdate}" and "${req.body.tilldate}" and restaurantid=${req.body.restaurantid} order by billno desc`;
  }
  pool.query(
    sql,
    // [req.body.fromdate, req.body.tilldate, req.body.restaurantid],
    function (error, result) {
      if (error) {
        console.log(error);
        res
          .status(500)
          .json({ status: false, message: "Database Error", data: [] });
      } else {
        res.status(200).json({
          status: true,
          data: result,
          message: "bills Get Successfully",
        });
      }
    }
  );
});

router.post("/fetch_order_filtered_bill", function (req, res) {
  var sql = "";
  if (req.body.orderstatus == "") {
    console.log("query 1", req.body);
    sql = `select * from billing where billdate between "${req.body.fromdate}" and "${req.body.tilldate}" and restaurantid=${req.body.restaurantid} order by billno desc`;
  } else {
    console.log("query 2", req.body);
    sql = `select * from billing where billdate between "${req.body.fromdate}" and "${req.body.tilldate}" and order_status="${req.body.orderstatus}" and restaurantid=${req.body.restaurantid} order by billno desc`;
  }
  pool.query(sql, function (error, result) {
    if (error) {
      console.log(error);
      res
        .status(500)
        .json({ status: false, message: "Database Error", data: [] });
    } else {
      res.status(200).json({
        status: true,
        data: result,
        message: "bills Get Successfully",
      });
    }
  });
});

router.post("/fetch_customer_bill", function (req, res) {
  pool.query(
    "select * from billing where billno=? and restaurantid=?",
    [req.body.billno, req.body.restaurantid],
    function (error, result) {
      if (error) {
        res
          .status(500)
          .json({ status: false, message: "Database Error", data: [] });
      } else {
        res.status(200).json({
          status: true,
          data: result,
          message: "Customer Bill Show",
        });
      }
    }
  );
});

router.post("/fetch_totalsale_month", function (req, res) {
  pool.query(
    "select month(billdate) as month, sum(totalamount) as totalbill from billing group by month(billdate) order by billdate",
    function (error, result) {
      if (error) {
        res
          .status(500)
          .json({ status: false, message: "Database Error", data: [] });
      } else {
        res.status(200).json({
          status: true,
          data: result,
          message: "bills Get Successfully",
        });
      }
    }
  );
});

router.post("/fetch_todays_total", function (req, res) {
  pool.query(
    "select sum(totalamount) as totalbill,count(*) as todayorder from billing where billdate=? and restaurantid=?",
    [req.body.todaysdate, req.body.restaurantid],
    function (error, result) {
      if (error) {
        res
          .status(500)
          .json({ status: false, message: "Database Error", data: [] });
      } else {
        res.status(200).json({
          status: true,
          data: result[0],
          message: "bills Get Successfully",
        });
      }
    }
  );
});
module.exports = router;
