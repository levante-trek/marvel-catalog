import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export interface HeroeCardProps {
  className?: string;
  name: string;
  image: string;
}

export const HeroeCard: React.FunctionComponent<HeroeCardProps> = ({
  className,
  name,
  image,
}) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="Heroe avatar"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
