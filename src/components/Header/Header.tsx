import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { styled } from '@mui/material';
import marvelLogo from './Marvel_Logo.png';

export interface HeaderProps {
  className?: string;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const Header: React.FunctionComponent<HeaderProps> = ({ className }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <StyledLink to={ROUTES.HOME}>
            <img src={marvelLogo} alt='logo' />
          </StyledLink>
          <StyledLink to={ROUTES.HOME}>
            <Button color='inherit'>Inicio</Button>
          </StyledLink>
          <StyledLink to={ROUTES.HEROES}>
            <Button color='inherit'>Heroes</Button>
          </StyledLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
