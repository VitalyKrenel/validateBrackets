const { expect } = require('chai');
const { validateBrackets } = require('../src/validateBrackets.js');

describe('validateBrackets()', function () {
  it('should return false when empty string is supplied', function () {
    const exp = '';
    const result = validateBrackets(exp);

    expect(result).to.be.false;
  });

  it('should return true when ([](){([])}) expression is supplied', function () {
    const exp = '([](){([])})';
    const result = validateBrackets(exp);

    expect(result).to.be.true;
  });

  it('should return true when *{} expression is supplied', function () {
    const exp = '*{}';
    const result = validateBrackets(exp);

    expect(result).to.be.true;
  });

  it('should return 5 when ()[]} expression is supplied', function () {
    const exp = '()[]}';
    const result = validateBrackets(exp);

    expect(result).to.be.equal(5);
  });

  it('should return 7 when {{[()]] expression is supplied', function () {
    const exp = '{{[()]]';
    const result = validateBrackets(exp);

    expect(result).to.be.equal(7);
  });

  it('should return 3 when {{{[][][] expression is supplied', function () {
    const exp = '{{{[][][]';
    const result = validateBrackets(exp);

    expect(result).to.be.equal(3);
  });

  it('should return 3 when {*{{} expression is supplied', function () {
    const exp = '{*{{}';
    const result = validateBrackets(exp);

    expect(result).to.be.equal(3);
  });

  it('should return 2 when [[* expression is supplied', function () {
    const exp = '[[*';
    const result = validateBrackets(exp);

    expect(result).to.be.equal(2);
  });

  it('should return 1 when { expression is supplied', function () {
    const exp = '{';
    const result = validateBrackets(exp);

    expect(result).to.be.equal(1);
  });
});
