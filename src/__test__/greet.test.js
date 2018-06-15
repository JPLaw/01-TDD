'use strict';

const greet = require('../lib/greet');

it('should not take in anything other than a string', () => {
  expect(greet.hello(123)).toEqual(null);
});
it('should take in a string, for example, world', () => {
  expect(greet.hello('World')).toEqual('Hello World');
});
it('should not be empty', () => {
  expect(greet.hello()).toEqual(null);
});

