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
      name: 'jacob',
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
    let func = function(){'hello';};
    let nonFunc = 'hello world';
    expect(validator.isFunction(func)).toBeTruthy();
    expect(validator.isFunction(nonFunc)).toBeFalsy();
  });
});