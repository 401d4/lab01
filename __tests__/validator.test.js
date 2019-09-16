'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('strings', () => {
    let str = 'yes';
    let nonStr = null;
    expect(validator.isString(str)).toBeTruthy();
    expect(validator.isString(nonStr)).toBeFalsy();
  });

  it('numbers', () => {
    let num = 26;
    let nonNum = null;
    expect(validator.isNumber(num)).toBeTruthy();
    expect(validator.isNumber(nonNum)).toBeFalsy();
  });

  it('arrays', () => {
    let arr = [];
    let nonArr = null;
    expect(validator.isArray(arr)).toBeTruthy();
    expect(validator.isArray(nonArr)).toBeFalsy();
  });

  it('objects', () => {
    let obj = {
      name: 'jacob'
    };
    let nonObj = 'hello world';
    expect(validator.isObject(obj)).toBeTruthy();
    expect(validator.isObject(nonObj)).toBeFalsy();
  });

  it('booleans', () => {
    let boolean = true;
    let nonBoolean = 'hello world';
    expect(validator.isBoolean(boolean)).toBeTruthy();
    expect(validator.isBoolean(nonBoolean)).toBeFalsy();
  });

  it('functions', () => {
    let func = function(){'hello'}
    let nonFunc = 'hello world';
    expect(validator.isFunction(func)).toBeTruthy();
    expect(validator.isFunction(nonFunc)).toBeFalsy();
  });

});

describe('validator module performs complex validations', () => {

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(true).toBeFalsy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(true).toBeFalsy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(true).toBeFalsy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(true).toBeFalsy();
  });

  // TODO: Cover so, so many more cases

});

