import { mainColors } from "../../assets/Styles";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexDirection : "column",
    boxSizing: "border-box",
    height: "95vh",
    width: "38rem",
    backgroundColor: mainColors.CARD_COLOR,
    color: "#FEFEFE",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    overflow :'auto',

  },
  eventImage: {
    maxHeight: "30vh",
    minHeight : "30vh",
    border: "1px solid black",
  },

  title: {
    margin: "0.5rem",
  },

  tabs: {
      backgroundColor: "#000303",
  },

}));
