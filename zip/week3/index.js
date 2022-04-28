import express from 'express';
import cors from 'cors';
import moviesRouter from  './routes/movieRouter.js';
import rentsRouter from  './routes/rentsRouter.js';
let app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/rents', rentsRouter);
app.use('/movies', moviesRouter);
const PORT = 8080
app.listen(PORT, ()=>console.log(`${PORT} has been started`));