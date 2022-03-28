import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { api } from '../../api/api';
import { HeroesList, HeroeCard, HeroesSearch } from '../../components';
import { useFetch } from '../../hooks/useFetch';
import { Character } from '../../types';

export interface HeroesProps {
  className?: string;
}

export const Heroes: React.FunctionComponent<HeroesProps> = ({ className }) => {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [heroes, setHeroes] = useState<Character[]>([]);

  useEffect(() => {
    api.getCharacters().then(({ code, status, data }) => {
      setHeroes(data.results);
    });
  }, []);

  const heroeSingleCard = heroes.map((item, index) => (
    <HeroeCard
      name={item.name}
      image={item.thumbnail.path + '.' + item.thumbnail.extension}
      key={index}
    />
  ));

  const onChange = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <h1>Heroes page</h1>
      <HeroesSearch onChange={onChange} />
      <Box mt={2}>
        <HeroesList items={heroeSingleCard} />
      </Box>
    </>
  );
};
