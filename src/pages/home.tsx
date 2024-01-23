import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, TextField, Typography } from "@mui/material";
import { RegisterForm } from "../shared/components/register";

import TopBar from "./../shared/components/topBar";
import RideImage from "./../../public/homeImages/ride.png";

const classRides = [
    {
        label: "Basic",
        content: "The best balance of price and comfort. You will not go wrong with our basic rides.",
        image: "./../../public/card images/card image.png"
    },
    {
        label: "Comfort",
        content: "If comfort is your priority, this is the ride for you. It’s spacious and packed with features.",
        image: "./../../public/card images/card image-1.png"
    },
    {
        label: "Business",
        content: "Do you want to travel around the city in style? Make sure to select or business class rides.",
        image: "./../../public/card images/card image-2.png"
    },
    {
        label: "Deluxe",
        content: "The best ride for luxury and comfort. No compromises here. You’ll surely get what you pay for.",
        image: "./../../public/card images/card image-3.png"
    },
];

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
                    gap: '15px',
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
                        display: 'flex', 
                        flexDirection: 'column',
                        gap: '15px',
                        bgcolor: 'background.paper',
                        p: '25px',
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

            <Container
                sx={{
                    mt: '60px', 
                    mb: '101px',
                    display: 'flex',
                    gap: '24px'
                }}
            >
                {classRides.map( (object) => (
                    <Card sx={{textAlign: 'start'}}>
                        <CardMedia 
                            sx={{ height: 190 }}
                            component="img"
                            image={object.image}
                        />
                        <CardContent>
                            <Typography sx={{color: 'primary.light'}}>
                                {object.label}
                            </Typography>
                            <Typography sx={{color: 'primary.dark'}}>
                                {object.content}
                            </Typography>
                        </CardContent>
                        <Container sx={{display: 'flex', alignItems: 'bottom',justifyContent: 'flex-end'}}>
                            <CardActions>
                                <Button size="small">LEARN MORE</Button>
                            </CardActions>
                        </Container>
                    </Card> 
                )
                )}
            </Container>

            <RegisterForm />

        </Container>

    </Container>
    );
}
