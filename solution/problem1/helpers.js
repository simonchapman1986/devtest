const fs = require('fs');
const lineReader = require('n-readlines');

/*
Get an input of a file and output each line as an array of integers

Provide a limit on the number of lines to retrieve

@param: file
@param: limit

@return: Array
*/
function getInputFileAsArray(file, limit=false) {
  const liner = new lineReader(file);

  function linebyline() {
    var lineCount = 0
    var arr = [];
    let line;
    while (line = liner.next()) {
      if (limit) {
        if (limit == lineCount) {
          return arr;
        }
      }
      arr.push(parseInt(line));
      lineCount += 1
    }
    return arr;
  }

  return linebyline();
}

/*
Taking input of an array of number. Find the two numbers that equal the sum
of the target. Then multiply them together.

@param: arr
@param: target

@return: Int
*/
function twoSum(nums, target) {
  // create and push all items of array into hashmap
  let numObj = {};
  for (let i in nums) {
		let num = nums[i];
		numObj[num] = i;
  }
  // using the hashmap we made, we diff the value against to match the target
  for (let i in nums) {
		let diff = target - nums[i];
		if (numObj.hasOwnProperty(diff) && numObj[diff] !== i) {
      // multiply together to give the sum of the two that match
      return nums[i] * nums[numObj[diff]];
		}
  }
  // if no matching results
  return false
}

/*
Taking input of an array of number. Find the three numbers that equal the sum
of the target. Then multiply them together.

@param: nums
@param: target

@return: Int
*/
function threeSum (nums, target) {
  // establish our arrays for final result
  // establish array to build up index of those visited
  let result = []
  let indexes = []
  // loop over our array of numbers
  for (let i in nums) {
    // reduce complexity from O(n) to O(1)
    for (let j in nums) {
      const tots = target - (nums[i] + nums[j])
      const item = nums.find((ele) => ele === tots)
      if (item && !indexes.includes(i) && !indexes.includes(j)) {
        result.push([nums[i], nums[j], item])
        indexes.push(i)
        indexes.push(j)
      }
    }
  }
  // check we have a match
  if (result.length === 0) {
    return false
  }
  // multiply our final numbers to give total of match
  return result[0][0] * result[0][1] * result[0][2]
};


module.exports = {twoSum, getInputFileAsArray, threeSum};