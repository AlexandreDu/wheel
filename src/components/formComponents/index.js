import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField, Typography, Box } from '@mui/material'
import { ErrorMessage } from './errorMessage'



export const InputText = ({control, name, label, rules}) => {

   


    return (
        <Controller
            control={control}
            defaultValue='' 
            name={name}
            rules={rules}
            render={({
                field: {onChange, value},
                fieldState: { invalid, isTouched, isDirty, error }
            }) => {

                let inputProps = {
                    onChange,
            
                    value: value,
                    required: true,
                    label,
                    type: 'email',
                    margin: 'normal',
             
                }
                
                return (
                <>
                    <TextField
                        onChange={onChange}
                        value={value}
                        required
                        label={label}
                        type='email'
                        margin='normal'
                        inputProps={inputProps}
                    />
                    <ErrorMessage error={error} />
                </>
        )}}
        />
    )
}


export const TextArea = ({control, name, label, rules}) => {


    return (
        <Controller
            control={control}
            defaultValue='' 
            name={name}
            rules={rules}
            render={({
                field: {onChange, value},
                fieldState: { invalid, isTouched, isDirty, error },
            }) => (
              
                <>
                    <TextField
                        onChange={onChange}
                        value={value}
                        required
                        label={label}
                        multiline={true}
                        maxRows={4}
                        margin='normal'
                        
                    />
                    <ErrorMessage error={error} />
                </>
        )}
        />
    )
}
