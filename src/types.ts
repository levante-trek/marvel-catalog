export interface CharacterData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface ContractCharacter {
  id: Character['id'];
  name: Character['name'];
  description: Character['description'];
  image: string;
}

export interface User {
  name: string;
  password: string;
}
