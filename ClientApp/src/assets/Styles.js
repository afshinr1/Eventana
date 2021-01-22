import { purple } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';


export const mainColors = {
    BACKGROUND_COLOR: "#1e1e2f"
}

export const theme = createMuiTheme({
    palette: {
        primary: purple,

        secondary: {
            main: '#0004BF',
        },

        error: {
            main: "#FF0000",
        }
    }
});