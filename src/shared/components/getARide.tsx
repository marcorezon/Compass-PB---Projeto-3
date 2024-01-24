import { Container, TextField, Typography } from "@mui/material"
import { FormattedButton } from "./FomatedButton"

import Magnifier from "./../../../public/magnifier.svg";
import RideImage from "./../../../public/homeImages/ride.png";

export const GetARide = () => {
    return (
        <Container
            sx={{
                width: '100%',
                overflow: 'hidden',
                my: '74px', 
                mx: '89px',
                display: 'inline-flex',
                gap: '42px'
            }}>
            
            <Container>
                <Typography
                    sx={{ maxHeight: '593px', maxWidth: '610px', width: '100%', height: '100%' }}
                    component="img"
                    src={RideImage}
                    alt="taxi image"
                />   
            </Container>

            <Container 
                sx={{
                    maxWidth: '610px',
                    display: 'flex', 
                    flexDirection: 'column',
                    m: '0px',
                    gap: '15px',
                    justifyContent: 'center'
                    }}
            >
                <Typography
                    sx={{
                        fontSize: '26px',
                        color: 'primary.light'
                    }} 
                    variant="h1" 
                    component='h2'
                >Need a ride?
                </Typography>

                <Typography 
                    sx={{fontSize: '50px', color: 'primary.light'}}
                    variant="h1" 
                    component='h2'
                >Book with myRIDE now!
                </Typography>

                <Container
                    sx={{
                        maxWidth: '610px',
                        display: 'flex', 
                        flexDirection: 'column',
                        gap: '16px',
                        bgcolor: 'background.paper',
                        m: '0',
                        p: '33px',
                        borderRadius: '4px'
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '26px',
                            color: 'primary.light'
                        }}
                    >Find a ride now
                    </Typography>
                    <TextField 
                        required
                        label="Your Pickup"
                        placeholder=""
                    />

                    <TextField
                        label="Your Destination"
                    />

                    <FormattedButton 
                        pWidth="544px"
                        text="FIND A DRIVER"
                    />
                    
                </Container>
            </Container>
        </Container>
    );
    
}