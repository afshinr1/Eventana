import { makeStyles } from "@material-ui/core/styles";
import { mainColors } from "../../../assets/Styles";

export const useStyles = makeStyles((theme) => ({
    //COMMENT STYLES START
    commentContainer : {
        backgroundColor: mainColors.BACKGROUND_COLOR,
        margin: '1rem 0',
        position: 'relative',
    },
    commentHeader: {
        margin: '1rem'
    },
    headerText: {
        marginLeft: theme.spacing(2)
    },
    commentCreate: {
        color: mainColors.TEXT_SECONDARY
    },
    descriptionContainer: {
        marginLeft: '1rem',
        marginBottom: '1rem',
    },
    iconBtn :{
        position: 'absolute',
        right: "0.5rem",
        top: '0.5rem',
    }
    //COMMENT STYLES END
}));
