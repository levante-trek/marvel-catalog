import { CharacterData, ContractCharacter } from '../types';

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

export interface UserAPI {
  id: number;
  name: string;
  password: string;
  contracts: Contract['id'][];
}

export interface Contract {
  id: number;
  contractorId: number;
  name: string;
  type: 'temporal' | 'unlimited' | 'job';
  heroe: ContractCharacter;
  description: string;
  status: 'active' | 'completed';
}
