module.exports = {
    up: function(migration, DataTypes) {
        return migration.createTable('Users', {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
                autoIncrement: false
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false
            },

            avatar: {
                type: DataTypes.STRING
            },

            createdAt: {
                type: DataTypes.DATE
            },

            updatedAt: {
                type: DataTypes.DATE
            }
        })
    },

    down: function(migration) {
        return migration.dropTable('Users');
    }
};