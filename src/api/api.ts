import { CharactersAPIParams } from './types';

const domain = 'https://gateway.marvel.com';

export const getParams = (params: CharactersAPIParams = {}) => {
  const paramsSearchResult: CharactersAPIParams = {};
  for (const key in params) {
    if (params[key as keyof CharactersAPIParams]) {
      paramsSearchResult[key as keyof CharactersAPIParams] =
        params[key as keyof CharactersAPIParams];
    }
  }

  return new URLSearchParams({
    ...paramsSearchResult,
    apikey: process.env.REACT_APP_MARVEL_PUBLIC_API_KEY as string,
  }).toString();
};

export const api = {
  getCharacters: (params?: CharactersAPIParams): string =>
    domain + '/v1/public/characters?' + getParams(params),
};
