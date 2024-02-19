const express = require("express");
const cors = require("cors");
const axios = require("axios");
const url = require("url");
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const API_KEY = process.env.API_KEY;
const API_URL = "https://api.themoviedb.org/3/";

const app = express();
app.use(cors());

app.listen(PORT, () => console.log(`Server listening to PORT ${PORT}`));

app.get("/", async (req, res) => {
  res.json("succes");
});

app.get("/popular", async (req, res) => {
  try {
    const params = new URLSearchParams({
      api_key: API_KEY,
      language: "en-US",
      ...url.parse(req.url, true).query,
    });

    const { data } = await axios.get(`${API_URL}movie/popular?${params}`);

    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

app.get("/search", async (req, res) => {
  try {
    const params = new URLSearchParams({
      api_key: API_KEY,
      language: "en-US",
      ...url.parse(req.url, true).query,
    });

    const { data } = await axios.get(`
    ${API_URL}search/movie?${params}`);

    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

app.get("/info/:movieId", async (req, res) => {
  try {
    const params = new URLSearchParams({
      api_key: API_KEY,
    });

    const { data } = await axios.get(
      `${API_URL}movie/${req.params.movieId}?${params}`
    );

    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

app.get("/credits/:movieId", async (req, res) => {
  try {
    const params = new URLSearchParams({
      api_key: API_KEY,
    });

    const { data } = await axios.get(
      `${API_URL}movie/${req.params.movieId}/credits?${params}`
    );

    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

app.get("/videos/:movieId", async (req, res) => {
  try {
    const params = new URLSearchParams({
      api_key: API_KEY,
    });

    const { data } = await axios.get(
      `${API_URL}movie/${req.params.movieId}/videos?${params}`
    );

    res.json(data);
  } catch (error) {
    res.json(error);
  }
});
