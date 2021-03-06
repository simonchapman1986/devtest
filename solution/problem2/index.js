const {
    getInputFileAsArray, 
    splitStringToArray, 
    assertStringFromParams,
    constraintToDefinePosition
} = require('./helpers');


const fileName = '../../input/input2.txt';
const fileArray = getInputFileAsArray(fileName);

/*
2.a

The input provided in the file input2.txt consists of lines 
with the following format:

n-n c: str

where n is a digit, c is a character and str is a string.

Each line defines a constraint for a string and the string itself. 
The constraint (n-n c) indicates the lowest and highest number of 
times a given letter can appear in the string for it to be valid.

How many strings meet the constraint in the input2.txt file provided?

Answer: 666
*/
var howMany = 0
for (let item in fileArray) {
    const strArr = splitStringToArray(fileArray[item]);
    const isValid = assertStringFromParams(...strArr);
    if (isValid) {
        howMany += 1
    }
}
console.log(howMany);

/*
2.b

Suppose we change the meaning of the constraint to define the positions 
the letter may appear in the string. Exactly one of these positions must 
contain the given letter.

Answer: 670
*/
var howMany = 0
for (let item in fileArray) {
    const strArr = splitStringToArray(fileArray[item]);
    const [isValid, logString] = constraintToDefinePosition(...strArr);
    console.log(logString);
    if (isValid) {
        howMany += 1
    }
}
console.log(howMany);
