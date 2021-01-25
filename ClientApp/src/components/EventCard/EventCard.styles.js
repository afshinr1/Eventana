import { makeStyles } from "@material-ui/core";
import { mainColors } from "../../assets/Styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: mainColors.CARD_COLOR,
        minHeight: 375,
      },
      media: {
        height: 140,
      },
      area: {
        height: 375,
      },
}));
