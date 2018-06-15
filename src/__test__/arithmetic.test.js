'use strict';

const arithmetic = require('../lib/arithmetic');

it('should be a + b = c', () => {
  expect(arithmetic.add(3, 5)).toEqual(8);
});

it('should be a + b = null', () => {
  expect(arithmetic.add('3', '5')).toEqual(null);
});

describe('#Subtract', () => {
  it('should be a - b = c', () => {
    expect(arithmetic.subtract(5, 3)).toEqual(2);
  });

  it('should be a - b = null', () => {
    expect(arithmetic.subtract('5', '3')).toEqual(null);
  });
});
