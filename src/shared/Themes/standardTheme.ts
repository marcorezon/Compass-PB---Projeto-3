import { createTheme } from "@mui/material";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const standardTheme = createTheme({
    palette: {
        primary: {
            main: '#FBA403',
            dark: '#B3B3B3',
            light: '#FFF',
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