import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Switch, Typography } from '@mui/material';
import { InlineContainer, ColumnContainer, Img, CustomButton, CustomTextField } from '../customComponents';
import { useState, useRef } from 'react';
import { Errors } from './validateForm';
import FormErrorAlert from '../formErrorAlert';
import SelectLocation from '../selectLocation';
import validate from './validateForm';
import isValid from './isValid';
import FormImage from './../../../../public/Popup image.svg';

export const FormRegister = () => {

    const radioData = [
        {
            radioValue: 'sedan',
            imageLink: './../../../public/car types cards/Option Card.svg',
            altContent: 'sedan car icon'
        },
        {
            radioValue: 'suv/van',
            imageLink: './../../../public/car types cards/Option Card-1.svg',
            altContent: 'sedan car icon'
        },
        {
            radioValue: 'semy luxury',
            imageLink: './../../../public/car types cards/Option Card-2.svg',
            altContent: 'semy luxury car icon'
        },
        {
            radioValue: 'luxury',
            imageLink: './../../../public/car types cards/Option Card-3.svg',
            altContent: 'luxury car icon'
        },
    ]

    const [validationErrors, setValidationErrors] = useState<Errors>({} as Errors);

    const formData = {
        name: useRef<HTMLElement>(),
        email: useRef<HTMLElement>(),
        referalCode: useRef<HTMLElement>(),
        country: useRef<HTMLElement>(),
        city: useRef<HTMLElement>(),
        switch: useRef<HTMLElement>(),
        carType: undefined
    }

    const [isValidated, setIsValidated] = useState<boolean>(true);
    const [showForm, setShowForm] = useState<boolean>(false);


    function toggleShowForm() {
        showForm ? setShowForm(false) : setShowForm(true);
    }

    function handleCarSelect(event: any) {
        formData.carType = event.target.value;
    }

    function handleSubmit() {
        console.log(validationErrors);
        setValidationErrors({ ...validate(formData) });
        console.log(formData);
        setIsValidated((isValid(validationErrors)));
        console.log('Is validated: ' + isValidated);
    }
    return (
        <ColumnContainer
            alignSelf='center'
            maxWidth='1252px'
            p='25px'
            gap='24px'
            borderRadius='4px'
            bgcolor='background.paper'
        >

            <InlineContainer textAlign='start' alignItems='center' gap='10px'>
                <Img src={FormImage} alt='car icon' sx={{ maxWidth: '193px', maxHeight: '132px' }} />
                <ColumnContainer justifyContent='center'>
                    <Typography variant='h5' component='h5'>
                        Drive with MyRide
                    </Typography>
                    <Typography component='p' sx={{ color: 'primary.main' }}>
                        Register as a driver using the form below. Our team will assess and get back to you within 48 hours.
                    </Typography>
                </ColumnContainer>
            </InlineContainer>

            <FormControl>
                <CustomTextField name='name'
                    inputRef={formData.name}
                    label='Full Name'
                    error={validationErrors.name != undefined}
                />
                <FormErrorAlert content={validationErrors.name} />
            </FormControl>

            <FormControl>
                <CustomTextField
                    name='email'
                    inputRef={formData.email}
                    label='Email Address'
                    error={validationErrors.email != undefined}
                />
                <FormErrorAlert content={validationErrors.email} />
            </FormControl>

            <SelectLocation
                countryRef={formData.country}
                cityRef={formData.city}
                formErrors={validationErrors}
            />

            <FormControl>
                <CustomTextField
                    name='referal code'
                    inputRef={formData.referalCode}
                    label='Referal code'
                    error={validationErrors.referalCode && true}
                />
                <FormErrorAlert content={validationErrors.referalCode} />
            </FormControl>

            <InlineContainer alignItems='center' justifyContent='space-between'>
                <Typography component='p' sx={{ color: '#fff', textAlign: 'start' }}>
                    I drive my own car
                </Typography>
                <Switch
                    name='switch'
                    color="secondary"
                    inputRef={formData.switch}
                    inputProps={{ 'aria-label': 'controlled' }}
                    onChange={toggleShowForm}
                />
            </InlineContainer>


            {showForm && (
                <FormControl sx={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <FormLabel id='car-type' sx={{ color: 'primary.contrastText' }}>
                        Select your car type
                    </FormLabel>

                    <RadioGroup ref={formData.carType} row name='Car type'>
                        {radioData.map((category) => {
                            return (
                                <FormControlLabel key={category.radioValue} value={category.radioValue} label=''
                                    control={
                                        <Radio
                                            onChange={handleCarSelect}
                                            icon={<Img src={category.imageLink} alt={category.altContent} />}
                                            checkedIcon={<Img src={category.imageLink} alt={category.altContent} />}
                                            sx={{
                                                borderRadius: '10px',
                                                '&.Mui-checked': {
                                                    opacity: '0.3'
                                                },
                                                '&:hover': {
                                                    opacity: '0.5'
                                                }
                                            }}
                                        />
                                    }
                                />
                            );
                        })
                        }
                    </RadioGroup>
                    <FormErrorAlert content={validationErrors.carType} />
                </FormControl>)
            }
            <CustomButton onClick={handleSubmit} sx={{ maxWidth: '200px', bgcolor: 'secondary.main' }}>Submit</CustomButton>
        </ColumnContainer>
    );
}