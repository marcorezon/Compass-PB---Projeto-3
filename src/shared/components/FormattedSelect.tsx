import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { ColumnContainer } from "./customComponents";
import { useState } from "react";

import countriesData from "./../../../utils/countries-and-cities";

export const FormattedSelect = () => {

    const countries = Object.keys(countriesData);

    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');

    function handleSelectCountry (event: SelectChangeEvent) {
        setCountry(event.target.value as string);
    }

    function handleSelectCity (event: SelectChangeEvent) {
        setCity(event.target.value as string);
    }

    return (
        <ColumnContainer gap='20px' sx={{alignItems: 'center'}}>
            <FormControl fullWidth>
                <InputLabel id="contry-select-label">Country</InputLabel>
                <Select
                    name="country"
                    labelId="Country"
                    id="selectCountry"
                    value={country}
                    label="Contry"
                    onChange={handleSelectCountry}
                >
                    {countries.map( (country) => {
                        return (
                            <MenuItem key={country} value={country}>{country}</MenuItem>
                        );})
                    }

                </Select>
            </FormControl>

            <FormControl disabled={country === ''} fullWidth>
                <InputLabel id="city-select-label">City</InputLabel>
                <Select
                    name="city"
                    labelId="City"
                    id="selectCity"
                    value={city}
                    label="City"
                    onChange={handleSelectCity}
                >   
                    {!(country === "") && (countriesData[country].map( (city: string) => {
                        return (
                            <MenuItem color="primary.main" key={city} value={city}>{city}</MenuItem>
                        );}))
                    }
                </Select>
            </FormControl>
        </ColumnContainer>

    );
}