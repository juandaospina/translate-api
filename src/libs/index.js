const axios = require("axios");
require('dotenv').config();

const API_TRANSLATE = "https://google-translator9.p.rapidapi.com";

const instance = axios.create({
  baseURL: API_TRANSLATE,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Host": "google-translator9.p.rapidapi.com",
    "X-RapidAPI-Key": undefined, // process.env.TRANSLATOR_API_KEY
  },
  timeout: 3000,
});

module.exports = {
  API_TRANSLATE,
  instance,
};
