import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Switch, Typography, fabClasses } from '@mui/material';
import { InlineContainer, ColumnContainer, Img, CustomButton, CustomTextField } from '../customComponents';
import { useState, useRef } from 'react';
import { Errors } from './validateForm';

import FormImage from './../../../../public/Popup image.svg';
import FormErrorAlert from '../formErrorAlert';
import SelectLocation from '../selectLocation';

import validate from './validateForm';
import isValid from './isValid';
import postUserRegister from './postUserRegister';
import RegisterSuccess from './registerSuccess';

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

    const formRefs = {
        name: useRef<HTMLElement>(),
        email: useRef<HTMLElement>(),
        referralCode: useRef<HTMLElement>(),
        country: useRef<HTMLElement>(),
        city: useRef<HTMLElement>(),
        switch: useRef<HTMLElement>(),
        carType: undefined
    }
    const [validationErrors, setValidationErrors] = useState<Errors>({} as Errors);

    const [isValidated, setIsValidated] = useState<boolean>(false);

    const [showRadioOptions, setShowRadioOptions] = useState<boolean>(false);

    const [showSucessScreen, setShowSucessScreen] = useState<boolean>(false);


    function toggleShowRadioOptions() {
        showRadioOptions ? setShowRadioOptions(false) : setShowRadioOptions(true);
    }

    function handleCarSelect(event: any) {
        formRefs.carType = event.target.value;
    }

    function handleSubmit() {
        setValidationErrors({ ...validate(formRefs) });
        setIsValidated((isValid(validationErrors)));
        console.log(validationErrors);
        console.log('is validated: ' + isValidated);
        if(isValidated) {
            setShowSucessScreen(postUserRegister({... formRefs}));
        }
    }

    if(showSucessScreen) 
        return (<RegisterSuccess />)

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
                    inputRef={formRefs.name}
                    label='Full Name'
                    error={validationErrors.name != undefined}
                />
                <FormErrorAlert content={validationErrors.name} />
            </FormControl>

            <FormControl>
                <CustomTextField
                    name='email'
                    inputRef={formRefs.email}
                    label='Email Address'
                    error={validationErrors.email != undefined}
                />
                <FormErrorAlert content={validationErrors.email} />
            </FormControl>

            <SelectLocation
                countryRef={formRefs.country}
                cityRef={formRefs.city}
                formErrors={validationErrors}
            />

            <FormControl>
                <CustomTextField
                    name='referral code'
                    inputRef={formRefs.referralCode}
                    label='Referal code'
                    error={validationErrors.referralCode && true}
                />
                <FormErrorAlert content={validationErrors.referralCode} />
            </FormControl>

            <InlineContainer alignItems='center' justifyContent='space-between'>
                <Typography component='p' sx={{ color: '#fff', textAlign: 'start' }}>
                    I drive my own car
                </Typography>
                <Switch
                    name='switch'
                    color="secondary"
                    inputRef={formRefs.switch}
                    inputProps={{ 'aria-label': 'controlled' }}
                    onChange={toggleShowRadioOptions}
                />
            </InlineContainer>


            {showRadioOptions && (
                <FormControl sx={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <FormLabel id='car-type' sx={{ color: 'primary.contrastText' }}>
                        Select your car type
                    </FormLabel>

                    <RadioGroup ref={formRefs.carType} row name='Car type' defaultValue={false}>
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