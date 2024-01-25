import { Container, Typography } from "@mui/material";
import Header from "../shared/components/header";
import { Footer } from "../shared/components/footer";
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

        <GetARide />

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
            
            <Typography 
                variant="h1" 
                component="h2"
                sx={{
                    color: 'text.primary',
                    fontSize: "26px"
                }}
            >WHY SHOULD YOU RIDE WITH US?
            </Typography>

            <Typography
                variant="h1" 
                component="h2"
                sx={{
                    color: 'primary.main',
                    fontSize: "45px"
                }}
            >Best in class rides
            </Typography>
            
            <ClassRideCards />
        
            <RegisterForm />
        </Container>
        <Footer />
    </Container>
    );
}
