import { AppBar, Menu, MenuItem, Typography } from "@mui/material";

const pages = ['Home', 'Getting a Taxi', 'Mobile App', 'Contact Us']

export default function TopBar()  {
  
  return (
    <AppBar position="static">
         <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
    </AppBar>
  );
}