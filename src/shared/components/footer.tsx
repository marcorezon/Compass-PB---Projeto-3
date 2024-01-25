import { Box, Container, Link, Typography, createTheme } from "@mui/material";
import facebookLogo from "./../../../public/footer/Facebook.svg";
import instagramLogo from "./../../../public/footer/Instagram.svg";
import twitterLogo from "./../../../public/footer/Twitter.svg";
import whiteLogo from "./../../../public/footer/Logo.svg";

const footerData = [
    {
        identifier: "Company",
        links: ['About us', 'News', 'Careers', 'How we work'],
    },
    {
        identifier: "Support",
        links: ['FAQ', 'US Office', 'Asia Office', 'Help Center'],
    },
    {
        identifier: "More",
        links: ['Become a partner', 'Partner Support', 'Mobile app links'],
    }
]

const footerLinkTheme = { p: '0', color: "primary.main", textTransform: "none", fontSize: '16px' };
const sectionLink = { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }

export const Footer = () => {
    return (
        <Container sx={{ display: 'inline-flex', py: '40px', mx: '80px', gap: '80px', width: '100%' }}>
            <Container sx={{ display: 'flex', flexDirection: 'column', gap: "16px" }}>
                <Box>
                    <img src={whiteLogo} alt="blank logo" />
                </Box>

                <Typography sx={{ color: 'text.secondary', fontSize: '16px', fontWeight: '400' }}>
                    MyRide Inc., 2nd Floor, New York, NY 10016
                </Typography>

                <Container sx={{ display: 'flex', p: '0px', gap: "16px" }}>
                    <img src={facebookLogo} alt="facebook logo" />
                    <img src={instagramLogo} alt="instagram logo" />
                    <img src={twitterLogo} alt="twitter logo" />
                </Container>

            </Container>

            <Container sx={{ display: 'inline-flex', gap: '20px' }}>
                {footerData.map((linkSection) => {
                    return (
                        <Container key={linkSection.identifier} sx={{ ...sectionLink }}>
                            <Typography sx={{ mb: '8px', color: "primary.main", fontSize: "20px" }}>
                                {linkSection.identifier}
                            </Typography>
                            { linkSection.links.map((link) => {return (<Link key={link} href="#" underline="none" sx={{ ...footerLinkTheme }}> {link} </Link>);} ) }
                        </Container>
                    );})}
            </Container>
        </Container>
    );
}