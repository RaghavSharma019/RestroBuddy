import { useEffect, useState } from "react";
import {
  TextField,
  Grid,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useStyles } from "./FoodBookingCss";
import { getData, postData } from "../../services/FetchNodeServices";
import TableComponent from "../../components/TableComponent/TableComponent";
import CategoryComponent from "../../components/CategoryComponent/CategoryComponent";
import TableCart from "../../components/TableCart/TableCart";
import { serverURL } from "../../services/FetchNodeServices";
import { useDispatch } from "react-redux";

export default function FoodBooking(props) {
  const classes = useStyles();
  var admin = JSON.parse(localStorage.getItem("ADMIN"));
  var dispatch = useDispatch();

  const [currentDate, setCurrentDate] = useState("");
  const [waiter, setWaiter] = useState([]);
  const [waiterId, setWaiterId] = useState("");
  const [waiterName, setWaiterName] = useState("");
  const [floorNo, setFloorNo] = useState("");
  const [getTakeAndHome, setTakeAndHome] = useState("Home");
  const [tableNo, setTableNo] = useState("");
  const [getSelected, setSelected] = useState(0);
  const [selectedFloor, setSelectedFloor] = useState(-1);
  const [selectedTable, setSelectedTable] = useState(-1);
  const [refresh, setRefresh] = useState(false);

  const getCurrentDate = () => {
    var date = new Date();
    var cd =
      date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    return cd;
  };
  const getCurrentTime = () => {
    var time = new Date();
    var ct = time.getHours() + ":" + time.getMinutes();
    return ct;
  };
  const fetchAllWaiter = async () => {
    const result = await postData("waiter/fetch_all_waiter", {
      restaurantid: admin.restaurantid,
    });
    setWaiter(result.data);
  };

  useEffect(function () {
    setCurrentDate(getCurrentDate() + " " + getCurrentTime());
    fetchAllWaiter();
  }, []);

  const fillWaiter = () => {
    return waiter.map((item) => {
      return <MenuItem value={item.waiterid}>{item.waitername}</MenuItem>;
    });
  };
  const handleWaiter = (event, value) => {
    // console.log("VVVVVALLLLUE",value.props.children)
    setWaiterName(value.props.children);
    setWaiterId(event.target.value);
  };
  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8}>
            <div className={classes.box2}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <TextField
                    label="Current Date"
                    value={currentDate}
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Waiter Name</InputLabel>
                    <Select
                      label={"Category Name"}
                      onChange={handleWaiter}
                      value={waiterId}
                    >
                      <MenuItem>-Select Waiter-</MenuItem>
                      {fillWaiter()}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{
                    color: "#2C3A47",
                    textAlign: "right",
                    fontFamily: "kanit",
                    fontWeight: "bold",
                    fontSize: 24,
                  }}
                >
                  {floorNo}&nbsp;{" "}
                  {tableNo.length != 0 ? <>Table {tableNo}</> : <></>}
                </Grid>
              </Grid>
            </div>
            {/* <Grid container spacing={0}> */}
            <div className={classes.box2}>
              <Grid item xs={12} sm={12} md={12}>
                <CategoryComponent
                  tableNo={tableNo}
                  getSelected={getSelected}
                  setSelected={setSelected}
                  // setSelectedFloor={setSelectedFloor}
                  // selectedFloor={selectedFloor}
                  // setSelectedTable={setSelectedTable}
                  // selectedTable={selectedTable}
                  setTakeAndHome={setTakeAndHome}
                  getTakeAndHome={getTakeAndHome}
                  floorNo={floorNo}
                  refresh={refresh}
                  setRefresh={setRefresh}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginBottom: 10,
                  }}
                >
                  <FormControl>
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
                          setFloorNo("");
                          setTableNo("");
                          setSelectedFloor(-1);
                          setSelectedTable(-1);
                          dispatch({
                            type: "DEL_ORDER",
                            payload: [`#${floorNo}${tableNo}`],
                          });
                        }}
                      />
                      <FormControlLabel
                        value="TakeAway"
                        control={<Radio size="small" />}
                        label="Take & Away"
                        onChange={(event) => {
                          setTakeAndHome(event.target.value);
                          setFloorNo("");
                          setTableNo("");
                          setSelectedFloor(-1);
                          setSelectedTable(-1);
                          dispatch({
                            type: "DEL_ORDER",
                            payload: [`Home`],
                          });
                        }}
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <TableComponent
                  floorNo={floorNo}
                  setFloorNo={setFloorNo}
                  selectedFloor={selectedFloor}
                  setSelectedFloor={setSelectedFloor}
                  setSelectedTable={setSelectedTable}
                  selectedTable={selectedTable}
                  tableNo={tableNo}
                  setTableNo={setTableNo}
                  setTakeAndHome={setTakeAndHome}
                  getTakeAndHome={getTakeAndHome}
                />
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} style={{ paddingLeft: 0 }}>
            <div className={classes.box2} style={{ height: "100%" }}>
              <TableCart
                waiterName={waiterName}
                floorNo={floorNo}
                tableNo={`#${floorNo}${tableNo}`}
                setSelected={setSelected}
                setSelectedFloor={setSelectedFloor}
                selectedTable={selectedTable}
                setSelectedTable={setSelectedTable}
                setTakeAndHome={setTakeAndHome}
                getTakeAndHome={getTakeAndHome}
                refresh={refresh}
                setFloorNo={setFloorNo}
                setTableNo={setTableNo}
                setRefresh={setRefresh}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
