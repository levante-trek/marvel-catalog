import React from 'react';
import {
  Backdrop,
  Button,
  Card,
  CardContent,
  CardMedia,
  Fade,
  Modal,
  Typography,
} from '@mui/material';

export interface HeroeDetailsModalProps {
  className?: string;
  name: string;
  image: string;
  description: string;
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const HeroeDetailsModal: React.FunctionComponent<HeroeDetailsModalProps> =
  ({ className, name, description, image, handleClose, open }) => {
    return (
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Card sx={style}>
            <CardMedia component='img' image={image} alt={name} />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {name}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {description || 'Anonymous heroe description.'}
              </Typography>
            </CardContent>
            <Button onClick={handleClose} variant='contained' size='small'>
              Go back
            </Button>
          </Card>
        </Fade>
      </Modal>
    );
  };
