import type { CharactersPage, CharacterStatus } from "../types/character";

export const APP_TITLE = "Rick and Morty Explorer";

export const AUTHOR_NAME = "Rodrigo Muro Barajas";

export const REPOSITORY_URL =
  "https://github.com/rodrigomurob1997-coder/project-rickandmorty-explorer";

export const API_BASE_URL = "https://rickandmortyapi.com/api";

export const NOT_FOUND_STATUS = 404;

export const EMPTY_PAGE: CharactersPage = {
  info: { count: 0, pages: 0, next: null, prev: null },
  results: [],
};

export const API_DOCS_URL = "https://rickandmortyapi.com/documentation";

export const TRIPLETEN_URL = "https://tripleten.com/";

export const SEARCH_STORAGE_KEY = "rickAndMortySearch";

export const NOT_FOUND_MESSAGE = "No se encontró nada";

export const REQUEST_ERROR_MESSAGE =
  "Algo salió mal con la solicitud. Puede ser un problema de conexión o del servidor. Inténtalo de nuevo más tarde.";

export const STATUS_LABELS: Record<CharacterStatus, string> = {
  Alive: "Vivo",
  Dead: "Muerto",
  unknown: "Desconocido",
};

export const UNKNOWN_VALUE = "unknown";

export const TECHNOLOGIES = [
  "React",
  "TypeScript",
  "Vite",
  "React Router",
  "CSS con metodología BEM",
];
