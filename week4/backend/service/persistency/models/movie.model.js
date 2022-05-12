export default (sequelize, Sequelize) => {
    const Movies = sequelize.define("movie", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
        name: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        year: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        gerne: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        income: {
            type: Sequelize.INTEGER,
            defaultValue: null
        }
    }, );
    return Movies;
}