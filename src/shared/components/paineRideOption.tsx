import { Container, Link, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { InlineContainer } from './customComponents';

export const PainelRideOptions = () => {

    const classRides = [
        {
            label: 'Basic',
            content: 'The best balance of price and comfort. You will not go wrong with our basic rides.',
            image: './../../public/card images/card image.png',
            alt: 'Basic car'
        },
        {
            label: 'Comfort',
            content: 'If comfort is your priority, this is the ride for you. It’s spacious and packed with features.',
            image: './../../public/card images/card image-1.png',
            alt: 'Comfort car'
        },
        {
            label: 'Business',
            content: 'Do you want to travel around the city in style? Make sure to select or business class rides.',
            image: './../../public/card images/card image-2.png',
            alt: 'Business car'
        },
        {
            label: 'Deluxe',
            content: 'The best ride for luxury and comfort. No compromises here. You’ll surely get what you pay for.',
            image: './../../public/card images/card image-3.png',
            alt: 'Deluxe car'
        },
    ];

    return (
        <InlineContainer justifyContent='center' mt='60px' mb='101px' gap='24px'>
            {classRides.map((object) => (
                <Card key={object.label}
                    sx={{ 
                        boxShadow: 'none',
                        width: '307px',
                        textAlign: 'start',
                        bgcolor: 'secondary.dark',
                    }}>
                    <CardMedia
                        sx={{ height: 214 }}
                        component='img'
                        alt={object.alt}
                        image={object.image}
                    />
                    <CardContent sx={{p: '15px' }}>
                        <Typography sx={{ color: 'primary.main' }}>
                            {object.label}
                        </Typography>
                        <Typography sx={{ color: 'primary.dark' }}>
                            {object.content}
                        </Typography>
                    </CardContent>

                    <Container sx={{ display: 'flex', justifyContent: 'flex-end', pb: '14px', py:'14px' }}>
                        <CardActions sx={{p: '0'}}>
                            <Link href={'https://www.google.com/search?q=' + object.label + '+car'} underline='none' marginBottom='18px' color='primary.contrastText'>LEARN MORE</Link>
                        </CardActions>
                    </Container>
                </Card>
            )
            )}
        </InlineContainer>
    );
}