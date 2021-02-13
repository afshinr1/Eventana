import { mainColors } from "../../assets/Styles";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    outerContainer : {
        width : '90%',
        margin : "0 auto",
    },
    btn : {
        minWidth: '30%',
    },
    grey : {
        color : '#82838E'
      },
      capitalize: {
          textTransform: "capitalize"
      },
      margin: {
        marginTop : theme.spacing(1),
        marginBottom : theme.spacing(2),
      },
      chip: {
          marginRight : theme.spacing(1),
      }
}));
