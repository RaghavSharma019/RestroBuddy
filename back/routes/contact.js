var express = require("express");
var router = express.Router();
var pool = require("./pool");

/* GET users listing. */
router.post("/create", function (req, res, next) {
  // console.log("nn", req.body);
  pool.query(
    "insert into contact (name,mobile,email,query) values (?,?,?,?)",
    [req.body.name, req.body.mobile, req.body.email, req.body.query],
    function (error, result) {
      if (error) {
        console.log("error", error);
        return res
          .status(500)
          .json({ status: false, message: error.sqlMessage });
      } else {
        // console.log("result", error);
        return res.status(200).json({
          status: true,
          message: "Add Query Successfully",
          data: result,
        });
      }
    }
  );
});

module.exports = router;
