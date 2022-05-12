import express from 'express';
const rentsRouter = express.Router();
import * as service from '../service/rents-service.js';

/**Get All Movie */

rentsRouter.get('/', function (req, res, next) {
    const allRents = service.getAllRents();
    res.send(allRents);
})

/**Get by Id */
rentsRouter.get('/:id', function (req, res, next) {
    const rentsId = req.params.id;
    const rents = service.getRentById(rentsId);
    res.send(rents);
})

/**Add new Movie */

rentsRouter.post('/', function (req, res, next) {
    const newRent = req.body;
    service.createRent(newRent);
    res.status(200).send("ok");
})


export default rentsRouter;