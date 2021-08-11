'use strict';
const moment = require("moment");
const dateNow = moment().format("MMM Do YY");

module.exports.ThirdFunction1 = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: " This is the THIRD Function1 "
      }),
  };
};

module.exports.ThirdFunction2 = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: " This is the THIRD Function2 " 
      }),
  };
};

module.exports.ThirdFunction3 = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: " This is the THIRD Function3 " 
      }),
  };
};