import { Container, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { locationData } from "../services/location/locationApi";
import { useEffect } from "react";
export const FormattedSelect = () => {

    var local: {};

    useEffect(() => {
        locationData.get("/location").then((response) => {
          local = response.data;
        });
      }, []);

    return (
        <Container sx={{gap: 'inherit'}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                    
                    labelId="Country"
                    id="selectCountry"
                    value={null}
                    label="Contry"
                    onChange={undefined}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                    
                    labelId="Country"
                    id="selectCountry"
                    value={null}
                    label="Contry"
                    onChange={undefined}
                >      
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Container>
    );
}