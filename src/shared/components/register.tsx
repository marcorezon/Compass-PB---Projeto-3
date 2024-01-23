import { Box, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Switch, TextField, Typography } from "@mui/material";
import FormImage from "./../../../public/Popup image.svg";
import { FormattedTextField } from "./FormattedTextField";
import { useState } from "react";

export const RegisterForm = () => {

    const [showForm, setShowForm] = useState(false);

    function toggleShowForm () {
        showForm ? setShowForm(false) : setShowForm(true); 
    }
    return (
        <Box 
            sx={{
                flexDirection: 'column',
                width: '1252px', 
                display: "flex",
                p: '25px', 
                gap: '24px',
                borderRadius: '4px',
                bgcolor: 'background.paper'
            }}>
            <Container sx={{textAlign: 'start', display: 'inline-flex'}}>
                <img src={FormImage}/>
                <Container sx={{flexDirection: 'column'}}> 
                    <Typography 
                        component='p'
                        sx={{color: 'primary.main'}}
                    >Drive with MyRide
                    </Typography>
                    <Typography 
                        component='p'
                        sx={{color: 'primary.light'}}
                    >Register as a driver using the form below. Our team will assess and get back to you within 48 hours.
                    </Typography>
                </Container>
            </Container>

            <FormattedTextField iWidth="1264px" placeHolder="Full Name"/>

            <TextField
                label="Full Name"
            />
            <TextField
                label="Email Address"
            />
            <TextField
                label="Your Destination"
            />
            <TextField
                label="Your Destination"
            />
            <TextField
                label="Your Destination"
            />
            
            <Container sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Typography 
                    component="p" 
                    sx={{
                        color: '#fff',
                        textAlign: 'start',
                        fontSize: '16px'
                    }}
                >I drive my own car
                </Typography>

                <Switch
                    inputProps={{ 'aria-label': 'controlled' }}
                    onChange={toggleShowForm}
                />
            </Container>
            
            {
                showForm && (
                    <FormControl sx={{display: 'inline-flex'}}>
                        <FormLabel id="demo-radio-buttons-group-label">Select your car type</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="sedan" control={<Radio />} label="Sedan" />
                            <FormControlLabel value="suv/van" control={<Radio />} label="Suv/Van" />
                            <FormControlLabel value="semy luxury" control={<Radio />} label="Semy Luxury" />
                            <FormControlLabel value="luxury car" control={<Radio />} label="Luxury Car" />
                        </RadioGroup>
                    </FormControl>
                )
            }
            
        </Box>    
    );
}