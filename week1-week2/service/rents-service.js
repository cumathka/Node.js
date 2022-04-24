const rents = [
    {
        "movieId": 10002,
        "duration": 10,
        "person": "Hi Coders"
    }
]

export function createRent(pRent) {
    rents.push(pRent);
    return pRent;
}

export function getAllRents() {
    return rents;
}

export function getRentById(pId) {
    const rent = rents.find(r => r.id == pId);
    return rent;
}

export function updateRent(pId, pUpdateRent) {
    let rents = getRentById(pId);
    rents.name = pUpdateRent.name;
    rents.year = pUpdateRent.year;
    rents.genre = pUpdateRent.genre;
    rents.income = pUpdateRent.income;
}

export function deleteRents(pId) {
    rents = rents.filter(m => m.id != pId);
}