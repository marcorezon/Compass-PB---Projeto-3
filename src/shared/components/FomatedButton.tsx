import { Button } from "@mui/material";

export const FormattedButton = ({text="", pWidth=""}) => {
    return (
        <Button
            sx={{
                height: '56px',
                width: {pWidth},
                color: 'primary.light',
                bgcolor: 'primary.main'
            }}
        >
        {text}
        </Button>
    );
}