import { Button, Container, Typography } from "@mui/material";
import facebookLogo from "./../../../public/footer/Facebook.svg";
import instagramLogo from "./../../../public/footer/Instagram.svg";
import twitterLogo from "./../../../public/footer/Twitter.svg";
import whiteLogo from "./../../../public/footer/Logo.svg";

const footerData = [
    {
        identifier: "Company",
        links: ['About us', 'News', 'Careers', 'How we work'],
        relativeAnchor: []
    },
    {
        identifier: "Support",
        links: ['FAQ', 'US Office', 'Asia Office', 'Help Center'],
        relativeAnchor: []
    },
    {
        identifier: "More",
        links: ['About us', 'News', 'Careers', 'How we work'],
        relativeAnchor: []
    }
]

const footerTextTheme = {color: "primary.light"};
const footerLinkTheme = {color: "primary.light", textTransform :"none", fontSize: '16px'};

const footerTheme = {
    display: 'inline-flex', 
    py: '40px', 
    px: '80px',
    gap: '80px'
}

export const Footer = () => {
    return (
        <Container sx={{...footerTheme}}>
            <Container>
                <img src={whiteLogo} />

                <Typography sx={footerTextTheme}>
                    MyRide Inc., 2nd Floor, New York, NY 10016
                </Typography>

                <Container>
                    <img src={facebookLogo} />
                    <img src={instagramLogo} />
                    <img src={twitterLogo}/>
                </Container>

            </Container>
            {footerData.map( (linkSection) => {
                return(
                    <Container 
                        sx={{
                            display: 'flex', 
                            flexDirection:'column',
                            alignItems: 'start'
                        }}>
                        <Typography sx={{...footerTextTheme}}>{linkSection.identifier}</Typography>
                        {linkSection.links.map( (link) => {
                            return (
                                <Button sx={{...footerLinkTheme}}>{link}</Button>
                            );
                        })}
                    </Container>
                );
            })}
        </Container>
    );
}