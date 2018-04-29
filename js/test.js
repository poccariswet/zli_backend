const { Pool, Client } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
})

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
})
