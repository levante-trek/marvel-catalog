import React from 'react';
import Grid from '@mui/material/Grid';

export interface HeroesListProps {
  className?: string;
  items: Array<React.ReactNode>;
}

export const HeroesList: React.FunctionComponent<HeroesListProps> = ({
  className,
  items = [],
}) => {
  return (
    <Grid container spacing={2}>
      {items.map((item, index) => (
        <Grid item xs={2} key={index}>
          {item}
        </Grid>
      ))}
    </Grid>
  );
};
