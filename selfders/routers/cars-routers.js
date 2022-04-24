import express from 'express';
const router = express.Router();
import * as service from '../service/cars-service.js';

/** Get */
router.get('/', function (req, res, next) {
    const allCars = service.getAllCars();
    res.send(allCars);
})

/**Get by Id */
router.get('/:id', function (req, res, next) {
    let carId = req.params.id;
    const car = service.getCarById(carId);
    res.send(car);
})

/**add a car */

router.post('/', function (req, res, next) {
    const newCar = req.body;
    service.createCar(newCar);
    res.status(201).send()
})


router.delete('/:id', function (req, res, next) {
    let carId = req.params.id;
    service.deleteCar(carId);
    res.status(200);
})

router.put('/:id', function (req, res, next) {
    let carId = req.params.id;
    let updateCar = req.body;
    service.updateCar(carId, updateCar);
    res.status(200).send();
})
export default router;



