import CharacterCard from "../CharacterCard/CharacterCard";
import type { Character } from "../../types/character";

interface CharacterListProps {
  characters: Character[];
}

function CharacterList({ characters }: CharacterListProps) {
  return (
    <ul className="cards">
      {characters.map((character) => (
        <li key={character.id} className="cards__item">
          <CharacterCard character={character} />
        </li>
      ))}
    </ul>
  );
}

export default CharacterList;
