'use strict';
const moment = require("moment");
const dateNow = moment().format("MMM Do YY");

module.exports.secondfunction1 = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: " this is secondfunction1 for testing "
      }),
  };
};

module.exports.secondfunction2 = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: " this is secondfunction2 for testing " 
      }),
  };
};