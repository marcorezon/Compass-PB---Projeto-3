import { Container, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export const ClassRideCards = () => {

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

    return (
        <Container
            sx={{
                mt: '60px',
                mb: '101px',
                display: 'flex',
                gap: '24px'
            }}
        >
            {classRides.map((object) => (
                <Card sx={{ textAlign: 'start' }}>
                    <CardMedia
                        sx={{ height: 190 }}
                        component="img"
                        image={object.image}
                    />
                    <CardContent>
                        <Typography sx={{ color: 'primary.light' }}>
                            {object.label}
                        </Typography>
                        <Typography sx={{ color: 'primary.dark' }}>
                            {object.content}
                        </Typography>
                    </CardContent>
                    <Container sx={{ display: 'flex', alignItems: 'bottom', justifyContent: 'flex-end' }}>
                        <CardActions>
                            <Button size="small">LEARN MORE</Button>
                        </CardActions>
                    </Container>
                </Card>
            )
            )}
        </Container>
    );
}