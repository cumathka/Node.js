import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize("movielist", "root", "-", {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: {},
  define: {
    freezeTableName: true
  }
});
const movie_properties = sequelize.define("Movie_list", {
  movie_name: DataTypes.STRING,
  movie_genre: DataTypes.STRING,
  movie_income:DataTypes.STRING,
  movie_year:DataTypes.INTEGER,
  movie_id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
},{
    tableName: 'movie_properties'
});


await sequelize.sync({ alter: true });

export { movie_properties };
