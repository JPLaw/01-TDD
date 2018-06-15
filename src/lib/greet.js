'use strict';

const greet = module.exports = {};

greet.hello = (string) => {
  if (typeof string !== 'string') {
    return null;
  } if (!string) {
    return null; 
  } return `Hello ${string}`;
};
