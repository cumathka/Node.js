import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize("cusman", "root", "melanet123", {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: {},
  define: {
    freezeTableName: true
  }
});

const Customer = sequelize.define("Customer", {
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  country: DataTypes.STRING,
},{
    tableName: 'Customer'
});

const Engineer = sequelize.define("Engineer", {
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  workload: DataTypes.INTEGER,
});

const Task = sequelize.define("Task", {
  title: DataTypes.STRING,
  deadline: DataTypes.DATE,
  done: DataTypes.BOOLEAN,
  description: DataTypes.STRING,
});

const Website = sequelize.define("Website", {
  name: DataTypes.STRING,
  url: DataTypes.STRING,
  isActive: DataTypes.BOOLEAN,
});

await sequelize.sync({ alter: true });

export { Customer, Engineer, Task, Website };
