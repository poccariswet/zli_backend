'use strict';

const Sql = require('./js/sql');

module.exports.schedule = (event, context, callback) => {

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'zli backend service',
      input: event,
    }),
  };

  callback(null, response);
}
