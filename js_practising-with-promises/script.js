/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a Promise that tests 
if the value is less than or greater than the value 10. Log the result to the console.
*/

const testNum = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(num + " is greater than 10");
    } else {
      reject(num + " is less than 10");
    }
  });
};

// testNum(15).then((result) => console.log(result));
// testNum(5).catch((error) => console.log(error));

/*
Exercise 2:
Write two functions that use Promises that you can chain! 
The first function, makeAllCaps(), will take in an array of words and capitalize them, 
and then the second function, sortWords(), will sort the words in alphabetical order. 
If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/

const makeAllCaps = (words) => {
  return new Promise((resolve, reject) => {
    if (
      words.every((word) => {
        return typeof word === "string";
      })
    ) {
      resolve(
        words.map((word) => {
          return word.toUpperCase();
        })
      );
    } else {
      reject("Expected array of strings");
    }
  });
};

const sortWords = (words) => {
  return new Promise((resolve, reject) => {
    if (words) {
      resolve(words.sort());
    } else {
      reject("Expected array of strings");
    }
  });
};

const arrayOfWords = ["cucumber", "tomato", "zucchini", "avocado", "orange"];
const complicatedArray = ["cucumber", 44, true];

// call both functions, chain them together and log the result to the console
makeAllCaps(arrayOfWords)
  .then((capitalizedWords) => sortWords(capitalizedWords))
  .then((sortedWords) => console.log(sortedWords))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then((capitalizedWords) => sortWords(capitalizedWords))
  .then((sortedWords) => console.log(sortedWords))
  .catch((error) => console.log(error));
