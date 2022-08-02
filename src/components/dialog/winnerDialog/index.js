import { Box, Typography, ThemeProvider, useTheme, Dialog, Alert, AlertTitle } from '@mui/material';

export function WinnerDialog({isDialogOpen, setIsDialogOpen, winner}) {

    
    return (
        <Dialog
            open={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <Alert onClose={() => setIsDialogOpen(false)} severity="success">
                {/* <AlertTitle>The winner is {winner}</AlertTitle> */}
                The winner is {winner}
            </Alert>
        </Dialog>
    )

}


