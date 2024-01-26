import { Typography } from "@mui/material";
import { ColumnContainer, CustomButton, InlineContainer, Img } from '../customComponents';
import { useEffect, useState } from "react";

import checkedIcon from './../../../../public/check icon 1.svg';


export default function RegisterSuccess () {
    
    const [userData, setUserData] = useState([]);
    
    useEffect(() => {
      fetch("http://localhost:3000/userData", {
        method: "GET", headers: {'Content-Type': 'application/json'},
      })
        .then((response) => response.json())
        .then((data) => {
          setUserData(data[1]);
        })
        .catch((error) => console.log(error));
    }, []);

    console.log(userData);

    return (
        <ColumnContainer alignItems='center' bgcolor='background.paper' borderRadius='10px' p='20px' gap='30px'>
            <InlineContainer  alignItems='center' justifyContent='center' gap='15px'>
                <Img src={checkedIcon} alt='success icon' sx={{maxWidth:'45px', maxHeight:'45px'}} />
                <Typography variant='h2' component='h5' fontSize='45px'>
                    Welcome Marco
                </Typography>
            </InlineContainer>

            <ColumnContainer alignItems='start' alignContent='center' sx={{color: 'primary.main'}}>
                    <Typography>Name: {userData.name}</Typography>
                    <Typography>Email: {userData.email}</Typography>
                    <Typography>Country: {userData.country}</Typography>
                    <Typography>City: {userData.city}</Typography>
                    <Typography>Referral Code: {userData.referralCode}</Typography>
                    <Typography>Own Car: {userData.driveOwnCar}</Typography>
            </ColumnContainer>

            <CustomButton sx={{ maxWidth: '200px', bgcolor: 'secondary.main', fontSize: '14px' }}>
                Submit a new car
            </CustomButton>
        </ColumnContainer>
    );
}