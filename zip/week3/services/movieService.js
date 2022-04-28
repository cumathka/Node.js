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
const getAllMovies = () =>  result;
const  getMovieById = (pId) => {
    let movie = result.find(m => m.id == pId);
    return movie;
}
const  addMovie = (pMovie) => {
    result.push(pMovie)
    return pMovie;  
}
const deleteMovie = (pId) => result = result.filter(m => m.id !=pId)
const updateMovie = (pId, pUpdatedMovie) => {
    let movie = result.find(m =>m.id == pId)
    movie.name = pUpdatedMovie.name
    movie.year = pUpdatedMovie.year
    return movie
}
export {getAllMovies,getMovieById,addMovie,deleteMovie,updateMovie}