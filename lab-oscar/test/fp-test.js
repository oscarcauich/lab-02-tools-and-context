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

//testing filter function
describe('should return a new Array', () => {
  it('should returna new Array', () => {
    let result = fp.filter([10, 2, 6, 29], n => n < 29);
    expect(result).toEqual([10, 2, 6]);
  });
  it('should return null', () => {
    let result = fp.filter(null, n => null);
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

//testing concat function
describe('it should return a single array', () => {
  it('should return a single array', () => {
    let result = fp.concat([1, 2], [3, 4]);
    expect(result).toEqual([1, 2, 3, 4]);
  });
  it('should return a new array', () =>{
    let result = fp.concat(['o','s','c','a','r'], ['c','a','u','i','c','h']);
    expect(result).toEqual(['o','s','c','a','r','c','a','u','i','c','h']);
  });
  it('should return null', ()=> {
    let result = fp.concat(null, 'hello');
    expect(result).toEqual(null);
  });
});

//testing splice function
describe('it should add House to existing array', () =>{
  it('should add House to existing array', () => {
    let result = fp.splice(['this','is','my'], (2,0,'house'));
    expect(result).toEqual(['this','is','my','house']);
  });
});
