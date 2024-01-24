import { Button } from "@mui/material";

export const FormattedButton = ({text="", pWidth=""}) => {
    return (
        <Button
            sx={{
                height: '56px',
                maxWidth: {pWidth},
                width: '100%',
                color: 'primary.light',
                bgcolor: 'primary.main'
            }}
        >
        {text}
        </Button>
    );
}