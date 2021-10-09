require("dotenv").config();
const config = {
  ENVIRONMENT: process.env.NODE_ENV,
  THEMOVIEDB_API_BASE_URL: process.env.THEMOVIEDB_API_BASE_URL,
  THEMOVIEDB_API_KEY: process.env.THEMOVIEDB_API_KEY,
};

export default config;
