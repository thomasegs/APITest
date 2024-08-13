require('dotenv').config()

module.exports = {
    test: {
        client: 'pg',
        version: '9.6',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: process.env.DB_PSW,
            database: 'barriga',
        },
        migrations: {
            directory: 'src/migrations',
        },
    },
};