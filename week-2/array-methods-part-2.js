// A
const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" }
];
const findSpiderMan = function(superheroes) {
  return superheroes.find(function(superhero) {
    return superhero.name === "Spiderman";
  });
};
console.log("Find Spiderman:", findSpiderMan(superheroes));

// B
const doubleArrayValues = function(array) {
  let newArray = [];
  array.forEach(number => {
    newArray.push(number * 2);
  });
  return newArray;
};

// de onderstaande oplossingen zijn voor de pro's en gebruiken de .map functie*
// *die je aan het eind van vandaag ook gaat zijn.

const doubleArrayValuesArrow = function(array) {
  return array.map(number => {
    return number + number;
  });
};

const doubleArrayValuesShortHand = function(x) {
  return x.map(n => n + n);
};

console.log("Double 1,2,3:", doubleArrayValues([1, 2, 3]));
// expected output: [2, 4, 6])
console.log(doubleArrayValuesArrow([4, 1, 1, 1, 4]));
// expected output: [8, 2, 2, 2, 8]);
console.log(doubleArrayValuesShortHand([4, 1, 1, 1, 4]));
// expected output: [4, 4, 4, 4, 4, 4]

// C
const isBiggerThan10 = function(array) {
  return array.some(number => {
    number > 10;
  });
};
console.log("Je suis bigger than 10", isBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// D
function italyInTheGreat7(array) {
  return array.includes(country => {
    country === "Italy";
  });
}
console.log(
  italyInTheGreat7([
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "United Kingdom",
    "United States"
  ])
);

// E
const tenfold = function(array) {
  let newArray = [];
  array.forEach(number => {
    newArray.push(number * 10);
  });
  return newArray;
};
// Of met een .map method
const tenfoldMap = function(array) {
  return array.map(number => {
    return number * 10;
  });
};
console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));
console.log(tenfoldMap([1, 4, 3, 6, 9, 7, 11]));

// result should be [10, 40, 30, 60, 90, 70, 110]

// F

function below100(array) {
  return array.every(number => {
    return number < 100;
  });
}
// result should be [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98]
console.log(
  "Onder de 100?:",
  below100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
);

// G
const numbers = [1, 81, 4, 53, 3, 6, 11, 77, 84, 98, 101, 206, 234];

const bigSum = function(array) {
  return array.reduce((acc, number) => {
    return acc + number;
  });
};
console.log(bigSum(numbers));
