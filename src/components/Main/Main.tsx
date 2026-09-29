import SearchForm from "../SearchForm/SearchForm";
import CharacterList from "../CharacterList/CharacterList";
import Preloader from "../Preloader/Preloader";
import ResultMessage from "../ResultMessage/ResultMessage";
import type { Character } from "../../types/character";
import { NOT_FOUND_MESSAGE } from "../../utils/constants";

interface MainProps {
  query: string;
  characters: Character[];
  hasMore: boolean;
  isLoading: boolean;
  isLoadingMore: boolean;
  errorMessage: string;
  onSearch: (query: string) => void;
  onShowMore: () => void;
}

function Main({
  query,
  characters,
  hasMore,
  isLoading,
  isLoadingMore,
  errorMessage,
  onSearch,
  onShowMore,
}: MainProps) {
  const resultsTitle = query ? `Resultados para "${query}"` : "Personajes";

  function renderResults() {
    if (isLoading) {
      return <Preloader />;
    }

    if (characters.length === 0) {
      return errorMessage ? (
        <ResultMessage message={errorMessage} isError />
      ) : (
        <ResultMessage message={NOT_FOUND_MESSAGE} />
      );
    }

    return (
      <>
        <CharacterList characters={characters} />
        {errorMessage && <ResultMessage message={errorMessage} isError />}
        {isLoadingMore && <Preloader />}
        {hasMore && !isLoadingMore && (
          <button
            type="button"
            className="button content__more-button"
            onClick={onShowMore}
          >
            Mostrar más
          </button>
        )}
      </>
    );
  }

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
        <SearchForm
          initialQuery={query}
          isDisabled={isLoading}
          onSearch={onSearch}
        />
      </section>
      <section className="content__results" aria-labelledby="results-title">
        <h2 id="results-title" className="content__subtitle">
          {resultsTitle}
        </h2>
        {renderResults()}
      </section>
    </main>
  );
}

export default Main;
