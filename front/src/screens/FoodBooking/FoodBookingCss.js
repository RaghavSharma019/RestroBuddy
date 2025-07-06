import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    width: "auto",
    height: "auto",
    background: "#dfe4ea",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // flexDirection: "row",
    padding: 10,
  },
  box: {
    width: "100%",
    height: "auto",
    borderRadius: 10,
    background: "#fff",
    padding: 10,
    marginBottom: 10,
    boxShadow: "0 0 5px #aaa",
  },
  box2: {
    width: "98%",
    height: "auto",
    borderRadius: 10,
    background: "#fff",
    padding: 10,
    marginBottom: 10,
    boxShadow: "0 0 3px #aaa",
  },
  tablebox: {
    width: "80%",
    height: "auto",
    borderRadius: 10,
    background: "#fff",
    padding: 15,
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
