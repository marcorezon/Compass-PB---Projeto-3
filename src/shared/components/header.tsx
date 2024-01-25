import { AppBar, IconButton, Menu, MenuItem, Tab, Tabs, Box, Toolbar } from '@mui/material';
import { InlineContainer, Img } from './customComponents';
import { useState, MouseEvent } from 'react';

import IconLogo from './../../../public/Logo.svg';
import NotificationIcon from './../../../public/bell-icon.svg';
import userAvatarTest from './../../../public/userAvatar.png';


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
    <AppBar position='static' sx={{ width: '100%', py: '20px', justifyContent: 'space-between', bgcolor: 'background.default', fontSize: '16px', boxShadow: 'none' }}>

      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box>
          <Img src={IconLogo} alt='app logo' />
        </Box>

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
          </Box>

          <Box>
            <IconButton sx={{ height: '36px', width: '36px' }}>
              <Img src={userAvatarTest} alt='user avatar' sx={{ height: '36px', width: '36px', borderRadius: '36px' }}/>
            </IconButton>
          </Box>
        </InlineContainer>
      </Toolbar>
    </AppBar>
  );
}