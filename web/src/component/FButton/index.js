import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ({ content, width,
    backgroundColor, color }) {
    return (
        // <button className='rounded bg-black text-white w-80 h-10'>Save Changes</button>
        // <Button fullWidth sx={{backgroundColor: 'black', color: 'white'}} variant="contained" href="#contained-buttons">{content}</Button>
    <Stack spacing={0} direction="row" width={width}>
        <Button fullWidth  sx={{backgroundColor: {backgroundColor}, color: {color}}} variant="contained" href="#contained-buttons">{content}</Button>
    </Stack>
    )
}