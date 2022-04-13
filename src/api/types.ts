import { Character, CharacterData } from '../types';

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

export interface User {
  id: number;
  name: string;
  password: string;
  logged: boolean;
  contracts: Contract['id'][];
}

export interface Contract {
  id: number;
  name: string;
  type: 'temporal' | 'unlimited' | 'by_work';
  heroe: Character;
  description: string;
  status: 'active' | 'completed';
}
