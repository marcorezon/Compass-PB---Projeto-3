import { Typography } from "@mui/material";
import { ColumnContainer, CustomButton, InlineContainer, Img } from '../customComponents';
import checkedIcon from './../../../../public/check icon 1.svg';

export default function RegisterSuccess () {
    return (
        <ColumnContainer alignItems='center' bgcolor='background.paper' borderRadius='10px' p='20px' gap='30px'>
            <InlineContainer  alignItems='center' justifyContent='center' gap='15px'>
                <Img src={checkedIcon} alt='success icon' sx={{maxWidth:'45px', maxHeight:'45px'}} />
                <Typography variant='h2' component='h5' fontSize='45px'>
                    Welcome Marco
                </Typography>
            </InlineContainer>

            <ColumnContainer>
                <Typography>
                    Dados
                </Typography>
            </ColumnContainer>

            <CustomButton sx={{ maxWidth: '200px', bgcolor: 'secondary.main', fontSize: '14px' }}>
                Submit a new car
            </CustomButton>
        </ColumnContainer>
    );
}