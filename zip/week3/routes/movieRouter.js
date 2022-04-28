import express from "express";
const router = express.Router();
import * as SERVICE from "../services/movieService.js";
router
  .get("/", (req, res) => {
    const allMovies = SERVICE.getAllMovies();
    res.status(200).send(allMovies);
  })
  .get("/:id", (req, res) => {
    let movieId = req.params.id;
    const movie = SERVICE.getMovieById(movieId);
    res.status(200).send(movie);
  })
  .post("/", (req, res) => {
    let newMovie = req.body;
    const movie = SERVICE.addMovie(newMovie);
    res.status(200).send(movie);
  })
  .delete("/:id", (req, res) => {
    let movieId = req.params.id;
    SERVICE.deleteMovie(movieId);
    res.status(200).send(`${movieId} deleted`);
  })
  .put("/:id", (req, res) => {
    let movieId = req.params.id;
    let pUpdatedMovie = req.body;
    let newMovie = SERVICE.updateMovie(movieId, pUpdatedMovie);
    res.status(200).send(newMovie);
  });
export default router;