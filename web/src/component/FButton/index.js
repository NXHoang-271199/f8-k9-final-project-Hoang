import * as React from 'react';
import Button from '@mui/material/Button';

export default function () {
    return (
        // <button className='rounded bg-black text-white w-80 h-10'>Save Changes</button>
        <Button sx={{ width: '310px', backgroundColor: 'black', color: 'white'}} variant="contained" href="#contained-buttons">Continue</Button>
    )
}