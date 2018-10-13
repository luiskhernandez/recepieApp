const BASE_API = "https://yts.am/api/v2/";

class Api {
  async getSuggestion (id) {
    const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
    const { data: { movies } } = await query.json();
    return movies;
  }

  async getMovies () {
    const query = await fetch(`${BASE_API}list_movies.json`);
    const { data: { movies } } = await query.json();
    return movies;
  }
}

export default new Api();
