'use strict';
const moment = require("moment");
const dateNow = moment().format("MMM Do YY");

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: dateNow
      }),
  };
};

module.exports.helloworld = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: " this is from hello world function" 
      }),
  };
};