import { Button, Container, Link, Typography } from "@mui/material";
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
        links: ['Become a partner', 'Partner Support', 'Mobile app links'],
        relativeAnchor: []
    }
]

const footerTextTheme = {mb: '8px', color: "primary.light", fontSize: "20px"};
const footerLinkTheme = {p: '0', color: "primary.light", textTransform :"none", fontSize: '16px'};
const footerLocation = {color: 'text.secondary', fontSize: '16px', fontWeight: '400'};
const footerTheme = {
    display: 'inline-flex', 
    py: '40px', 
    mx: '80px',
    gap: '80px',
    width: '100%'
}

export const Footer = () => {
    return (
        <Container sx={{...footerTheme}}>
            <Container 
                sx={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: "16px"
                }}>
                
                <div>
                    <img src={whiteLogo} alt="blank logo"/>
                </div>

                <Typography sx={{...footerLocation}}>
                    MyRide Inc., 2nd Floor, New York, NY 10016
                </Typography>

                <Container sx={{display: 'flex', p: '0px', gap: "16px"}}>
                    <img src={facebookLogo} alt="facebook logo"/>
                    <img src={instagramLogo} alt="instagram logo"/>
                    <img src={twitterLogo} alt="twitter logo"/>
                </Container>

            </Container>
            <Container sx={{display: 'inline-flex', gap: '20px'}}>
                {footerData.map( (linkSection) => {
                    return(
                        <Container 
                            sx={{
                                display: 'flex', 
                                flexDirection:'column',
                                alignItems: 'flex-start',
                                gap: '12px'
                            }}>
                            <Typography sx={{...footerTextTheme}}>{linkSection.identifier}</Typography>
                            
                            {linkSection.links.map( (link) => {
                                return (
                                    <Link href="#" underline="none" sx={{...footerLinkTheme}}>{link}</Link>
                                );
                            })}
                        </Container>
                    );
                })}
            </Container>
        </Container>
    );
}