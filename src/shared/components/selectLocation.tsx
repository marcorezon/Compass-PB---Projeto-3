import { FormControl, InputLabel, MenuItem, SelectChangeEvent } from '@mui/material';
import { ColumnContainer, CustomSelect } from './customComponents';
import { useState } from 'react';
import { Errors } from './register-form/validateForm';

import FormErrorAlert from './formErrorAlert';
import countriesData from '../../../utils/countries-and-cities';

interface LocationRef {
    countryRef: HTMLElement;
    cityRef: HTMLElement;
    formErrors: Errors;
}

export default function SelectLocation({ countryRef, cityRef, formErrors }: LocationRef) {

    const countries = Object.keys(countriesData);

    const [country, setCountry] = useState<String>('');
    const [city, setCity] = useState<String>('');

    function handleSelectCountry(event: SelectChangeEvent) {
        setCountry(event.target.value as string);
    }

    function handleSelectCity(event: SelectChangeEvent) {
        setCity(event.target.value as string);
    }

    return (
        <ColumnContainer gap='20px' sx={{ alignItems: 'center' }}>
            <FormControl fullWidth>
                <InputLabel id='contry-select-label'>Country</InputLabel>

                <CustomSelect
                    name='country'
                    inputRef={countryRef as any}
                    labelId='Country'
                    id='selectCountry'
                    value={country}
                    label='Contry'
                    error={formErrors.country != undefined}
                    onChange={handleSelectCountry}
                >
                    {countries.map((country) => {
                        return (
                            <MenuItem sx={{ color: 'primary.main' }} key={country} value={country}>{country}</MenuItem>
                        );
                    })
                    }
                </CustomSelect>

                <FormErrorAlert content={formErrors.country} />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id='city-select-label'>City</InputLabel>

                <CustomSelect
                    name='city'
                    inputRef={cityRef as any}
                    labelId='City'
                    id='selectCity'
                    value={city}
                    label='City'
                    error={formErrors.city != undefined}
                    onChange={handleSelectCity}
                >
                    {!(country === '') && (countriesData[country].map((city: string) => {
                        return (
                            <MenuItem sx={{ color: 'primary.main' }} value={city}>{city}</MenuItem>
                        );
                    }))
                    }
                </CustomSelect>
                
                <FormErrorAlert content={formErrors.city} />
            </FormControl>
        </ColumnContainer>

    );
}