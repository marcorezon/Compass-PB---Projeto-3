import { createTheme } from "@mui/material";
import { cyan, yellow } from '@mui/material/colors';

export const standardTheme = createTheme({
    palette: {
        primary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            contrastText: '#ffffff'
        },
        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: '#ffffff'
        },        
        background: {
            default: '#242424',
            paper: '#282828',
        },
        text: {
            primary: '#173A5E',
            secondary: '#46505A',
        },
    },
  });