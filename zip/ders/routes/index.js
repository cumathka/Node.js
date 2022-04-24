let express = require('express');
let router = express.Router();

let MovieList = [{
    "id": 10002,
    "name": "die hard",
    "year": "1999",
    "genre": "action",
    "income": 10000000
  },
  {
    "id": 10003,
    "name": "die movie",
    "year": "2000",
    "genre": "action",
    "income": 10000000
  }]

  let rentMovie = [{
    "movieId": 10002,
    "duration": 10,
    "person": "Hi Coders"
 },
 {
    "movieId": 10003,
    "duration": 10,
    "person": "Hi"
 }]



router.get('/movies/', function (req, res, next) {
    let newArray = JSON.parse(JSON.stringify(MovieList))
    res.json(newArray);
})
router.get('/movies/:id/', function (req, res, next) {
    let newArrayList = JSON.parse(JSON.stringify(MovieList))
    let cars = newArrayList.filter((cars) => req.params.id == cars.id);
    res.json(cars);
})

router.post('/movies/', function (req, res, next) {
    MovieList.push(req.body);
    res.sendStatus(200);
});

router.delete('/movies/:id/', function (req, res, next) {
    MovieList.splice(req.params.id)
    res.status(200).send({})
})

module.exports = router;