import { InlineContainer, ColumnContainer, Img, Span, CustomButton, CustomTextField } from './customComponents';
import { Box, TextField, Typography } from '@mui/material';

import Magnifier from './../../../public/magnifier.svg';
import getARide from './../../../public/get-a-ride.svg';

export const BookingForm = () => {
    return (
        <InlineContainer alignItems='center' justifyContent='center' my='74px' gap='42px'>
            <Box>
                <Img src={getARide} alt='taxi image' sx={{ maxWidth: '610px', maxHeight: '593px'}} />
            </Box>

            <ColumnContainer maxWidth='610px' gap='15px'>
                <Typography variant='h1' component='h1'>
                    Need a ride?
                </Typography>

                <Typography variant='h2' component='h2'>
                    Book with <Span sx={{ color: 'primary.contrastText' }}><i>my</i>RIDE</Span> now!
                </Typography>

                <ColumnContainer justifySelf='center' maxWidth='544px' gap='15px' padding='33px' bgcolor='primary.light' borderRadius='4px'>
                    <Typography sx={{ fontSize: '26px', color: 'primary.main' }}>
                        Find a ride now
                    </Typography>

                    <CustomTextField 
                        name='pickup' 
                        label='Your Pickup'
                        placeholder='Current location' 
                        InputLabelProps={{ shrink: true }} 
                        sx={{maxWidth: '544px'}}
                    />

                    <CustomTextField 
                        name='destination' 
                        label='Your Destination'
                        sx={{maxWidth: '544px'}} 
                    />

                    <CustomButton startIcon={<Img src={Magnifier} alt='Magnifier' />} sx={{ maxWidth: '544px', bgcolor: 'secondary.main' }}>Find a Driver</CustomButton>
                </ColumnContainer>
            </ColumnContainer>
        </InlineContainer>
    );

}