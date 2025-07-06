import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  rootDisplay: {
    width: "auto",
    height: "auto",
    // background: "#dfe4ea",
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 10,
  },
  boxDisplay: {
    width: "100%",
    height: "auto",
    borderRadius: 10,
    background: "#fff",
    padding: 10,
    marginBottom: 10,
    boxShadow: "0 0 5px #aaa",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
