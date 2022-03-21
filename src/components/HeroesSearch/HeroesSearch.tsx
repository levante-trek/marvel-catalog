import React from 'react';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { fontFamily } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  border: '2px solid gray',
  [theme.breakpoints.up('sm')]: {
    //marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
export interface HeroesSearchProps {
  className?: string;
  onChange: (value: string) => void;
  value: string;
}

export const HeroesSearch: React.FunctionComponent<HeroesSearchProps> = ({
  className,
  onChange,
  value,
}) => {
  return (
    <>
      <h3>My heroe browser: </h3>
      <Search>
        <InputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </>
  );
};
