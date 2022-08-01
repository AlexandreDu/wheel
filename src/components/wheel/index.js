import React from "react";
import { Radiuses } from "./children/Radiuses";
import { Box, useTheme } from "@mui/material";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


export const Wheel = React.forwardRef(({players}, ref) => {

    const theme = useTheme()
   
    const {wheelRef, radiusesRef, pikeRef} = ref.current
    


    let degreesRadiusPerParticipant = 360 / players.length

    let wheelRadiuses = players.map((participant, index, array) => {
        
        let startRadius = index * degreesRadiusPerParticipant
        let endRadius = startRadius + degreesRadiusPerParticipant
   
        if(array.length === 1) {
            startRadius = null
            endRadius = null
        }
      
        return (
            {
                startRadius,
                endRadius,
                participant,
      
            }
        )
        
    })

    
let innerCircleDimension = 3
   


  return (
        <Box sx={{position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Box 
                ref={wheelRef} 
                sx={{
                    position: 'relative', 
                    width: {xs: '15rem', md: '20rem'}, 
                    height: {xs: '15rem', md: '20rem'}, 
                    borderRadius: '50%', 
                    backgroundColor: theme.palette.secondary.main, 
                    overflow: 'hidden',
                    border: '0.5rem solid white',
                    boxShadow: '0.2rem 0.1rem 0 0'
                }}>
                    {/* inner circle */}
                <Box sx={{position: 'absolute', top: `calc(50% - ${innerCircleDimension/2}rem)`, left: `calc(50% - ${innerCircleDimension/2}rem)`, borderRadius: '50%', width: `${innerCircleDimension}rem`, height: `${innerCircleDimension}rem`, backgroundColor: 'white'}}>
                </Box>
                {wheelRadiuses.map(({participant, startRadius, endRadius}, index) => {
          
                    return (
                    
                            <Radiuses
                                ref={(el) => radiusesRef.current[index] = el}
                                key={index}
                                participant={participant}
                                startRadius={startRadius}
                                endRadius={endRadius}
                               
                            />
                            
                    
                    )
                })}
                 
            </Box>
            <Box>
                <ArrowDropUpIcon sx={{fontSize: '3rem'}} ref={pikeRef} />
            </Box>
           
        </Box>
  
  );
})


