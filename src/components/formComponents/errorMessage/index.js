import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField, Typography } from '@mui/material'



export const ErrorMessage = ({error}) => {
    
   

    let errorMessage = error?.message || ''

    return (
        <Typography textAlign={'left'} minHeight={'2rem'} color={'red'}>{errorMessage}</Typography>
    )
}
