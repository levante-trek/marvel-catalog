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

  const [isLoading, setIsLoading] = useState(false);
  const [heroes, setHeroes] = useState<Character[]>([]);

  useEffect(() => {
    setIsLoading(true);
    if (name === '') {
      api.getCharacters().then(({ code, status, data }) => {
        setHeroes(data.results);
      });
    } else {
    }
    setIsLoading(false);
  }, [name]);

  const onChange = (value: string) => {
    setName(value.trim());
  };


  const heroesCardList = heroes.map((item, index) => (
    <HeroeCard
      name={item.name}
      image={item.thumbnail.path + '.' + item.thumbnail.extension}
      key={index}
    />
  ));


  return (
    <>
      <h1>Heroes page is under maintenance...</h1>
      {isLoading && <div>Loading...</div>}
      <HeroesSearch onChange={onChange} />
      {heroes.length !== 0 && (
        <Box mt={2}>
          <HeroesList items={heroesCardList} />
        </Box>
      )}
    </>
  );
};
