import { Box, Button, Select, styled, TextField } from '@mui/material';

export const InlineContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    m: '0',
    p: '0',
});

export const ColumnContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    flexWrap: 'wrap',
    m: '0',
    p: '0',
});

export const Img = styled('img')({
    width: '100%',
    height: '100%',
    margin: '0',
    p: '0',
});

export const Span = styled('span')({

});

export const CustomButton = styled(Button)({
    height: '56px',
    width: '100%',
});

export const CustomTextField = styled(TextField) ({
    border: '1px',

    // (Note: space or no space after `&` matters. See SASS "parent selector".)
    '& .MuiOutlinedInput-root': {  // - The Input-root, inside the TextField-root
        '& fieldset': {            // - The <fieldset> inside the Input-root
            borderColor: 'rgba(228, 219, 233, 0.7)',   // - Set the Input border
        },
        '&:hover fieldset': {
            borderColor: 'rgba(228, 219, 233, 1)', // - Set the Input border when parent has :hover
        },
        '&.Mui-focused fieldset': { // - Set the Input border when parent is focused 
            borderColor: 'rgba(228, 219, 233, 1)',
        },
    },
})

export const CustomSelect = styled(Select) ({
        textAlign: 'start',
        '&.MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root': {
            color: 'rgba(228, 219, 233, 1)',
        },
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: 'rgba(228, 219, 233, 0.7)',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'rgba(228, 219, 233, 1)',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: 'rgba(228, 219, 233, 1)',
        },
        '.MuiSvgIcon-root ': {
          fill: 'white',
        }
})