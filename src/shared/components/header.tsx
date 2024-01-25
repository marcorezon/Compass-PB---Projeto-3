import { AppBar, Container, IconButton, Menu, MenuItem, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useState, MouseEvent } from "react";
import IconLogo from "./../../../public/Logo.svg";
import NotificationIcon from "./../../../public/bell-icon.svg";
import userAvatarTest from "./../../../public/userAvatar.png";

const pages = ['Home', 'Getting a Taxi', 'Mobile App', 'Contact Us']

export default function Header() {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        width: '100%',
        p: '20px',
        justifyContent: 'space-between',
        bgcolor: 'background.default',
        fontSize: '16px',
        boxShadow: 'none'
      }}
    >
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <Typography>
          <img src={IconLogo} alt="app logo" />
        </Typography>

        <Tabs>
          {pages.map((page) => (
            <Tab
              key={page}
              label={page}
              sx={{
                '&:hover': {
                  opacity: [0.9, 0.8, 0.7]
                },
                textTransform :'none',
                color: 'primary.main',
              }}
            />
          ))}
        </Tabs>
        
        <Container sx={{display: 'inline-flex', width: '100px', m:'0'}}>
          <div>
            <IconButton>
              <Container>
                <img src={NotificationIcon} alt="notification bell"></img>
              </Container>
            </IconButton>

            <Menu
              id="notification-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>

          <div>
            <IconButton sx={{ height: '36px', width: '36px' }}>
              <Typography
                sx={{ height: '36px', width: '36px' }}
                component="img"
                borderRadius='36px'
                src={userAvatarTest}
              />
            </IconButton>

            <Menu
              id="user-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
}