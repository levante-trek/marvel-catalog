import { CharactersAPIParams } from './types';

const domain = 'https://gateway.marvel.com';

export const getParams = (params: CharactersAPIParams = {}) => {
  const queSeYo: CharactersAPIParams = {};
  for (const key in params) {
    if (params[key as keyof CharactersAPIParams]) {
      queSeYo[key as keyof CharactersAPIParams] =
        params[key as keyof CharactersAPIParams];
    }
  }

  return new URLSearchParams({
    ...queSeYo,
    apikey: process.env.REACT_APP_MARVEL_PUBLIC_API_KEY as string,
  }).toString();
};

export const api = {
  getCharacters: (params?: CharactersAPIParams): string =>
    domain + '/v1/public/characters?' + getParams(params),
};
