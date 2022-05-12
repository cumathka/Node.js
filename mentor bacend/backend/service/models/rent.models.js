





export default (sequelize, Sequelize) => { const Rents = sequelize.define("rents", { duration: { type: Sequelize.INTEGER }, person: { type: Sequelize.STRING } } , ); return Rents; }