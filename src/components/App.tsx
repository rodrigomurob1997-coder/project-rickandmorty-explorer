import { useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Main from "./Main/Main";
import About from "./About/About";
import Footer from "./Footer/Footer";
import type { CharactersPage, CharactersSearch } from "../types/character";
import { REQUEST_ERROR_MESSAGE } from "../utils/constants";
import { getCharactersPage, searchCharacters } from "../utils/rickAndMortyApi";
import { getSavedSearch, saveSearch } from "../utils/searchStorage";

function createSearch(query: string, page: CharactersPage): CharactersSearch {
  return { query, characters: page.results, nextPageUrl: page.info.next };
}

function isAbortError(error: unknown) {
  return error instanceof DOMException && error.name === "AbortError";
}

function App() {
  const [search, setSearch] = useState<CharactersSearch | null>(getSavedSearch);
  const [isLoading, setIsLoading] = useState<boolean>(search === null);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const requestControllerRef = useRef<AbortController | null>(null);

  function updateSearch(newSearch: CharactersSearch) {
    setSearch(newSearch);
    saveSearch(newSearch);
  }

  function startRequest() {
    requestControllerRef.current?.abort();
    const controller = new AbortController();
    requestControllerRef.current = controller;
    return controller;
  }

  useEffect(() => {
    if (getSavedSearch() !== null) {
      return;
    }

    const controller = new AbortController();
    requestControllerRef.current = controller;

    searchCharacters("", controller.signal)
      .then((page) => {
        const initialSearch = createSearch("", page);
        setSearch(initialSearch);
        saveSearch(initialSearch);
      })
      .catch((error: unknown) => {
        if (!isAbortError(error)) {
          setErrorMessage(REQUEST_ERROR_MESSAGE);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  function handleSearch(query: string) {
    const controller = startRequest();
    setIsLoading(true);
    setIsLoadingMore(false);
    setErrorMessage("");

    searchCharacters(query, controller.signal)
      .then((page) => updateSearch(createSearch(query, page)))
      .catch((error: unknown) => {
        if (!isAbortError(error)) {
          setSearch({ query, characters: [], nextPageUrl: null });
          setErrorMessage(REQUEST_ERROR_MESSAGE);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      });
  }

  function handleShowMore() {
    const nextPageUrl = search?.nextPageUrl;

    if (!search || !nextPageUrl) {
      return;
    }

    const controller = startRequest();
    setIsLoadingMore(true);
    setErrorMessage("");

    getCharactersPage(nextPageUrl, controller.signal)
      .then((page) =>
        updateSearch({
          query: search.query,
          characters: [...search.characters, ...page.results],
          nextPageUrl: page.info.next,
        }),
      )
      .catch((error: unknown) => {
        if (!isAbortError(error)) {
          setErrorMessage(REQUEST_ERROR_MESSAGE);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoadingMore(false);
        }
      });
  }

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              query={search?.query ?? ""}
              characters={search?.characters ?? []}
              hasMore={Boolean(search?.nextPageUrl)}
              isLoading={isLoading}
              isLoadingMore={isLoadingMore}
              errorMessage={errorMessage}
              onSearch={handleSearch}
              onShowMore={handleShowMore}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
