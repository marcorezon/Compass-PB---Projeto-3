import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/routes';
import { ThemeProvider } from '@mui/material';
import { standardTheme } from './shared/Themes/standardTheme';

export default function App () {
  return (
    <ThemeProvider theme={standardTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
