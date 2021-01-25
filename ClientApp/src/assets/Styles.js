import {  pink, red, teal} from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';


export const mainColors = {
    BACKGROUND_COLOR: "#1e1e2f"
}

export const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: teal,
        error: red,
        warning: pink,
        info: teal,
    }
});