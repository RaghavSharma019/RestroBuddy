var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var jwt = require("jsonwebtoken");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var statecityRouter = require("./routes/statecity");
var restaurantRouter = require("./routes/restaurant");
var superAdminRouter = require("./routes/superadmin");
const categoryRouter = require("./routes/category");
const fooditemRouter = require("./routes/fooditem");
const tablebookingRouter = require("./routes/tablebooking");
const waiterRouter = require("./routes/waiter");
const contactRouter = require("./routes/contact");

const adminRouter = require("./routes/admin");
const waitertableRouter = require("./routes/waitertable");
const billingRouter = require("./routes/billing");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use("/superadmin", superAdminRouter);
app.use("/admin", adminRouter);
app.use("/contact", contactRouter);

app.use((req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  jwt.verify(token, "shhhhhh", function (err, decoded) {
    console.log(err, decoded);
    if (decoded) {
      next();
    } else {
      res.status(401).json({ status: false, message: "Invalid token" });
    }
  });
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/statecity", statecityRouter);
app.use("/restaurants", restaurantRouter);

app.use("/category", categoryRouter);
app.use("/fooditem", fooditemRouter);
app.use("/tablebooking", tablebookingRouter);
app.use("/waiter", waiterRouter);
app.use("/billing", billingRouter);
app.use("/waitertable", waitertableRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// module.exports = app;

var debug = require("debug")(":server");
var http = require("http");

var port = normalizePort(process.env.PORT || "5000");
app.set("port", port);

var server = http.createServer(app);

const tempserver = server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

const io = require("socket.io")(tempserver, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", function (clientOrder) {
  console.log("connection created");
  clientOrder.on("order", (e) => {
    console.log(e);
  });
  clientOrder.on("neworder", (data) => {
    console.log("DATA------", data);
    io.emit("ordernotification", data);
  });
  clientOrder.on("disconnect", function () {
    console.log("user disconnected");
  });
});

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}
