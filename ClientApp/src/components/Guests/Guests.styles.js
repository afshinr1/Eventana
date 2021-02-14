import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
      width: '90%',
      marginTop : theme.spacing(3),
      margin : '0 auto',
    },
    heading: {
      fontSize: theme.typography.pxToRem(16),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    header: {
      backgroundColor : "#1E1E2F",
      textAlign: 'center',
    },
    title : {
      padding : '1rem 0',
      fontFamily: "cursive, sans-serif"

    },
    accordian: {
      backgroundColor : "#1E1E2F",

    }
  }));
