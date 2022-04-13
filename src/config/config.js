// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-17a1601c40701036019a528cfc7f4534d7c3f8c4.cl2dtnr6j6d6.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: 'xQp7T;=_^qrDJl#M7UUXOj(4,P9[eGDy'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}