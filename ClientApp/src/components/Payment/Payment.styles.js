import { mainColors } from "../../assets/Styles";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    width: 600,
    height: 200,
    backgroundColor: mainColors.BACKGROUND_COLOR,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  },
  card: {
    backgroundColor: "#FEFEFE",
    height: "3rem",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
}));

export const cardElementOptions = {
  style: {
    base: {
      backgroundColor: "#FEFEFE",
      color: "#0000FF",
    },
    invalid: {},
  },
  hidePostalCode : true,
};
