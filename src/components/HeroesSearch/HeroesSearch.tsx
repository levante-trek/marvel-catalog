import React, { ChangeEvent, useState } from 'react';
import InputBase from '@mui/material/InputBase';
import { useDebouncedCallback } from 'use-debounce';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import { Search, SearchIconWrapper } from './styles';

export interface HeroesSearchProps {
  className?: string;
  onChange: (value: string) => void;
}

export const HeroesSearch: React.FunctionComponent<HeroesSearchProps> = ({
  className,
  onChange,
}) => {
  const [val, setVal] = useState('');

  const debounced = useDebouncedCallback((value) => {
    onChange(value);
  }, 1000);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
    debounced(e.target.value);
  };

  return (
    <>
      <Typography
        variant='subtitle1'
        gutterBottom
        component='div'
        sx={{ fontWeight: 'bold' }}
      >
        My heroe browser:
      </Typography>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <InputBase
          placeholder='Search…'
          inputProps={{ 'aria-label': 'search' }}
          value={val}
          onChange={handleChange}
          sx={{ display: 'flex', paddingLeft: '32px' }}
        />
      </Search>
    </>
  );
};
