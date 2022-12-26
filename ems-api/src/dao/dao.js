const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    port: 5432,
    database: "project",
    user: "postgres",
    password: "nehakhan"
})

module.exports = client