'use strict';

const expect = require('expect');
const fp = require('../lib/fp.js');

describe('should return an list array', () =>{

  it('should return an upperCase list of Array', () => {
    let result = fp.map(['a','b','c'], n => n.toUpperCase());
    expect(result).toEqual(['A','B','C']);
  });

  it('should return an array', () => {
    let result = fp.map('oscar', n => n);
    expect(result).toEqual(['o','s','c','a','r']);
  });
  it('should return null', () => {
    let result = fp.map(null, n => n);
    expect(result).toEqual(null);
  });
});

//testing reduce function
describe('should a single value', () => {
  it('should return a single value', () => {
    let result = fp.reduce([1,2,3], [(start, next) => start + next]);
    expect(result).toEqual(6);
  });

  it('should return null', () => {
    let result = fp.reduce(null, [(start) => null]);
    expect(result).toEqual(null);
  });
});
