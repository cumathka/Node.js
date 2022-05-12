import Sequelize from "sequelize";
import dbConfig from "../environment-config.json" //assert { type: "json" };
import MovieModel from "./models/movie.model.js";
import RentModel from "./models/rent.model.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  oparatorAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.movies = MovieModel(sequelize, Sequelize);
db.rents = RentModel(sequelize, Sequelize);

db.movies.hasMany(db.rents);
//db.rents.hasMany(db.movies);
//{force: true}
db.sequelize.sync({ force: true }).then(() => {
  console.log("Basari ile olusturuldu...");
});

export default db;
