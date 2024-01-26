import { AppBar, IconButton, Box, Toolbar, Link } from '@mui/material';
import { InlineContainer, Img } from './customComponents';

import IconLogo from './../../../public/Logo.svg';
import NotificationIcon from './../../../public/bell-icon.svg';
import userAvatarTest from './../../../public/userAvatar.png';


export default function Header() {
  
  const pages = ['Home', 'Getting a Taxi', 'Mobile App', 'Contact Us'];

  return (
    <AppBar position='static' sx={{ width: '100%', py: '20px', justifyContent: 'space-between', bgcolor: 'background.default', fontSize: '16px', boxShadow: 'none' }}>

      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box>
          <Img src={IconLogo} alt='app logo' />
        </Box>

      <InlineContainer justifyContent='center' gap='30px'>
        {pages.map((page) => {
          return(
            <Link key={page} href='#' underline='none' sx={{'&:hover': {color: 'primary.contrastText'}, textTransform: 'none', color: 'primary.main'}}>
                {page}
            </Link>
          );})
        }
      </InlineContainer>

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