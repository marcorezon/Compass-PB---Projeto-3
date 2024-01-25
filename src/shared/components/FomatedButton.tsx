import { Button } from "@mui/material";

export const FormattedButton = ({text="", max=""}) => {
    return (
        <Button 
            sx={{
                height: '56px',
                maxWidth: {max},
                width: '100%',
                color: 'primary.main',
                bgcolor: 'text.primary'
            }}
        >
        {text}
        </Button>
    );
}