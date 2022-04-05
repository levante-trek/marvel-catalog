import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { HeroeDetailsModal } from '../HeroeDetailsModal';

export interface HeroeCardProps {
  className?: string;
  name: string;
  image: string;
  description: string;
}

export const HeroeCard: React.FunctionComponent<HeroeCardProps> = ({
  className,
  name,
  image,
  description,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component='img'
            height='200'
            image={image}
            alt='Heroe avatar'
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              align='center'
            >
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <HeroeDetailsModal
        open={open}
        handleClose={handleClose}
        name={name}
        description={description}
        image={image}
      />
    </>
  );
};
