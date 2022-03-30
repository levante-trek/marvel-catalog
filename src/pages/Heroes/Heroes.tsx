import { Box } from '@mui/system';
import React, { useState } from 'react';
import { api } from '../../api/api';
import { CharacterDataResponse } from '../../api/types';
import { HeroesList, HeroeCard, HeroesSearch } from '../../components';
import { useFetch } from '../../hooks/useFetch';

export interface HeroesProps {
  className?: string;
}

export const Heroes: React.FunctionComponent<HeroesProps> = ({ className }) => {
  const [name, setName] = useState('');

  const { data, isLoading } = useFetch<CharacterDataResponse>(
    api.getCharacters({ nameStartsWith: name })
  );
  const heroes = data?.data.results || [];

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
      <HeroesSearch onChange={onChange} />
      {isLoading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        heroes.length !== 0 && (
          <Box mt={2}>
            <HeroesList items={heroesCardList} />
          </Box>
        )
      )}
    </>
  );
};
