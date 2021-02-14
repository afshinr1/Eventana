import { mainColors } from "../../assets/Styles";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconBtn: {
    position: "absolute",
    top: "5px",
    right: "5px",
    backgroundColor: "#1E1E2F",
    height: "1rem",
    width: "1rem",
    "&:hover": {
      backgroundColor: "#1E1E2F",
    },
  },
  container: {
    boxSizing: "border-box",
    height: "95vh",
    width: "38rem",
    backgroundColor: mainColors.CARD_COLOR,
    color: "#FEFEFE",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    position: 'relative'

  },

  title: {
    margin: "0.5rem",
    textTransform: "capitalize",
  },

  inputBase: {
      margin: '0.5rem',
      width: '90%',
  }
}));
