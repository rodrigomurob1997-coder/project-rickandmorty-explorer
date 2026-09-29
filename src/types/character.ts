export type CharacterStatus = "Alive" | "Dead" | "unknown";

export interface CharacterLocation {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
}

export interface PageInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharactersPage {
  info: PageInfo;
  results: Character[];
}

export interface CharactersSearch {
  query: string;
  characters: Character[];
  nextPageUrl: string | null;
}
