import mysql from "mysql"

var db_data = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "-",
  database:"movielist"
});

db_data.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM movie_properties";
  db_data.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
}); 
  


export function createMovie(pMovie) {
  result.push(pMovie);
    return pMovie;
}

export function getAllMovies() {
    return result;
}

export function getMovieById(pId) {
    const movie = result.find(m => m.id == pId);
    return movie;
}

export function updateMovie(pId, pUpdateMovie) {
    let movie = getMovieById(pId);
    movie.name = pUpdateMovie.name;
    movie.year = pUpdateMovie.year;
    movie.genre = pUpdateMovie.genre;
    movie.income = pUpdateMovie.income;
}

export function deleteMovie(pId) {
  result = result.filter(m => m.id != pId)
}
