
require('dotenv').config();

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host : process.env.DATABASE_HOST,
        user : process.env.DATABASE_USER,
        password : process.env.DATABASE_PASS,
        database : process.env.DATABASE_DB
    },
    pool: {
        afterCreate: function (conn, done) {
            // do the second query...
            conn.query('select 1+1 as result', function (err) {
                
                // if err is not falsy, connection is discarded from pool
                // if connection aquire was triggered by a query the error is passed to query promise
                done(err, conn);
            });
        }
    },
    log: {
        warn(message) {
            console.log('Warning: ', message)
        },
        error(message) {
            console.log('Error: ', message);
        },
        deprecate(message) {
            console.log('Deprecate: ', meesage);
        },
        debug(message) {
            console.log('Debug: ', message)
        },
    }
});

knex.select('*').from('goals').then((data) => {
    console.log(data);
})

module.exports = knex;