import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ColumnContainer, CustomSelect } from './customComponents';
import { useState } from 'react';

import countriesData from './../../../utils/countries-and-cities';

interface LocationRef {
    countryRef: HTMLElement;
    cityRef: HTMLElement;
}

export default function FormattedSelect ({countryRef, cityRef}: LocationRef) {

    const countries = Object.keys(countriesData);

    const [country, setCountry] = useState<String>('');
    const [city, setCity] = useState<String>('');

    function handleSelectCountry (event: SelectChangeEvent) {
        setCountry(event.target.value as string);
    }

    function handleSelectCity (event: SelectChangeEvent) {
        setCity(event.target.value as string);
    }

    return (
        <ColumnContainer gap='20px' sx={{alignItems: 'center'}}>
            <FormControl fullWidth>
                <InputLabel id='contry-select-label'>Country</InputLabel>
                
                <CustomSelect
                    name='country'
                    inputRef={countryRef as any}
                    labelId='Country'
                    id='selectCountry'
                    value={country}
                    label='Contry'
                    onChange={handleSelectCountry}
                >
                    {countries.map( (country) => {
                        return (
                            <MenuItem sx={{color: 'primary.main'}} key={country} value={country}>{country}</MenuItem>
                        );})
                    }
                </CustomSelect>
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
                    onChange={handleSelectCity}
                >
                    {!(country === '') && (countriesData[country].map( (city: string) => {
                        return (
                            <MenuItem sx={{color: 'primary.main'}} value={city}>{city}</MenuItem>
                        );}))
                    }
                </CustomSelect>
            </FormControl>
        </ColumnContainer>

    );
}