import { API_BASE_URL } from "./constants";
import type { CharactersPage } from "../types/character";

const NOT_FOUND_STATUS = 404;

const EMPTY_PAGE: CharactersPage = {
  info: { count: 0, pages: 0, next: null, prev: null },
  results: [],
};

async function requestCharacters(
  url: string,
  signal?: AbortSignal,
): Promise<CharactersPage> {
  const response = await fetch(url, { signal });

  if (response.status === NOT_FOUND_STATUS) {
    return EMPTY_PAGE;
  }

  if (!response.ok) {
    throw new Error(`Error ${response.status}`);
  }

  return response.json() as Promise<CharactersPage>;
}

export function searchCharacters(name: string, signal?: AbortSignal) {
  const url = new URL(`${API_BASE_URL}/character`);

  if (name) {
    url.searchParams.set("name", name);
  }

  return requestCharacters(url.toString(), signal);
}

export function getCharactersPage(pageUrl: string, signal?: AbortSignal) {
  return requestCharacters(pageUrl, signal);
}
