const API_KEY = "die krijg je lekker niet";
const base_endpoint = "https://api.themoviedb.org/3";

const getMovieGenres = async () => {
  // api.themoviedb.org/3/genre/movie/list?api_key=jouwkeyhier
  const APIEndpoint = `${base_endpoint}/genre/movie/list?api_key=${API_KEY}`;
  try {
    const res = await fetch(APIEndpoint, { method: "GET" });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const getMovieById = async movieId => {
  // api.themoviedb.org/3/find/tt6105098?external_source=imdb_id&api_key=jouwkeyhier
  const movieByIDEndpoint = `${base_endpoint}/find/${movieId}?external_source=imdb_id&api_key=${API_KEY}`;
  try {
    const res = await fetch(movieByIDEndpoint, { method: "GET" });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const getTopRatedMovies = async () => {
  // https://api.themoviedb.org/3/movie/top_rated?page=1&api_key=jouwkeyhier
  const topRatedMoviesEndpoint = `${base_endpoint}/movie/top_rated?api_key=${API_KEY}`;
  try {
    const res = await fetch(topRatedMoviesEndpoint, { method: "GET" });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const getTopRatedMoviesFromYearX = async year => {
  // https://api.themoviedb.org/3/discover/movie?primary_release_year=2010&sort_by=vote_average.desc
  const topRatedMoviesEndpoint = `${base_endpoint}/discover/movie?primary_release_year=${year}&sort_by=vote_average.desc&vote_count.gte=2000&api_key=${API_KEY}`;
  try {
    const res = await fetch(topRatedMoviesEndpoint, { method: "GET" });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const getTopRatedMoviesInGenreId = async genreId => {
  const topRatedMoviesEndpoint = `${base_endpoint}/discover/movie?with_genres=${genreId}&sort_by=vote_average.desc&vote_count.gte=2000&api_key=${API_KEY}`;
  try {
    const res = await fetch(topRatedMoviesEndpoint, { method: "GET" });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
