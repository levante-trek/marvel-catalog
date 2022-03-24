import React from 'react';

export interface HeroesProps {
  className?: string;
}

export const Heroes: React.FunctionComponent<HeroesProps> = ({ className }) => {
  return <h1>Heroes page</h1>;
};
