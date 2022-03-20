import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export interface HeaderProps {
  className?: string;
}

export const Header: React.FunctionComponent<HeaderProps> = ({ className }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Heroes</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
