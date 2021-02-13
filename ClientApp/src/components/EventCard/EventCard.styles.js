import { makeStyles } from "@material-ui/core";
import { mainColors } from "../../assets/Styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: mainColors.CARD_COLOR,
        minWidth : 460,
        minHeight: 375,
      },
      media: {
        height: 200,
      },
    
      // area: {
      //   height: "90%",
      // },
}));
