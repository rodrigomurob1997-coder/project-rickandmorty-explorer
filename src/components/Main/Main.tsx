import SearchForm from "../SearchForm/SearchForm";
import CharacterList from "../CharacterList/CharacterList";
import { MOCK_CHARACTERS } from "../../utils/mockCharacters";

function Main() {
  return (
    <main className="content">
      <section className="content__hero" aria-labelledby="search-title">
        <h1 id="search-title" className="content__title">
          Explora el multiverso de Rick and Morty
        </h1>
        <p className="content__description">
          Busca a cualquier personaje por su nombre y conoce su estado, especie,
          origen y última ubicación conocida.
        </p>
        <SearchForm />
      </section>
      <section className="content__results" aria-labelledby="results-title">
        <h2 id="results-title" className="content__subtitle">
          Personajes
        </h2>
        <CharacterList characters={MOCK_CHARACTERS} />
        <button type="button" className="button content__more-button">
          Mostrar más
        </button>
      </section>
    </main>
  );
}

export default Main;
