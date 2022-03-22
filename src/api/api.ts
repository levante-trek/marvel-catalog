import { CharacterDataResponse, CharactersAPIParams } from './types';

const domain = 'https://gateway.marvel.com';

const getParams = (params: CharactersAPIParams = {}) => {
  return new URLSearchParams({
    apikey: process.env.REACT_APP_MARVEL_PUBLIC_API_KEY as string,
    ...params,
  });
};

export const api = {
  getCharacters: (
    params?: CharactersAPIParams
  ): Promise<CharacterDataResponse> =>
    fetch(domain + '/v1/public/characters?' + getParams(params)).then((res) =>
      res.json()
    ),
};
