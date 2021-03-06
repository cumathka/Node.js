const personList = [
    {
        "movieId": 10002,
        "duration": 10,
        "person": "Hi Coders"
    }
]
const deleteRent = (pId) => personList = personList.filter(m => m.id !=pId)
const getRents = () =>  personList
const getRentByID = (rentId) =>  personList.filter((pId) => pId.id  == rentId)
const editRent = (pId,pupdatedRent) => {
    const rent = personList.find(p => p.id == pId);
    rent.name = pupdatedRent.name
    rent.person = pupdatedRent.person
    rent.duration = pupdatedRent.duration
    rent.movieId = pupdatedRent.movieId
}
const postRent = (pMovie) => {
    personList.push(pMovie)
    return pMovie;  
}
export  {deleteRent,getRents,getRentByID,editRent,postRent}