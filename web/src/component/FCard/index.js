import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { transform } from 'next/dist/build/swc/generated-native';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ({maxWidth, maxHeight, content, title}) {
  return (
    <Card sx={{ maxWidth: maxWidth,  }}>
      <CardContent sx={{  }}>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 18, textTransform: "uppercase" }}>
          {title}
        </Typography>
        <Typography variant="h5" component="p">
          {/* be{bull}nev{bull}o{bull}lent */}
          {content}
        </Typography>
        {/* <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography> */}
        {/* <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}