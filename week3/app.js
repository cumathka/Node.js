import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';


// Routers
import router from './routers/cars-routers.js'
//import routerRend from './router/rend-router.js'
let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use('/cars', router);



app.listen(3000, () => {
    console.log("listening on 3000");
});