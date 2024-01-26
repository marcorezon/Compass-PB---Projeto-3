import { Container, Typography } from '@mui/material';
import { Footer } from  '../shared/components/footer';
import { PainelRideOptions } from '../shared/components/paineRideOption';
import { BookingForm } from '../shared/components/bookingForm';
import FormRegister from '../shared/components/register-form/formRegister';
import { ColumnContainer } from '../shared/components/customComponents';

import { useState } from 'react';

import NavBar from '../shared/components/navBar';
import RegisterSuccess from '../shared/components/registerSuccess';

export const Home = () => {

    const [isRegisterSucceed, setIsRegisterSucceed] = useState(false);

    function toggleRegisterSucceed () {
        isRegisterSucceed ? setIsRegisterSucceed(false) : setIsRegisterSucceed(true);
    }

    return (
    <ColumnContainer bgcolor='background.default' fontFamily = 'Roboto' overflow='hidden'>

        <NavBar />

        <BookingForm />

        <Container
            maxWidth={false} 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%', 
                my: '60px', 
                mx: '0', 
                textAlign: 'center'
            }}>
            
            <Typography variant='h3' component='h3'>
                WHY SHOULD YOU RIDE WITH US?
            </Typography>

            <Typography variant='h4' component='h4'>
                Best in class rides
            </Typography>
            
            <PainelRideOptions />

            { isRegisterSucceed? 
                <RegisterSuccess toggleSucceed={toggleRegisterSucceed} /> 
                : <FormRegister toggleSucceed={toggleRegisterSucceed} /> }
            
        </Container>
        <Footer />
    </ColumnContainer>
    );
}
