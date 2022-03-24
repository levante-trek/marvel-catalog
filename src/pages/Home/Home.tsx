import React from 'react';

export interface HomeProps {
  className?: string;
}

export const Home: React.FunctionComponent<HomeProps> = ({ className }) => {
  return (
    <div>
      <h1>Bienvenidos al universo Marvel</h1>
    </div>
  );
};
