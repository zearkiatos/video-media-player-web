import config from '../../src/config';
describe("Test configuration variables", () => {
  test("Should return the configuration variables", () => {
    expect(config.ENVIRONMENT).toBe(process.env.NODE_ENV);
    expect(config.THEMOVIEDB_API_BASE_URL).toBe(process.env.THEMOVIEDB_API_BASE_URL);
    expect(config.THEMOVIEDB_API_KEY).toBe(process.env.THEMOVIEDB_API_KEY);
  });
});