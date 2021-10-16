import fetch from 'node-fetch';
import config from "../config";

async function getMovies(id) {
  const url = `${config.THEMOVIEDB_API_BASE_URL}/movie/${id}?api_key=${config.THEMOVIEDB_API_KEY}`;
  const fetchUrl = new URL(url)
  const response = await fetch(fetchUrl);
  const data = response.json();
  return data;
}

async function getPopularMovies() {
  const url = `${config.THEMOVIEDB_API_BASE_URL}/discover/movie/?api_key=${config.THEMOVIEDB_API_KEY}&sort_by=popularity.desc`;
  const fetchUrl = new URL(url)
  const response = await fetch(fetchUrl);
  const data = await response.json();
  return data.results;
}

async function getTopMoviesIds(n = 3) {
  try {
    const popularMovies = await getPopularMovies();
    const ids = popularMovies.slice(0, n).map((movie) => movie.id);
    return ids;
  } catch (error) {
    console.error(`Error 🛑 : ${error.message}`);
  }
}

export default {
  getMovies,
  getPopularMovies,
  getTopMoviesIds,
};
