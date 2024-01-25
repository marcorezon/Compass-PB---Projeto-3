import { createTheme } from "@mui/material";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const standardTheme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
            dark: '#B3B3B3',
            light: '#FFF',
            contrastText: '#FBA403'
        },
        secondary: {
            main: '#FBA403',
        },
        background: {
            default: '#242424',
            paper: '#282828',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#B3B3B3',
        },
    },
    typography: {
        fontSize: 16,
        h1: {
            fontSize: 26,
            fontWeight: 400,
            color: "#FFFFFF"
        },
        h2: {
            fontSize: '50px',
            fontWeight: 700, 
            color: '#FFFFFF'
        },
        h3: {
            fontSize: 26,
            fontWeight: 400,
            color: "#FBA403"
        },
        h4: {
            fontSize: "45px",
            fontWeight: 700,
            color: '#FFFFFF'
        },
        h5:  {
            fontSize: 27,
            fontWeight: 700,
            color: "#FBA403"
        }
    },
    components: {
        MuiTextField: {
          styleOverrides: {
            root: {
              '--TextField-brandBorderColor': '#FFFFFF',
              '--TextField-brandBorderHoverColor': '#FFFFFF',
              '--TextField-brandBorderFocusedColor': '#FFFFFF',
              '& label.Mui-focused': {
                color: '#FFFFFF',
              },
            },
          },
        },
    },
  });