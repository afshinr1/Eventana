import { mainColors } from "../../assets/Styles";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    boxSizing: "border-box",
    height: "95vh",
    width: "38rem",
    backgroundColor: mainColors.CARD_COLOR,
    color: "#FEFEFE",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
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
