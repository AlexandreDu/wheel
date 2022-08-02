import React, { useRef } from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { ClassNames } from "@emotion/react";
import ClearIcon from '@mui/icons-material/Clear';
import { ellipsis } from "../../utils/ellipsis";
import {TransitionGroup, CSSTransition} from 'react-transition-group'


export const PlayersList = ({ players, handleRemovePlayer }) => {

   

  const visibleStyles = {
    opacity: 1,
  }
  
  const hiddenStyles = {
    opacity: 0,
  }
    

    return (
 
        <ClassNames>
          {({ css, cx }) => (
            <TransitionGroup component={List}>
            
                
                    {players.map(({name, id}, index) => (
                        <CSSTransition key={id} timeout={300} classNames={{
                            appear: css(hiddenStyles),
                            appearActive: css({
                              ...visibleStyles,
                              transition: 'all 500ms'
                            }),
                            enter: css(hiddenStyles),
                            enterActive: css({
                              ...visibleStyles,
                              transition: 'all 500ms'
                            }),
                            enterDone: css({
                              ...visibleStyles,
                              color: '#0ad',
                              transition: 'color 300ms'
                            }),
                            exit: css(visibleStyles),
                            exitActive: css({
                              ...hiddenStyles,
                              transition: 'all 500ms'
                            }),
                            exitDone: 'my-done-exit'
                          }}>
                            <ListItem>
                                <ListItemText
                                    primary={<Typography>{ellipsis(name, 15)}</Typography>}
                                    secondary={`player ${index + 1}`}
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
                        </CSSTransition>
                    ))}
                   
                </TransitionGroup>
                 )}
          </ClassNames>
       
        
    )
}