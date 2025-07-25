import { useState, useEffect } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export default function Plusminus(props) {
  const [value, setValue] = useState(0);
  useEffect(
    function () {
      setValue(props.qty);
    },
    [props]
  );
  const handlePlus = () => {
    var c = value + 1;
    setValue(c);
    props.onChange(c);
  };
  const handleMinus = () => {
    if (value > 0) {
      var c = value - 1;
      setValue(c);
      props.onChange(c);
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "row", width: 50 }}>
      <div
        onClick={handlePlus}
        style={{
          width: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        <AddIcon style={{ fontSize: 15 }} />
      </div>
      <div
        style={{
          width: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {value}
      </div>
      <div
        onClick={handleMinus}
        style={{
          width: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {value == 1 ? (
          <DeleteOutlineOutlinedIcon style={{ fontSize: 15, color: "red" }} />
        ) : (
          <RemoveIcon style={{ fontSize: 15 }} />
        )}
      </div>
    </div>
  );
}
