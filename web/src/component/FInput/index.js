// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ({ label }) {
    // console.log(label);
    
    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
            noValidate
            autoComplete="off"
        >
            <TextField  id="outlined-basic" label="lable" variant="outlined" />
        </Box>
    );
}