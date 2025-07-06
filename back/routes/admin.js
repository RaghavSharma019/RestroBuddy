const express = require("express");
const router = express.Router();
const pool = require("./pool");
const config = require("../nodemon.json");
const jwt = require("jsonwebtoken");

router.post("/checklogin", function (req, res, next) {
  console.log(req.body);
  pool.query(
    "select * from restaurants where emailid=? and password=?",
    [req.body.emailid, req.body.password],
    function (error, result) {
      if (error) {
        res
          .status(200)
          .json({ status: false, data: [], message: "Server Error...." });
      } else {
        if (result.length == 1) {
          var token = jwt.sign({ data: result[0] }, "shhhhhh");
          res.status(200).json({
            status: true,
            data: result[0],
            message: "Login Successful....",
            token,
          });
        } else {
          res.status(200).json({
            status: false,
            data: [],
            message: "Invalid userid/password",
          });
        }
      }
    }
  );
});

router.post("/EmpCheckLogin", function (req, res, next) {
  console.log(req.body);
  pool.query(
    "SELECT E.*,R.restaurantname, R.ownername, R.filelogo, R.status as resstatus FROM employee E,restaurants R where (E.email=? or E.mobile=?) and E.password=? and R.restaurantid=E.restaurantid;",
    [req.body.emailid, req.body.emailid, req.body.password],
    function (error, result) {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .json({ status: false, message: error.sqlMessage });
      } else {
        const token = jwt.sign({ data: result[0] }, "shhhhhh", {
          expiresIn: "12h",
        });
        if (result.length == 0) {
          return res.status(200).json({
            status: false,
            message: "Invalid Id or Password!!!",
          });
          // return res.status(500).json(null);
        } else {
          console.log(result[0]);
          if (result[0].resstatus != 1) {
            return res.status(200).json({
              status: false,
              resname: result[0].restaurantname,
              message: "Restaurant account is deactivated",
            });
          } else if (result[0].status != 1) {
            return res.status(200).json({
              status: false,
              resname: result[0].restaurantname,
              message: "Your account is deactivated",
            });
          } else {
            return res.status(200).json({
              status: true,
              message: "Employee Login Successfully.....",
              data: result[0],
              resname: result[0].restaurantname,
              token,
            });
          }
        }
      }
    }
  );
});

router.post("/AddEmployee", function (req, res, next) {
  pool.query(
    "insert into employee(restaurantid,name,email,mobile,role,status,password) values(?,?,?,?,?,?,?)",
    [
      req.body.restaurantid,
      req.body.name,
      req.body.email,
      req.body.mobile,
      req.body.role,
      req.body.status,
      req.body.password,
    ],
    function (error, result) {
      if (error) {
        return res
          .status(500)
          .json({ status: false, message: error.sqlMessage, result: false });
      } else {
        return res.status(200).json({
          status: true,
          message: "User Created...",
          result: true,
        });
      }
    }
  );
});
router.post("/EditEmployee", function (req, res, next) {
  pool.query(
    "update employee set restaurantid=?,name=?,email=?,mobile=?,role=?,status=? where restaurantid=? and employee_id=?",
    [
      req.body.restaurantid,
      req.body.name,
      req.body.email,
      req.body.mobile,
      req.body.role,
      req.body.status,
      req.body.restaurantid,
      req.body.employeeid,
    ],
    function (error, result) {
      if (error) {
        return res
          .status(500)
          .json({ status: false, message: error.sqlMessage, result: false });
      } else {
        return res.status(200).json({
          status: true,
          message: "User Created...",
          result: true,
        });
      }
    }
  );
});

router.post("/displayAll", function (req, res, next) {
  pool.query(
    "select * from employee where restaurantid=?",
    [req.body.restaurantid],
    function (error, result) {
      if (error) {
        return res
          .status(500)
          .json({ status: false, message: error.sqlMessage });
      } else {
        return res.status(200).json({
          status: true,
          message: "All Employee Found...",
          data: result,
        });
      }
    }
  );
});

router.post("/DisplayByEmployeeId", function (req, res, next) {
  pool.query(
    "select * from employee where employee_id=? and restaurantid=?",
    [req.body.employeeid, req.body.restaurantid],
    function (error, result) {
      if (error) {
        return res
          .status(500)
          .json({ status: false, message: error.sqlMessage });
      } else {
        if (result.length == 0) return res.status(500).json(null);
        else
          return res.status(200).json({
            status: true,
            message: "Employee Detail Found...",
            data: result[0],
          });
      }
    }
  );
});

router.post("/EmployeeDelete", function (req, res, next) {
  pool.query(
    "delete from employee where restaurantid=? and employee_id=?",
    [req.body.restaurantid, req.body.employeeid],
    function (error, result) {
      if (error) {
        return res
          .status(500)
          .json({ status: false, message: error.sqlMessage, result: false });
      } else {
        return res.status(200).json({
          status: true,
          message: "Employee Deleted....",
          result: true,
        });
      }
    }
  );
});

module.exports = router;
