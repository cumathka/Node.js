import mysql from "mysql"
import util from "util";

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "-",
  database:"movielist"
});

/* db_data.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM movie_properties";
    db_data.query(sql, function (err, connection) {
    if (err) throw err;
     console.log(connection);
  });
}); */

connection.query = util.promisify(connection.query).bind(connection);

connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});

const getAllMovies = () =>  connection;
const  getMovieById = (pId) => {
    let movie = connection.find(m => m.id == pId);
    return movie;
}
const  addMovie = (pMovie) => {
    connection.push(pMovie)
    return pMovie;  
}
const deleteMovie = (pId) => connection = connection.filter(m => m.id !=pId)
const updateMovie = (pId, pUpdatedMovie) => {
    let movie = connection.find(m =>m.id == pId)
    movie.name = pUpdatedMovie.name
    movie.year = pUpdatedMovie.year
    return movie
}
export {getAllMovies,getMovieById,addMovie,deleteMovie,updateMovie}