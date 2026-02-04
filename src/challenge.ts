// Challenge 1
/*  Create a function addTwo that accepts one input and adds 2 to it. */
const addTwo = (input: number) => {
    return input + 2
}

console.log(addTwo(3));
console.log(addTwo(10));

// ________________________________________________________________________________________________
// Challenge 2
/*
Create a function addS that accepts one input and adds an "s" to it.
*/
const addS = (input: string) => {
    return input + "s"
}
// uncomment these to check your work
console.log(addS("pizza"));
console.log(addS("bagel"));

// ________________________________________________________________________________________________
// Challenge 3
/*
Create a function called map that takes two inputs:
1. An array of numbers (a list of numbers)
2. A 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
*/
const map = (input: number[], callback: (data: number) => number) => {
    const result: number[] = []

    for (let i = 0; i < input.length; i++) {
        const value = input[i]
        const action = callback(value)
        result.push(action)
    }
    return result
}

// ________________________________________________________________________________________________
// Challenge 4
/*
The function forEach takes an array and a callback, and runs the callback on each element of the array.
forEach does not return anything.
*/
// let alphabet = "";
// const letters = ["a", "b", "c", "d"];
// forEach(letters, function (char) {
//   alphabet += char;
// });
// console.log(alphabet);

// should output abcd


// ________________________________________________________________________________________________
// Challenge 5
/*
Rebuild your map function, this time instead of using a for loop, use your own forEach function that you just defined.
Call this new function mapWith.//console.log(mapWith([1, 2, 3], addTwo));
*/
const mapWith = (
    input: number[],
    callback: (data: number) => number
) => {
    const result: number[] = []

    input.forEach((data) => {
        const action = callback(data)
        result.push(action)
    })

    return result
}
console.log(map([1, 2, 3], addTwo));

console.log(mapWith([1, 2, 3], addTwo));

// ________________________________________________________________________________________________
// Challenge 6
/*
The function reduce takes an array and reduces the elements to a single value.
For example it can sum all the numbers, multiply them,
or any operation that you can put into a function.
*/

// const nums = [4, 1, 3];
// const add = function (a, b) {
//   return a + b;
// };
// console.log(reduce(nums, add, 0))

//should output 8

// ________________________________________________________________________________________________
// Challenge 7
/* Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!
 */
const intersection = (a: number[], b: number[], c: number[]) => {
    return [a, b, c].reduce((same, next) => {
        return same.filter(value => next.includes(value))
    })

}
console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);
// should log: [5, 15]

// ________________________________________________________________________________________________
// Challenge 8
/*
Construct a function union that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce!
*/
const union = (a: number[], b: number[], c: number[]) => {
    return [a, b, c].reduce((same, next) => {
        next.forEach(value => {
            if (!same.includes(value)) {
                same.push(value)
            }
        })
        return same
    })
}
console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// ________________________________________________________________________________________________
// Challenge 9
/*
Construct a function objOfMatches that accepts two arrays and a callback.
objOfMatches will build an object and return it.
To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array.
If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.
*/
const objOfMatches = (a: [], b: [], c: (d: string) => string) => {
    const matchValues: {
        [key: string]: string
    } = {}
    a.forEach((value, index) => {

        if (c(value) === b[index]) {
            matchValues[value] = b[index]
        }
    })
    return matchValues
}

console.log(
  objOfMatches(
    ["hi", "howdy", "bye", "later", "hello"],
    ["HI", "Howdy", "BYE", "LATER", "hello"],
    function (str) {
      return str.toUpperCase();
    }
  )
);

// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// ________________________________________________________________________________________________
// Challenge 10
/*
Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks.
multiMap will return an object whose keys match the elements in the array of values.
The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.
*/
const multiMap = (values: string[], callbacks: ((value: string) => string)[]
) => {

    const matchValues: { [key: string]: string[] } = {}

    values.forEach((value) => {
        matchValues[value] = callbacks.map((cb) => cb(value))
    })
    return matchValues
}
console.log(
  multiMap(
    ["catfood", "glue", "beer"],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function (str) {
        return str + str;
      },
    ]
  )
);

// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// ________________________________________________________________________________________________
// Challenge 11
/*
Construct a function objectFilter that accepts an object as the first parameter and a callback function as the second parameter.
objectFilter will return a new object.
The new object will contain only the properties from the input object such that the property's value is equal to the property's key passed into the callback.
*/

const cities = {
  London: "LONDON",
  LA: "Los Angeles",
  Paris: "PARIS",
};
console.log(objectFilter(cities, (city) => city.toUpperCase()));

// Should log { London: 'LONDON', Paris: 'PARIS'}

// ________________________________________________________________________________________________
// Challenge 12
/* Create a function majority that accepts an array and a callback.
The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true.
If the number of true returns is equal to the number of false returns, majority should return false.
 */

// const isOdd = function (num) {
//   return num % 2 === 1;
// };
// console.log(majority([1, 2, 3, 4, 5, 7, 9, 11], isOdd));
// // should log: true

// console.log(majority([2, 3, 4, 5], isOdd));
// should log: false

// ________________________________________________________________________________________________
// Challenge 13
/* Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second. */

// const startsWithS = function (str) {
//   return str[0] === "s" || str[0] === "S";
// };
// console.log(
//   prioritize(
//     ["curb", "rickandmorty", "seinfeld", "sunny", "friends"],
//     startsWithS
//   )
// );

// should log: ["seinfeld", "sunny", "curb", "rickandmorty", "friends"];

// ________________________________________________________________________________________________
// Challenge 14
/*
Create a function countBy that accepts an array and a callback, and returns an object.
countBy will iterate through the array and perform the callback on each element.
Each return value from the callback will be saved as a key on the object.
The value associated with each key will be the number of times that particular return value was returned.
*/

// console.log(
//   countBy([1, 2, 3, 4, 5], function (num) {
//     if (num % 2 === 0) return "even";
//     else return "odd";
//   })
// ); // should log: { odd: 3, even: 2 }

// ________________________________________________________________________________________________
// Challenge 15
/*
Create a function groupBy that accepts an array and a callback, and returns an object.
groupBy will iterate through the array and perform the callback on each element.
Each return value from the callback will be saved as a key on the object.
The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.
*/

// const decimals = [1.3, 2.1, 2.4];
// const floored = function (num) {
//   return Math.floor(num);
// };
// console.log(groupBy(decimals, floored));

// should log: { 1: [1.3], 2: [2.1, 2.4] }

// ________________________________________________________________________________________________
// Challenge 16
/*
Create a function goodKeys that accepts an object and a callback.
The callback will return either true or false.
goodKeys will iterate through the object and perform the callback on each value.
goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback.
*/

// const sunny = {
//   mac: "priest",
//   dennis: "calculating",
//   charlie: "birdlaw",
//   dee: "bird",
//   frank: "warthog",
// };
// const startsWithBird = function (str) {
//   return str.slice(0, 4).toLowerCase() === "bird";
// };
// console.log(goodKeys(sunny, startsWithBird));

// should log: ['charlie', 'dee']

// ________________________________________________________________________________________________
// Challenge 17
/*
Create a function commutative that accepts two callbacks and a value.
commutative will return a boolean indicating if the passing the value into the first function,
and then passing the resulting output into the second function,
yields the same output as the same operation with the order of the functions reversed (passing the value into the second function,
and then passing the output into the first function).
*/

// const multBy3 = (n) => n * 3;
// const divBy4 = (n) => n / 4;
// const subtract5 = (n) => n - 5;
// console.log(commutative(multBy3, divBy4, 11));
// should log: true

// console.log(commutative(multBy3, subtract5, 10));
// should log: false

// console.log(commutative(divBy4, subtract5, 48));
// should log: false


// Challenge 18
/*
Create a function objFilter that accepts an object and a callback.
objFilter should make a new object, and then iterate through the passed-in object,
using each key as input for the callback. If the output from the callback is equal to the corresponding value,
then that key-value pair is copied into the new object. objFilter will return this new object.
*/

// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = (n) => n / 2;
// console.log(objFilter(startingObj, half));
// should log: { 2: 1, 6: 3 }

// ________________________________________________________________________________________________
// Challenge 19
/*
Create a function rating that accepts an array (of functions) and a value.
All the functions in the array will return true or false.
rating should return the percentage of functions from the array that return true when the value is used as input.
*/

// const isEven = (n) => n % 2 === 0;
// const greaterThanFour = (n) => n > 4;
// const isSquare = (n) => Math.sqrt(n) % 1 === 0;
// const hasSix = (n) => n.toString().includes("6");
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64));
// should log: 100

// console.log(rating(checks, 66));
// should log: 75

// ________________________________________________________________________________________________
// Challenge 20
/*
Create a function pipe that accepts an array (of functions) and a value.
pipe should input the value into the first function in the array,
and then use the output from that function as input for the second function,
and then use the output from that function as input for the third function,
and so forth, until we have an output from the last function in the array.
pipe should return the final output.
*/

// const capitalize = (str) => str.toUpperCase();
// const addLowerCase = (str) => str + str.toLowerCase();
// const repeat = (str) => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, "cat"));

// should log: 'CATcatCATcat'
// ________________________________________________________________________________________________
// Challenge 21
/*
Create a function highestFunc that accepts an object (which will contain functions)
and a subject (which is any value). highestFunc should return the key of the object
whose associated value (which will be a function) returns the largest number,
when the subject is given as input.
*/

// const groupOfFuncs = {};
// groupOfFuncs.double = (n) => n * 2;
// groupOfFuncs.addTen = (n) => n + 10;
// groupOfFuncs.inverse = (n) => n * -1;
// console.log(highestFunc(groupOfFuncs, 5));
// should log: 'addTen'

// console.log(highestFunc(groupOfFuncs, 11));
// should log: 'double'

// console.log(highestFunc(groupOfFuncs, -20));
// should log: 'inverse'

// ________________________________________________________________________________________________
// Challenge 22
/*
Create a function, combineOperations, that takes two parameters: a starting value and an array of functions.
combineOperations should pass the starting value into the first function in the array.
combineOperations should pass the value returned by the first function into the second function,
and so on until every function in the array has been called. combineOperations should return the final value
returned by the last function in the array.
*/

// function add100(num) {
//   return num + 100;
// }

// function divByFive(num) {
//   return num / 5;
// }

// function multiplyByThree(num) {
//   return num * 3;
// }

// function multiplyFive(num) {
//   return num * 5;
// }

// function addTen(num) {
//   return num + 10;
// }

// console.log(combineOperations(0, [add100, divByFive, multiplyByThree]));
// Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen]));
// Should output 10

// ________________________________________________________________________________________________
// Challenge 23
/*
Define a function myFunc that takes an array and a callback.
myFunc should pass each element from the array (in order) into the callback.
If the callback returns true, myFunc should return the index of the current element.
If the callback never returns true, myFunc should return -1;
*/

// const numbers = [2, 3, 6, 64, 10, 8, 12];
// const evens = [2, 4, 6, 8, 10, 12, 64];

// function isOddAgain(num) {
//   return num % 2 !== 0;
// }

// console.log(myFunc(numbers, isOddAgain));
// Output should be 1
// console.log(myFunc(evens, isOddAgain));
// Output should be -1

// ________________________________________________________________________________________________
// Challenge 24
/* Write a function myForEach that accepts an array and a callback function.
Your function should pass each element of the array (in order) into the callback function.
The behavior of this function should mirror the functionality of the native .forEach()
JavaScript array method as closely as possible.
 */

// let sum = 0;

// function addToSum(num) {
//   sum += num;
// }

// const nums2 = [1, 2, 3];
// myForEach(nums2, addToSum);
// console.log(sum);
// Should output 6
