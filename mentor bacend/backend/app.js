import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import moviesRouter from './router/movies-router.js';
import rentsRouter from './router/rents-router.js';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/movies', moviesRouter);
app.use('/rents', rentsRouter);

app.listen(3000, () => {
    console.log("listening on 3000");
});