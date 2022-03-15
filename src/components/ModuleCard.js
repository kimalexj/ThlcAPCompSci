import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { CardActionArea, CardActions } from '@mui/material';

export default function ModuleCard(props) {
  return (
    <Grid key={props.title} item xs={4}>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.imagePath}
                    alt={props.alt}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" onClick={() => setTimeout(() => window.open(props.url, "_blank"), 1000)}>
                    View
                </Button>
                <Button 
                    variant="contained" 
                    disabled={props.hideAnswer} 
                    onClick={() => setTimeout(() => window.open(props.urlSecond, "_blank"), 1000)}
                >
                    Answers
                </Button>
                <br/>
            </CardActions>
        </Card>
    </Grid>
  );
}