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
