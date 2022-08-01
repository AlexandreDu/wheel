import React, { useRef } from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
// container, circle, radius
export const PlayersList = ({ players, handleRemovePlayer }) => {

   
    
    
    

    return (
 
            <List sx={{maxHeight: '13rem', overflow: 'auto'}}>
                {players.map((player, index) => (
                    <ListItem key={index} sx={{}}>
                        <ListItemText
                            primary={<Typography>{player}</Typography>}
                            secondary={"player"}
                        />
                        <ListItemIcon 
                            sx={{
                                '&.MuiListItemIcon-root': {
                                minWidth: '0'
                                }
                            }}>
                            <ClearIcon sx={{cursor: 'pointer'}} onClick={() => handleRemovePlayer(index)}/>
                        </ListItemIcon>
                    </ListItem>
                ))}
            </List>
        )
}


