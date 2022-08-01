import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { CSSTransition } from "react-transition-group";
// container, circle, radius
export const Radiuses = React.forwardRef(({participant: {name}, startRadius, endRadius}, ref) => {

   
    
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
                <Box ref={ref} sx={{position: 'absolute', top: '50%', left: '50%', transformOrigin: 'top left',  transform: `rotate(${textRadius}deg) translate(50%, -50%)`, width: '25%', color:'green'}}><Typography>{name}</Typography></Box>

                {endRadius !== null && (
                    <Box sx={{position: 'absolute', top: '50%', left: '50%', transformOrigin: 'left center', transform: `rotate(${endRadius})`, width: '50%', height: radiusHeight, backgroundColor: 'white'}}></Box>
                )}

            </>
        )
})


