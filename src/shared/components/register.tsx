import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Switch, TextField, Typography } from "@mui/material";
import { InlineContainer, ColumnContainer, Img, CustomButton} from "./customComponents";
import { FormattedSelect } from "./FormattedSelect";
import { useState } from "react";

import FormImage from "./../../../public/Popup image.svg";

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
        <ColumnContainer
            alignSelf='center'
            maxWidth = '1252px'
            p = '25px'
            gap = '24px'
            borderRadius = '4px'
            bgcolor = 'background.paper'
            >

            <InlineContainer textAlign='start' alignItems='center' gap="10px">
                <Img src={FormImage} alt="car icon" sx={{maxWidth: '193px', maxHeight: '132px'}}/>
                <ColumnContainer justifyContent = 'center'>
                    <Typography variant = "h5" component='h5'>
                        Drive with MyRide
                    </Typography>
                    <Typography component='p' sx={{ color: 'primary.main' }}>
                        Register as a driver using the form below. Our team will assess and get back to you within 48 hours.
                    </Typography>
                </ColumnContainer>
            </InlineContainer>

            <TextField
                name="name"
                label="Full Name"
            />
            <TextField
                name="email"
                label="Email Address"
            />

            <FormattedSelect />

            <TextField
                name="referal code"
                label="Referal code"
            />

            <InlineContainer alignItems= 'center' justifyContent ='space-between'>
                <Typography component="p" sx={{color: '#fff', textAlign: 'start'}}>
                    I drive my own car
                </Typography>
                <Switch name="switch" inputProps={{ 'aria-label': 'controlled' }} onChange={toggleShowForm}/>
            </InlineContainer>


            {showForm && (
                <FormControl sx={{ display: 'flex', alignItems: 'flex-start', gap: '16px'}}>
                    <FormLabel id="car-type" sx={{ color: 'text.primary' }}>
                        Select your car type
                    </FormLabel>

                    <RadioGroup row name="Car type">
                        {radioData.map((category) => {
                            return (
                                <FormControlLabel key={category.radioValue} value={category.radioValue} label=""
                                    control={
                                        <Radio
                                            icon={<Img src={category.imageLink} alt={category.altContent} />}
                                            checkedIcon={<Img src={category.imageLink} alt={category.altContent} />}
                                            sx={{
                                                borderRadius: '10px',
                                                '&.Mui-checked': {
                                                    opacity: "0.3"
                                                },
                                                '&:hover': {
                                                    opacity: "0.5"
                                                }
                                            }}
                                        />
                                    }
                                />
                            );})
                        }
                    </RadioGroup>
                </FormControl>)
            }
            <CustomButton sx={{maxWidth: '200px' }}>Submit</CustomButton>
        </ColumnContainer>
    );
}