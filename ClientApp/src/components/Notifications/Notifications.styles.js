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
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    position: "relative",
    height: "95vh",
    width: "27rem",
    backgroundColor: mainColors.CARD_COLOR,
    color: "#FEFEFE",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    overflow: "auto",
  },
  header: {
    textAlign: "center",
    margin: theme.spacing(2),
  },

  notifCardContainer: {
    width: "90%",
    margin: "0 auto",
    marginTop: "0.2rem",
    marginBottom: "0.2rem",
    backgroundColor: mainColors.BACKGROUND_COLOR,
  },
  cardInnerContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: "0.5rem",
    marginLeft: "1rem",
    marginBottom: "0.5rem",
  },
  notifTitle : {
    fontWeight: "800"
  },
  date: {
      color : mainColors.TEXT_SECONDARY
  },
  btn: {
      width: '3rem',
      margin: '0.5rem auto',
      padding: '0.3rem 1rem',
  }
}));
