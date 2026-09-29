import type { CharacterStatus } from "../types/character";

export const APP_TITLE = "Rick and Morty Explorer";

export const AUTHOR_NAME = "Rodrigo Muro Barajas";

export const REPOSITORY_URL =
  "https://github.com/rodrigomurob1997-coder/project-rickandmorty-explorer";

export const API_DOCS_URL = "https://rickandmortyapi.com/documentation";

export const TRIPLETEN_URL = "https://tripleten.com/";

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
