import { Box, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Switch, TextField, Typography } from "@mui/material";
import FormImage from "./../../../public/Popup image.svg";
import { FormattedTextField } from "./FormattedTextField";
import { useState } from "react";
import { FormattedButton } from "./FomatedButton";

const radioData = [
    {
        radioValue: 'sedan',
        imageLink: "./../../../public/car types cards/Option Card.svg",
        altContent: 'sedan car icon'
    },
    {
        radioValue: 'suv/van',
        imageLink: "./../../../public/car types cards/Option Card-1.svg",
        altContent: 'sedan car icon'
    },
    {
        radioValue: 'semy luxury',
        imageLink: "./../../../public/car types cards/Option Card-2.svg",
        altContent: 'semy luxury car icon'
    },
    {
        radioValue: 'luxury',
        imageLink: "./../../../public/car types cards/Option Card-3.svg",
        altContent: 'luxury car icon'
    },
]

export const RegisterForm = () => {

    const [showForm, setShowForm] = useState(false);

    function toggleShowForm() {
        showForm ? setShowForm(false) : setShowForm(true);
    }
    return (
        <Box
            sx={{
                flexDirection: 'column',
                maxWidth: '1252px',
                display: "flex",
                p: '25px',
                gap: '24px',
                borderRadius: '4px',
                bgcolor: 'background.paper'
            }}>
            <Container sx={{ textAlign: 'start', display: 'inline-flex' }}>
                <img src={FormImage} />
                <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography
                        component='p'
                        sx={{ color: 'primary.main' }}
                    >Drive with MyRide
                    </Typography>
                    <Typography
                        component='p'
                        sx={{ color: 'primary.light' }}
                    >Register as a driver using the form below. Our team will assess and get back to you within 48 hours.
                    </Typography>
                </Container>
            </Container>

            <FormattedTextField iWidth="1264px" placeHolder="Full Name" />

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

            {showForm && (
                <FormControl
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '16px'
                    }}
                >
                    <FormLabel
                        id="demo-radio-buttons-group-label"
                        sx={{
                            color: 'primary.main'
                        }}
                    >Select your car type
                    </FormLabel>

                    <RadioGroup
                        row
                        name="radio-buttons-group"
                    >
                        {radioData.map((category) => {
                            return (
                                <FormControlLabel
                                    key={category.radioValue}
                                    value={category.radioValue}
                                    control={<Radio />}
                                    label={<img src={category.imageLink} alt={category.altContent} />}
                                />
                            );
                        })}
                    </RadioGroup>
                </FormControl>)
            }
            <FormattedButton text="Submit" pWidth="200px"/>
        </Box>
    );
}