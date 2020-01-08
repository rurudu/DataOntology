import { createMuiTheme } from "@material-ui/core";
import * as CONSTANTS from "./Constants"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: CONSTANTS.RED,
      light: CONSTANTS.RED,
      dark: CONSTANTS.RED,
      contrastText: CONSTANTS.BLACK
    },
    background: {
      main: CONSTANTS.BLACK
    },
    text: {
      main: CONSTANTS.GRAY,
      light: CONSTANTS.WHITE,
    }
  },
  overrides: {
    MuiPaper: {
    },
  }
})

export default theme
