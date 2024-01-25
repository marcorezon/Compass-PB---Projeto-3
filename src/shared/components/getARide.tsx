import { InlineContainer, ColumnContainer, Img, Span, CustomButton } from "./customComponents";
import { Box, TextField, Typography } from "@mui/material";

import Magnifier from "./../../../public/magnifier.svg";
import RideImage from "./../../../public/homeImages/ride.png";

export const GetARide = () => {
    return (
        <InlineContainer alignItems='center' justifyContent= 'center' my = '74px' gap = '42px'>
            <Box>
                <Img src={RideImage} alt='taxi image' sx={{maxHeight:'593px', maxWidth: '610px'}}/>
            </Box>

            <ColumnContainer maxWidth='610px' gap = '15px'>
                <Typography variant='h1' component='h1'>
                        Need a ride?
                    </Typography>

                    <Typography variant='h2' component='h2'>
                        Book with <Span sx={{color: 'text.primary'}}><i>my</i>RIDE</Span> now!
                    </Typography>

                    <ColumnContainer justifySelf = 'center' maxWidth = '610px' gap = '15px' padding="33px" bgcolor= 'background.paper' borderRadius = '4px'>
                        <Typography sx={{fontSize: '26px', color: 'primary.main'}}>
                            Find a ride now
                        </Typography>

                        <TextField name='pickup' required label='Your Pickup' placeholder=''/>

                        <TextField name='destination' label='Your Destination'/>

                        <CustomButton startIcon={<Img src={Magnifier}/>} sx={{maxWidth: '544px'}}>Find a Driver</CustomButton>
                    </ColumnContainer>
            </ColumnContainer>
        </InlineContainer>
    );
    
}