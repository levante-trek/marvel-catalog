import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useIntersection } from 'react-use';
import { api } from '../../api/api';
import { CharacterDataResponse } from '../../api/types';
import { HeroesList, HeroeCard, HeroesSearch } from '../../components';
import { useFetch } from '../../hooks/useFetch';
import { Character } from '../../types';

export interface HeroesProps {
  className?: string;
}

export const Heroes: React.FunctionComponent<HeroesProps> = ({ className }) => {
  const [name, setName] = useState('');
  const [offset, setOffset] = useState(0);
  const intersectionRef = React.useRef(null);
  const [handleHeroes, setHandleHeroes] = useState<Character[]>([]);

  const PAGINATION = 20;
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '30px',
    threshold: 0,
  });

  const { data, isLoading } = useFetch<CharacterDataResponse>(
    api.getCharacters({ nameStartsWith: name, offset: offset.toString() })
  );

  useEffect(() => {
    const heroes = data?.data.results || [];
    setHandleHeroes([...handleHeroes, ...heroes]);
  }, [data]);

  const isLastPage = !data ? true : handleHeroes.length === data?.data.total;

  useEffect(() => {
    if (!isLoading && intersection?.isIntersecting && !isLastPage) {
      setOffset((offset) => offset + PAGINATION);
    }
  }, [intersection, isLastPage, isLoading]);

  const onChange = (value: string) => {
    setName(value.trim());
    setHandleHeroes([]);
    setOffset(0);
  };

  const heroesCardList = handleHeroes.map((item, index) => (
    <HeroeCard
      name={item.name}
      image={item.thumbnail.path + '.' + item.thumbnail.extension}
      description={item.description}
      key={index}
    />
  ));

  return (
    <>
      <h1>Heroes page is under maintenance...</h1>
      <HeroesSearch onChange={onChange} />

      <Box mt={2}>
        <HeroesList items={heroesCardList} />
        {isLoading && (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </Box>
      {handleHeroes.length !== 0 && !intersection?.isIntersecting && (
        <div ref={intersectionRef} />
      )}
    </>
  );
};
