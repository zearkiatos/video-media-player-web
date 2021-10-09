import config from "../config";

function getMovies(id) {
  const URL = `${config.THEMOVIEDB_API_BASE_URL}/movie/${id}?api_key=${config.THEMOVIEDB_API_KEY}`;
  return fetch(URL).then((response) => response.json());
}

function getPopularMovies() {
  const URL = `${config.THEMOVIEDB_API_BASE_URL}/discover/movie/?api_key=${config.THEMOVIEDB_API_KEY}&sort_by=popularity.desc&`;
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.results);
}

async function getTopMoviesIds(n = 3) {
  //   return getPopularMovies().then((popularMovies) =>
  //     popularMovies.slice(0, n).map((movie) => movie.id)
  //   );
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
