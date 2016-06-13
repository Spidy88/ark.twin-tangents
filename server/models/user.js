const Sequelize = require('sequelize');

module.exports = function UserFactory(sequelize) {
    return sequelize.define(
        'User',
        {
            id: {
                type: Sequelize.STRING,
                primaryKey: true,
                autoIncrement: false
            },
            name: Sequelize.STRING,
            avatar: Sequelize.STRING
        },
        {
            timestamps: true
        }
    );
    // TODO: Create/Find user on steam login
    // TODO: Serialize/deserialize user sessions
};