import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ({ label, type, helperText }) {
    console.log(label);
    
    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '320px' } }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic"
                helperText={helperText}
                type={type}
                label={label}
                variant="outlined"
                size="small"
                fullWidth
            />
        </Box>
    );
}