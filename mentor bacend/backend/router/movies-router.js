import express from 'express';
const movieRouter = express.Router();
import * as service from '../service/movies-service.js';

/**Get All Movie */

movieRouter.get('/', function (req, res, next) {
    const allMovies = service.getAllMovies();
    res.send(allMovies);
})

/**Get by Id */
movieRouter.get('/:id', function (req, res, next) {
    const movieId = req.params.id;
    const movie = service.getMovieById(movieId);
    res.send(movie);
})

/**Add new Movie */

movieRouter.post('/', function (req, res, next) {
    const newMovie = req.body;
    service.createMovie(newMovie);
    res.status(200).send("ok");
})

/**Update Movie */

movieRouter.put('/:id', function (req, res, next) {
    const movieId = req.params.id;
    const updateMovie = req.body;
    service.updateMovie(movieId, updateMovie);
    res.status(200).send("ok");
})

/**Delete movie */

movieRouter.delete('/:id', function (req, res, next) {
    const movieId = req.params.id;
    service.deleteMovie(movieId)
    res.status(200).send("ok");
})

export default movieRouter;