const { Pool } = require('pg');
const path = require('path');

class Sql {

  static connect() {
    return new Pool({
      user: process.env.USER,
      host: process.env.HOST,
      database: process.env.DATABASE,
      password: process.env.PASSWORD,
      port: process.env.PORT
    })
  }

  /* test method *Don't use this* */
  static test(pool) {
    pool.query('select * from schedules', (err, res) => {
      console.log(err, res);
    })
  }

  static disconnect(pool) {
    pool.end(() => {
      console.log('pool end');
    })
  }
}

module.exports = Sql
