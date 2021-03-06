const fs = require('fs');
const readline = require('readline');
const expect = require('chai').expect;
const {
    getInputFileAsArray, 
    splitStringToArray, 
    assertStringFromParams,
    constraintToDefinePosition
} = require('../helpers');


describe('getInputFileAsArray()', function () {
  it('should get array of numbers from file', function () {
    
    // Set our array of integer lines
    const testArray = [
        "2-8 t: pncmjxlvckfbtrjh",
        "8-9 l: lzllllldsl",
        "3-11 c: ccchcccccclxnkcmc"
    ]

    // Get our lines
    var arrayFromFile = getInputFileAsArray('./test/inputmock.txt', limit=3);

    // Assert
    expect(arrayFromFile).to.eql(testArray);

  });
});

describe('getInputFileAsArray()', function () {
    it('should get array of numbers from file', function () {
      
      // Set our array of integer lines
      const testArray = [
          "2-8 t: pncmjxlvckfbtrjh",
          "8-9 l: lzllllldsl",
          "3-11 c: ccchcccccclxnkcmc",
          "3-10 h: xcvxkdqshh",
          "4-5 s: gssss"
      ]
  
      // Get our lines
      var arrayFromFile = getInputFileAsArray('./test/inputmock.txt');
  
      // Assert
      expect(arrayFromFile).to.eql(testArray);
  
    });
  });

describe('splitStringToArray()', function () {
    it('should get array of elements from a string', function () {
        const str = "1-3 a: abcde"
        const expectArr = [1, 3, "a", "abcde"]

        const arr = splitStringToArray(str)
        
        expect(arr).to.eql(expectArr);
    });
});

describe('splitStringToArray()', function () {
    it('should get array of elements from a string where two digit int', function () {
        const str = "3-11 c: ccchcccccclxnkcmc"
        const expectArr = [3, 11, "c", "ccchcccccclxnkcmc"]

        const arr = splitStringToArray(str)
        
        expect(arr).to.eql(expectArr);
    });
});

describe('assertStringFromParams()', function () {
    it('constant appears more than n1 and less than n2', function () {
        const str = "1-3 a: abcde"
        const arr = splitStringToArray(str)
        const isValid = assertStringFromParams(...arr);
        
        expect(isValid).to.be.equal(true);
    });
});

describe('assertStringFromParams()', function () {
    it('constant does not appear', function () {
        const str = "1-3 a: bcde"
        const arr = splitStringToArray(str)
        const isValid = assertStringFromParams(...arr);
        
        expect(isValid).to.be.equal(false);
    });
});

describe('constraintToDefinePosition()', function () {
    it('constant to define position of n1 to be valid', function () {
        const str = "1-3 a: abcde"
        const arr = splitStringToArray(str)
        const isValid = constraintToDefinePosition(...arr);
        const validLogString = "1-3 a: abcde is valid: position 1 and position 3 does not"
        
        expect(isValid[0]).to.be.equal(true);
        expect(isValid[1]).to.be.equal(validLogString);
    });
});

describe('constraintToDefinePosition()', function () {
    it('constant to define position of n2 to be valid', function () {
        const str = "1-3 a: cbade"
        const arr = splitStringToArray(str)
        const isValid = constraintToDefinePosition(...arr);
        const validLogString = "1-3 a: cbade is valid: position 1 does not contain a and position 3 does"
        
        expect(isValid[0]).to.be.equal(true);
        expect(isValid[1]).to.be.equal(validLogString);
    });
});

describe('constraintToDefinePosition()', function () {
    it('constant to define neither position to be invalid', function () {
        const str = "1-3 a: cbde"
        const arr = splitStringToArray(str)
        const isValid = constraintToDefinePosition(...arr);
        const validLogString = "1-3 a: cbde is invalid: neither position 1 nor position 3 contains a"
        
        expect(isValid[0]).to.be.equal(false);
        expect(isValid[1]).to.be.equal(validLogString);
    });
});

describe('constraintToDefinePosition()', function () {
    it('constant to define both positions to be invalid', function () {
        const str = "1-3 a: acabde"
        const arr = splitStringToArray(str)
        const isValid = constraintToDefinePosition(...arr);
        const validLogString = "1-3 a: acabde is invalid: both position 1 and position 3 contains a"
        
        expect(isValid[0]).to.be.equal(false);
        expect(isValid[1]).to.be.equal(validLogString);
    });
});

constraintToDefinePosition