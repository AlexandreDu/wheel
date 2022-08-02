import React, { useRef } from "react";
import { Box, Typography, Stack, IconButton, Button } from "@mui/material";

// container, circle, radius
export const IconAndButton = React.forwardRef(({onClick, disabled, icon, title}) => {

   
    
    

    return (
    
        <Button onClick={onClick} disabled={disabled}> 
            <Stack>
            <IconButton>
                {icon}
            </IconButton>
            <Typography>{title}</Typography>
            </Stack>
        </Button>
        )
})


