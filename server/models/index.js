const config = require('config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.get('sql.url'), config.get('sql.options'));

const User = require('./user')(sequelize);

module.exports = {
    User
};