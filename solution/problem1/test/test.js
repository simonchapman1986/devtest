const fs = require('fs');
const readline = require('readline');
const expect = require('chai').expect;
const {getInputFileAsArray, twoSum, threeSum} = require('../helpers');


describe('getInputFileAsArray()', function () {
  it('should get limited array of numbers from file', function () {
    
    // Set our array of integer lines
    const testArray = [1440, 1511, 1731]

    // Get our lines
    var arrayFromFile = getInputFileAsArray('./test/inputmock.txt', limit=3);

    // Assert
    expect(arrayFromFile).to.eql(testArray);

  });
});

describe('getInputFileAsArray()', function () {
  it('should get array of all numbers from file', function () {
    
    // Set our array of integer lines
    const testArray = [1440, 1511, 1731, 1400, 1542]

    // Get our lines
    var arrayFromFile = getInputFileAsArray('./test/inputmock.txt');

    // Assert
    expect(arrayFromFile).to.eql(testArray);

  });
});

describe('twoSum()', function () {
    it('Find two numbers in an array that sum to the desired result and multiply', function () {
      
      // Set our array of integer lines
      const testArray = [1721, 979, 366, 299, 675, 1456]
      const sum = 2020;
  
      // Get our lines
      var arrayNums = twoSum(testArray, sum);
  
      // Assert
      expect(arrayNums).to.be.equal(514579);
    });
});

describe('twoSum()', function () {
  it('Where no numbers match 2020', function () {
    
    // Set our array of integer lines
    const testArray = [1721, 979]
    const sum = 2020;

    // Get our lines
    var arrayNums = twoSum(testArray, sum);

    // Assert
    expect(arrayNums).to.be.equal(false);
  });
});

describe('threeSum()', function () {
    it('Find three numbers in an array that sum to the desired result and multiply', function () {
      
      // Set our array of integer lines
      const testArray = [1721, 979, 366, 299, 675, 1456]
      const sum = 2020;
  
      // Get our lines
      var arrayNums = threeSum(testArray, sum);
  
      // Assert
      expect(arrayNums).to.be.equal(241861950);
    });
});

describe('threeSum()', function () {
  it('Where no numbers match 2020', function () {
    
    // Set our array of integer lines
    const testArray = [1721, 979, 1456]
    const sum = 2020;

    // Get our lines
    var arrayNums = threeSum(testArray, sum);

    // Assert
    expect(arrayNums).to.be.equal(false);
  });
});