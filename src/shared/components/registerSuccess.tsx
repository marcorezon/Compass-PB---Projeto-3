import { Typography } from "@mui/material";
import { ColumnContainer, CustomButton, InlineContainer, Img } from './customComponents';
import { useEffect, useState } from "react";

import checkedIcon from './../../../public/check icon 1.svg';


export default function RegisterSuccess ({ toggleSucceed }) {
    
    const [userData, setUserData] = useState([]);
    
    useEffect(() => {
      fetch("http://localhost:3000/userData", {
        method: "GET", headers: {'Content-Type': 'application/json'},
      })
        .then((response) => response.json())
        .then((data) => {
          setUserData(data[data.length - 1]);
        })
        .catch((error) => console.log(error));
    }, []);

    function ownsCar () {
        if(userData.driveOwnCar) {
            return (
                <>
                    <Typography>Own Car: yes</Typography>
                    <Typography>Car type: sedan</Typography>

                </>
            );
        }
    }

    return (
        <ColumnContainer 
            width='70%'
            alignItems='center' 
            bgcolor='background.paper' 
            borderRadius='10px' 
            p='20px' 
            gap='30px'
        >
            <InlineContainer  alignItems='center' justifyContent='center' gap='15px'>
                <Img src={checkedIcon} alt='success icon' sx={{maxWidth:'45px', maxHeight:'45px'}} />
                <Typography variant='h2' component='h5' fontSize='45px'>
                    Welcome {userData.name}
                </Typography>
            </InlineContainer>

            <ColumnContainer width='70%' alignItems='start' alignContent='center' sx={{color: 'primary.main'}}>
                    <Typography>Name: {userData.name}</Typography>
                    <Typography>Email: {userData.email}</Typography>
                    <Typography>Country: {userData.country}</Typography>
                    <Typography>City: {userData.city}</Typography>
                    <Typography>Referral Code: {userData.referralCode}</Typography>
                    <Typography>{ownsCar()}</Typography>
            </ColumnContainer>

            <CustomButton onClick={toggleSucceed} sx={{ maxWidth: '200px', bgcolor: 'secondary.main', fontSize: '14px' }}>
                Submit a new car
            </CustomButton>
        </ColumnContainer>
    );
}