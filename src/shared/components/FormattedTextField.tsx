import { TextField } from "@mui/material";

export const FormattedTextField = ({ iWidth, placeHolder }) => {
    return (
        <TextField
            variant="outlined"
            sx={{
                maxWidth: {iWidth},
                height: '57px',
            }}
            label={placeHolder}
        />
    );
}