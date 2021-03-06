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
      arr.push(line.toString());
      lineCount += 1
    }
    return arr;
  }

  return linebyline();
}

/*
n-n c: str

@param: string
@return: Array
*/
function splitStringToArray(string) {
  var arr = string.replace('-', ' ').replace(':', '').split(' ');
  const n1 = parseInt(arr[0])
  const n2 = parseInt(arr[1])
  const c = arr[2]
  const str = arr[3]

  return [n1, n2, c, str]
}

/*
where n is a digit, c is a character and str is a string.

Each line defines a constraint for a string and the string itself. 
The constraint (n-n c) indicates the lowest and highest number of 
times a given letter can appear in the string for it to be valid.

*/
function assertStringFromParams(n1, n2, c, str) {
  const re = new RegExp(`${c}`, "g")
  const howMany = (str.match(re) || []).length

  if (n1 <= howMany && n2 >= howMany) {
    return true
  }
  return false
}

/*
the constraint to define the positions the letter may appear in the 
string. Exactly one of these positions must contain the given letter.

- 1-3 a: abcde is valid: position 1 contains a and position 3 does not
- 1-3 b: cdefg is invalid: neither position 1 nor position 3 contains b
- 2-9 c: ccccccccc is invalid: both position 2 and position 9 contain c
*/
function constraintToDefinePosition(n1, n2, c, str) {
  let logString = `${n1}-${n2} ${c}: ${str} is `;
  let pos1 = false;
  let pos2 = false;
  if (str.split('')[n1-1] == c) {
    pos1 = true;
  }
  if (str.split('')[n2-1] == c) {
    pos2 = true;
  }
  
  let valid = false;
  if (pos1 && pos2) {
    logString = logString + `invalid: both position ${n1} and position ${n2} contains ${c}`
  } else if (pos1 && !pos2) {
    logString = logString + `valid: position ${n1} and position ${n2} does not`
    valid = true;
  } else if (!pos1 && pos2) {
    logString = logString + `valid: position ${n1} does not contain ${c} and position ${n2} does`
    valid = true
  } else {
    logString = logString + `invalid: neither position ${n1} nor position ${n2} contains ${c}`
  }
  console.log(logString);
  return [valid, logString];
}

module.exports = {
  getInputFileAsArray, 
  splitStringToArray, 
  assertStringFromParams,
  constraintToDefinePosition
};