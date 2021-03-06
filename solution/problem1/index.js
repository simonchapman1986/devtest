const {getInputFileAsArray, twoSum, threeSum} = require('./helpers');


const fileName = '../../input/input1.txt';
const fileArray = getInputFileAsArray(fileName);
/*
1.a

From the input provided in the file input1.txt, 
find the two numbers that sum to 2020 and provide 
the result of multiplying them together.

Answer: 1013211
*/
const sumTwo = twoSum(fileArray, 2020);

console.log(sumTwo);

/*
1.b

Now find the three numbers in the input set that sum to 2020. 

Answer: 13891280
*/
const sumThree = threeSum(fileArray, 2020)

console.log(sumThree)