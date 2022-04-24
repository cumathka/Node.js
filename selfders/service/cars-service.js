
import db from '../dp.json' 

export function createCar(pCar) {
    db.push(pCar)
    return pCar;
}

export function deleteCar(pId) {
    db = db.filter(car => car.id != pId);
}

export function getAllCars() {
    return db;
}

export function getCarById(pId) {
    let car = db.find(car => car.id == pId)
    return car;
}

export function updateCar(pId, pUpdateCar) {
    let car = getCarById(pId);
    car.marka = pUpdateCar.marka;
    car.yil = pUpdateCar.yil;
    car.model = pUpdateCar.model;
}


