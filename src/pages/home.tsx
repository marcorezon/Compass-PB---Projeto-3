import { Container, TextField, Typography } from "@mui/material";
import Header from "../shared/components/header";

import { ClassRideCards } from "../shared/components/classRideCard";
import { GetARide } from "../shared/components/getARide";
import { RegisterForm } from "../shared/components/register";


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
        <Header />

        <section>
            <GetARide />
        </section>

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
            
            <ClassRideCards />

            <RegisterForm />

        </Container>

    </Container>
    );
}
