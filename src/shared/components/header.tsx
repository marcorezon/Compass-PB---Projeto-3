import { AppBar, IconButton, Menu, MenuItem, Tab, Tabs, Box, Toolbar, Typography, styled } from "@mui/material";
import { InlineContainer, Img } from "./customComponents";
import { useState, MouseEvent } from "react";

import IconLogo from "./../../../public/Logo.svg";
import NotificationIcon from "./../../../public/bell-icon.svg";
import userAvatarTest from "./../../../public/userAvatar.png";


export default function Header() {
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const pages = ['Home', 'Getting a Taxi', 'Mobile App', 'Contact Us']

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='static' sx={{ width: '100%', p: '20px', justifyContent: 'space-between', bgcolor: 'background.default', fontSize: '16px', boxShadow: 'none' }}>

      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography>
          <Img src={IconLogo} alt='app logo' />
        </Typography>

        <Tabs value={0}>
          {pages.map((page) => (
            <Tab key={page} label={page} sx={{'&:hover': {opacity: [0.9, 0.8, 0.7]}, textTransform: 'none',color: 'primary.main',}}/>
          ))}
        </Tabs>

        <InlineContainer gap='40px' maxWidth='100px' alignItems='center'>
          <Box>
            <IconButton>
                  <Img src={NotificationIcon} alt='notification bell' sx={{width: '24px', height: '27px'}} />
              </IconButton>

              <Menu
                keepMounted
                id='notification-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right',}}
                transformOrigin={{vertical: 'top', horizontal: 'right',}}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
          </Box>

          <Box>
            <IconButton sx={{ height: '36px', width: '36px' }}>
              <Img src={userAvatarTest} alt='user avatar' sx={{ height: '36px', width: '36px', borderRadius: '36px' }}/>
            </IconButton>

            <Menu
              id='user-appbar'
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
          </Box>
        </InlineContainer>
      </Toolbar>
    </AppBar>
  );
}