

export default (sequelize, Sequelize) => { const Movies = sequelize.define("movie", { name: { type: Sequelize.STRING }, year: { type: Sequelize.DATE }, gerne: { type: Sequelize.STRING }, income: { type: Sequelize.INTEGER } } , ); return Movies; } 