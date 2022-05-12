import express from "express";
import bodyParser from'body-parser'; // post islemleri icin, payload okunmasini saglar
import cors from 'cors';

import moviesRouter from './router/movies-router.js';
import rentsRouter from './router/rents-router.js';

const app = express();

// Configuring body parser middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/movies', moviesRouter);
app.use('/rents', rentsRouter);


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

  
app.listen(3000, () => {
    console.log("listening on 3000");
});