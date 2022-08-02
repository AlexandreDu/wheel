import { Box, Typography, ThemeProvider, useTheme, Dialog, DialogTitle, Alert, AlertTitle, DialogContent } from '@mui/material';

export function WinnerDialog({isDialogOpen, setIsDialogOpen, winner}) {
    const theme = useTheme()
    
    return (
        <Dialog
           
            PaperProps={{backgroundColor: 'red'}}
            open={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle color={theme.palette.primary.main}>And the winner is</DialogTitle>
            <DialogContent>
                <Typography textAlign={'center'} fontSize={'2rem'} color={theme.palette.secondary.main}>{winner}</Typography>
            </DialogContent>
            {/* <Alert onClose={() => setIsDialogOpen(false)} severity="success">
                <AlertTitle>The winner is {winner}</AlertTitle>
                
            </Alert> */}
        </Dialog>
    )

}


