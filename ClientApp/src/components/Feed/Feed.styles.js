import { mainColors } from "../../assets/Styles";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    width: "90%",
    margin: "0 auto",
  },
  //INPUT BOX STYLES START
  inputBox: {
    backgroundColor: "#1E1E2F",
    width: "100%",
  },
  inputHeader: {
    margin: theme.spacing(1),
  },
  submitPostText: {
    marginLeft: theme.spacing(2),
  },
  inputTextField: {
    width: "100%",
  },

  actionBtn: {
      margin : theme.spacing(1),
  }
  //INPUT BOX STYLES END
}));
