import { Box, Button, styled } from "@mui/material";

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
    color: '#FFFFFF',
    bgcolor: '#FBA403',
});