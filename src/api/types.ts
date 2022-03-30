import { CharacterData } from '../types';

export interface CharactersAPIParams {
  [key: string]: string | undefined;
  name?: string;
  nameStartsWith?: string;
  modifiedSince?: string;
  limit?: string;
  offset?: string;
  orderBy?: 'name' | 'modified' | '-name' | '-modified';
  comics?: string;
  series?: string;
  events?: string;
  stories?: string;
}

export interface CharacterDataResponse {
  code: number;
  status: string;
  data: CharacterData;
}
