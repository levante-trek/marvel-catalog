import React, { ChangeEvent, useEffect, useState } from 'react';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { useDebounce } from 'use-debounce';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  // marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  border: '2px solid gray',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '35%',
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
  const [val, setVal] = useState('');
  const [debouncedValue, setDebouncedValue] = React.useState('');
  const [debounce, cancel] = useDebounce(val, 3000);
  useEffect(() => {
    setDebouncedValue(debounce);
  }, [debounce]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  return (
    <>
      <p
        style={{
          fontSize: '1rem',
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          margin: '0',
          marginBottom: '5px',
        }}
      >
        My heroe browser:
      </p>
      <Search>
        <InputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          value={val}
          onChange={handleChange}
        />
      </Search>
      <p>Val: {val}</p>
      <p>Debounced value: {debouncedValue}</p>
      <button onClick={() => cancel}>Cancel debounce</button>
    </>
  );
};
