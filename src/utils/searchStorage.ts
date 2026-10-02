import { SEARCH_STORAGE_KEY } from "./constants";
import type { CharactersSearch } from "../types/character";

export function getSavedSearch(): CharactersSearch | null {
  try {
    const savedSearch = localStorage.getItem(SEARCH_STORAGE_KEY);
    return savedSearch ? (JSON.parse(savedSearch) as CharactersSearch) : null;
  } catch {
    return null;
  }
}

export function saveSearch(search: CharactersSearch) {
  try {
    localStorage.setItem(SEARCH_STORAGE_KEY, JSON.stringify(search));
  } catch {
    // Si el navegador bloquea localStorage, la búsqueda solo vive en memoria.
  }
}
