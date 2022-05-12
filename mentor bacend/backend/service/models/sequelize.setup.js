import { Sequelize,sequelize } from "sequelize";

import dbConfig from "../../environment.config.json"
import movieModels from "./movie.models.js";
import rentModels from "./rent.models.js";

const sequelize= new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
host: dbConfig.HOST,
dialect: dbConfig.dialect,
oparatorAliases: false,
pool:{
max: dbConfig.pool.max,
min : dbConfig.pool.min,
acquire: dbConfig.pool.acquire,
idle: dbConfig.pool.idle,

}
})

const db = {};


db.sequelize=sequelize;
db.Sequelize=Sequelize;

db.movies=movieModels(sequelize,Sequelize);
db.rents=rentModels(sequelize,Sequelize);

db.movies.hasMany(db.rents);
//db.rents.oneMany(db.movies);

db.sequelize.sync({force:true}).then(()=>{
    console.log("data olusturuldu")
})

export default db;
