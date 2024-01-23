import { Button, Container, TextField, Typography } from "@mui/material";
import { RegisterForm } from "../shared/components/register";

import TopBar from "./../shared/components/topBar";
import RideImage from "./../../public/homeImages/ride.png";

export const Home = () => {
    return (
    <Container
        maxWidth={false}
        sx={{
            m: '0',
            p: '0',
            bgcolor: 'background.default',
            fontFamily: 'Roboto'
        }}>
        <TopBar />


        <Container
            sx={{
                my: '74px', 
                mx: '89px',
                display: 'flex',
            }}>
            <Container>
                <img src={RideImage} alt="taxi image" />
            </Container>

            <Container 
                sx={{
                    display: 'flex', 
                    flexDirection: 'column',
                    gap: '15px'
                    }}
            >
                <Typography
                    sx={{
                        fontSize: '26px',
                    }} 
                    variant="h1" 
                    component='h2'
                >Need a ride?
                </Typography>

                <Typography 
                    sx={{fontSize: '50px'}}
                    variant="h1" 
                    component='h2'
                >Book with myRIDE now!
                </Typography>

                <TextField 
                    required
                    label="Your Pickup"
                />

                <TextField
                    label="Your Destination"
                />

                <Button
                    sx={{
                        width: '544px',
                        height: '56px',
                        bgcolor: 'primary.main'
                    }}
                >
                Test
                </Button>
            </Container>
        </Container>

        <Container sx={{my: '60px', textAlign: 'center'}}>
            
            <Typography 
                variant="h1" 
                component="h2"
                sx={{
                    color: 'primary.main',
                    fontSize: "26px"
                }}
            >WHY SHOULD YOU RIDE WITH US?
            </Typography>

            <Typography
                variant="h1" 
                component="h2"
                sx={{
                    color: 'primary.light',
                    fontSize: "45px"
                }}
            >Best in class rides
            </Typography>

        <RegisterForm />
        
        </Container>
            
        <Container>

        </Container>

    </Container>
    );
}
