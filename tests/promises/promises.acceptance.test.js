import promises from "../../src/promises/promises";
import MovieBuilder from "../builders/movieBuilder";
describe("Test acceptation test for promises use the movie db api", () => {
  test("Should return the ids of n most popular movies", async () => {
    const movies = await promises.getTopMoviesIds(2);

    expect(movies.length).toBe(2);
  });

  test("Should return a list with the most popular movies", async () => {
    const movies = await promises.getPopularMovies();
    
    expect(movies.length).toBe(20);
  });

  test("Should search and return the movie by id", async () => {
    const expectedResult = new MovieBuilder().build();
    
    const movie = await promises.getMovies(451048);
    
    expect(movie.overview).toBe(expectedResult.overview);
    expect(movie.title).toBe(expectedResult.title);
  });
});
