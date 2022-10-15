// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { it } = require("node:test")
// const { describe } = require("yargs")

// const { describe } = require("yargs")

// const { it } = require("node:test")
// const { execPath } = require("process")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest



//    PROBLEM #1

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

//First create a Test function that takes in an array of objects and returns an array w/ a sentence about each person with their name capitalized.
describe('capitalizeName', () => {

  //Create an it function that will explain what is the purpose of the 'capitalizeName' function
  it('Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.', () => {

    //Given testCase that is array of objects w/ the Expected output: 
    //["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]

    //if we invoke the function w/ people as the argument, expect it to equal --> given output
    expect(capitalizeName(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])

  })
})

//  After running yarn jest, I should expect a good fail prompt saying the function is not defined
//      ReferenceError: capitalizeName is not defined

// b) Create the function that makes the test pass.

//Create the function called capitalizeName with params of array of objects
const capitalizeName = (arrOfObjs) => {

  //iterate params of arrOfObjs w/ .map() method w/ person => being object inside of arrOfObjs
  return arrOfObjs.map((person) => {

    //Make a variable called name which --> arrOfObjs[key] === name
    //Use .split(' ') method to name to get each word and iterate with .map() method using word
    let name = person.name.split(' ').map((word) => {
      //console.log(name) --> 'ford prefect' 'zaphod beeblebrox' 'arthur dent'

      //console.log(word[0]).toUpperCase().concat(word.slice(1)) --> 'Ford' 'Prefect' 'Zaphod' 'Beeblebrox' 'Arthur' 'Dent'
      
      //Return the capitalied 1st letter of name and concat remaining name with the first letter removed
      return word[0].toUpperCase().concat(word.slice(1))
    })
    //Make a variable called occu which --> arrOfObjs[key] === occupation
    let occu = person.occupation
    //console.log(occu) --> 'a hitchhiker' 'president of the galaxy' 'a radio employee'

    //Return string interpolation to display expected output ex: --> ['Ford Prefect is a hitchhiker', 'Zaphod Beeble brox is president of the galaxy', 'Arthur Dent is a radio employee.']
    return `${name.join(' ')} is ${occu}.`
  })
}

// capitalizeName
// ✓ Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.167 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.67s.

//====================================



//    PROBLEM #2

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.


//First create a Test function that takes in an array of mixed data and returns an array of only the Remainders of nums when divided by 3
describe('onlyRemsOf3', () => {

  //Create an it function that will explain what is the purpose of the 'onlyRemsOf3' function
  it('Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.', () => {

    //Given 1st testCase that is array of mixed data with an Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    //if we invoke the function w/ hodgepodge1 as the argument, expect it to equal --> given output
    expect(onlyRemsOf3(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    
    //Given 2nd testCase that is array of mixed data with an Expected output: [ 2, 1, -1 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true] 
    //if we invoke the function w/ hodgepodge1 as the argument, expect it to equal --> given output
    expect(onlyRemsOf3(hodgepodge2)).toEqual([ 2, 1, -1 ])

  })
})

//  After running yarn jest, I should expect a good fail prompt saying the function is not defined
//      ReferenceError: onlyRemsOf3 is not defined

// b) Create the function that makes the test pass.

//Create the function called onlyRemsOf3 with params of array of mixed data
const onlyRemsOf3 = (mixedArr) => {
  //An empty arr is created to store our final result until we call to return it
  let result = []

  //Iterate param of mixedArr with .filter() method w/ the value = data
  mixedArr.filter(data => {
    //Using the Number.isSafeInteger w/ data, we will determine if the data is an integer data type that is divisible by 3 w/ a remainder.
    if (Number.isSafeInteger(data) % 3) {
      //console.log(data % 3) ==>   ex1: --> [2, 0, -1, 0]    ex:2 --> [2, 1, -1]
      
      //If true we will push the data modulo by 3 into the empty arr of result
      result.push(data % 3)
    }
  })
  //After all the logic is done we will return to grab the expected output
  return result
}

// onlyRemsOf3
//     ✓ Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.167 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.91s.

//====================================



//    PROBLEM #3

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

//First create a Test function that takes in an array of nums data and returns sum of all nums cubed
describe('sumCubed', () => {
  
  //Create an it function that will explain what is the purpose of the 'sumCubed' function
  it('Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.', () => {

    //Given 1st testCase that is array of nums with an Expected output: 99
    const cubeAndSum1 = [2, 3, 4]
    //if we invoke the function w/ cubeAndSum1 as the argument, expect it to equal --> given output
    expect(sumCubed(cubeAndSum1)).toEqual(99)
    
    //Given 2nd testCase that is array of nums with an Expected output: 1125
    const cubeAndSum2 = [0, 5, 10]
    //if we invoke the function w/ cubeAndSum2 as the argument, expect it to equal --> given output
    expect(sumCubed(cubeAndSum2)).toEqual(1125)

  })
})

//  After running yarn jest, I should expect a good fail prompt saying the function is not defined
//      ReferenceError: sumCubed is not defined

// b) Create the function that makes the test pass.

//Create the function called sumCubed with params of array of nums
const sumCubed = (arrOfNums) => {  
  //Created an variable called sum w/ a value of 0 to start out with
  let sum = 0

  //param arrOfNums will be iterated with .map() method to target each number inside array w/ num
  arrOfNums.map(num => {

    //variable cubed is created to cube the number value to the cubed amount
    let cubed = num ** 3

    //sum will be adjusted with every cubed number as a sum
    sum += cubed
  })
  //After iteration of array length is complete w/ .map() method, we will want to return the total sum of the cubed numbers
  return sum
}

// sumCubed
// ✓ Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.168 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.89s.

//=====================================