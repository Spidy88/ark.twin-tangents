const config = require('config');
const Promise = require('bluebird');
const Sequelize = require('sequelize');
const Umzug = require('umzug');
const sequelize = new Sequelize(config.get('sql.url'), { logging: false });
const umzug = new Umzug({
    storage: 'sequelize',
    logging: (message) => { if( message.match(/^==/) ) { console.log(message); }},
    storageOptions: {
        sequelize: sequelize
    },
    migrations: {
        path: './server/migrations',
        pattern: /^\d{14}(-\w+)*\.js/,
        params: [sequelize.getQueryInterface(), sequelize.constructor]
    }
});

umzug.up()
    .then((migrations) => {
        console.log(`Migrations run: ${migrations.length}`);
        return 0;
    })
    .catch((reason) => {
        console.log('Migrations failed: ', reason);
        return 1;
    })
    .then((result) => {
        process.exit(result);
    });
