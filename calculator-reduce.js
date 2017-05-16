// There seemed to be a lot of confusion about how to use reduce() to calculate
// a math expression.

// Remember that reduce() takes you from "Data Structure A" to "Data Structure B"
// "Data Structure B" might be a similar data structure to "A", or it might be
// a single value, like a number.

// Before we write our reduce() function, let's start with some simple test
// cases so we know how it should work.

// We can use an Array of Objects to represent a math expression:

// 6 + 2 = 8
const expression1 = [
  {type: 'num', value: 6},
  {type: 'op', value: '+'},
  {type: 'num', value: 2}
]
const result1 = 8

// 1 + 2 + 3 = 6
const expression2 = [
  {type: 'num', value: 1},
  {type: 'op', value: '+'},
  {type: 'num', value: 2},
  {type: 'op', value: '+'},
  {type: 'num', value: 3}
]
const result2 = 6

// 10 - 4.8 + 2 - 1 = 6.2
const expression3 = [
  {type: 'num', value: 10},
  {type: 'op', value: '-'},
  {type: 'num', value: 4.8},
  {type: 'op', value: '+'},
  {type: 'num', value: 2},
  {type: 'op', value: '-'},
  {type: 'num', value: 1}
]
const result3 = 6.2

// console.assert() is a neat way to "assert" things about your program that
// should be true
console.assert(result1 === calculateResult(expression1))
console.assert(result2 === calculateResult(expression2))
console.assert(result3 === calculateResult(expression3))

// Note that up until this point we have not written a single line of "code".
// Just input data and output results. Now we need to write the calculateResult()
// function to get the test cases to pass.

function calculateResult (inputArr) {
  return reduce
}
