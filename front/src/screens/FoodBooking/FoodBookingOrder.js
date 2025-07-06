import { useEffect, useState } from "react";
import {
  TextField,
  Grid,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useStyles } from "./FoodBookingCss";
import { getData, postData } from "../../services/FetchNodeServices";
import TableComponent from "../../components/TableComponent/TableComponent";
import CategoryComponent from "../../components/CategoryComponent/CategoryComponent";
import TableCart from "../../components/TableCart/TableCart";
import { serverURL } from "../../services/FetchNodeServices";

export default function FoodBookingOrder(props) {
  const classes = useStyles();
  var admin = JSON.parse(localStorage.getItem("ADMIN"));

  const [currentDate, setCurrentDate] = useState("");
  const [waiter, setWaiter] = useState([]);
  const [waiterId, setWaiterId] = useState("");
  const [waiterName, setWaiterName] = useState("");
  const [floorNo, setFloorNo] = useState("");
  const [tableNo, setTableNo] = useState("");
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
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField label="Current Date" value={currentDate} />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
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
            xs={12}
            style={{
              color: "#2C3A47",
              textAlign: "right",
              fontFamily: "kanit",
              fontWeight: "bold",
              fontSize: 36,
            }}
          >
            {floorNo} {tableNo.length != 0 ? <>Table {tableNo}</> : <></>}
          </Grid>
        </Grid>
      </div>

      <div className={classes.box}>
        <Grid container space={1}>
          <Grid item xs={12} sm={12} md={12}>
            <TableCart
              waiterName={waiterName}
              tableNo={`#${floorNo}${tableNo}`}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
