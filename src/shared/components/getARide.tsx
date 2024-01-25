import { InlineContainer, ColumnContainer, Img, Span, CustomButton, CustomTextField } from "./customComponents";
import { Box, TextField, Typography } from "@mui/material";

import Magnifier from "./../../../public/magnifier.svg";
import RideImage from "./../../../public/homeImages/ride.png";

export const GetARide = () => {
    return (
        <InlineContainer alignItems='center' justifyContent='center' my='74px' gap='42px'>
            <Box>
                <Img src={RideImage} alt='taxi image' sx={{ maxWidth: '610px', maxHeight: '593px'}} />
            </Box>

            <ColumnContainer maxWidth='610px' gap='15px'>
                <Typography variant='h1' component='h1'>
                    Need a ride?
                </Typography>

                <Typography variant='h2' component='h2'>
                    Book with <Span sx={{ color: 'primary.contrastText' }}><i>my</i>RIDE</Span> now!
                </Typography>

                <ColumnContainer justifySelf='center' maxWidth='577px' gap='15px' padding="33px" bgcolor='primary.light' borderRadius='4px'>
                    <Typography sx={{ fontSize: '26px', color: 'primary.main' }}>
                        Find a ride now
                    </Typography>

                    <CustomTextField name='pickup' label='Your Pickup' InputLabelProps={{ shrink: true }} />

                    <CustomTextField name='destination' label='Your Destination' />

                    <CustomButton startIcon={<Img src={Magnifier} alt="Magnifier" />} sx={{ maxWidth: '544px', bgcolor: 'secondary.main' }}>Find a Driver</CustomButton>
                </ColumnContainer>
            </ColumnContainer>
        </InlineContainer>
    );

}