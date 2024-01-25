import { Box, FormControl, InputLabel, MenuItem, NativeSelect, Select, SelectChangeEvent } from "@mui/material";
import countriesData from "./../../../utils/countries-and-cities";
import { useState } from "react";

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
        <Box sx={{ display: 'flex', flexDirection: 'column', m: '0', p:'0', gap: '20px'}}>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                    
                    labelId="Country"
                    id="selectCountry"
                    value={country}
                    label="Contry"
                    onChange={handleSelectCountry}
                >
                    {countries.map( (country) => {
                        console.log(country)
                        return (
                            <MenuItem key={country} value={country}>{country}</MenuItem>
                        );
                    })}

                </Select>
            </FormControl>

            <FormControl disabled={country === ''} fullWidth>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                    labelId="City"
                    id="selectCity"
                    value={city}
                    label="City"
                    onChange={handleSelectCity}
                >   
                    {!(country === "") && (countriesData[country].map( (city: string) => {
                        return (
                            <MenuItem key={city} value={city}>{city}</MenuItem>
                        );}))}
  
                </Select>
            </FormControl>
        </Box>
    );
}