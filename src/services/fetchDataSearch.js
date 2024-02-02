import {FILM_SEARCH_BY_NAME, API_KEY} from './constans';

export default async function fetchDataSearch(nameFilm) {
  const url = `${FILM_SEARCH_BY_NAME}${nameFilm}&apikey=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}