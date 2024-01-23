import { Box, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Switch, TextField, Typography } from "@mui/material";

export const RegisterForm = () => {
    return (
        <Box 
            sx={{
                flexDirection: 'column',
                width: '1252px', 
                display: "flex", 
                gap: '24px',
                bgcolor: 'background.paper'
            }}>
            <TextField
                placeholder="Full Name"
            />
            <TextField
                placeholder="Email Address"
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
                    variant="p" 
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
                    label="Start"
                    labelPlacement="start"
                />
            </Container>

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
            
        </Box>    
    );
}