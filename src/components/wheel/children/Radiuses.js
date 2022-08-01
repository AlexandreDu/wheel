import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
// container, circle, radius
export const Radiuses = React.forwardRef(({participant, startRadius, endRadius}, ref) => {

   
    
    let textRadius = (endRadius + startRadius)/2

    if(startRadius === null || endRadius === null) {
        textRadius = 0
    }


    let radiusHeight = '0.35rem'
    

    return (
    
            <>
                {/* if there is only one participant, we don t show radiuses */}
                {startRadius !== null && (
                    <Box sx={{position: 'absolute', top: '50%', left: '50%', transformOrigin: 'left center', transform: `rotate(${startRadius}deg)`, width: '50%', height: radiusHeight, backgroundColor: 'white'}}></Box>
                )}
                <Box ref={ref} sx={{position: 'absolute', top: '50%', left: '50%', transformOrigin: 'left center', transform: `rotate(${textRadius}deg)`, paddingLeft: textRadius !== 0 && '20%', width: '25%', height: '4px', color:'green'}}><Typography>{participant}</Typography></Box>

                {endRadius !== null && (
                    <Box sx={{position: 'absolute', top: '50%', left: '50%', transformOrigin: 'left center', transform: `rotate(${endRadius})`, width: '50%', height: radiusHeight, backgroundColor: 'white'}}></Box>
                )}

            </>
        )
})


