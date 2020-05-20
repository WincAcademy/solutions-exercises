// A

const addTheWordCool = function(array) {
  array.push("cool");
  return array;
};

console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

// Alternate excercise A
const isArray = function(input) {
  return Array.isArray(input);
};

console.log(isArray("Winc Winc, nudge nudge")); // false
console.log(isArray([1, 2, 4, 0])); // true

//B
const amountOfElementsInArray = function(array) {
  return array.length;
};
console.log(amountOfElementsInArray(["appels", "peren", "citroenen"])); // 3

// C
// Er zijn 3 verschillende oplossingen (misschien zelfs meer! Kun je er nog 1 bedenken?)
const selectBelgiumFromBenelux = function(array) {
  return array[0];
};

// OF
const selectBelgiumFromBeneluxShift = function(array) {
  return array.shift();
};

// OF
const selectBelgiumFromBeneluxSlice = function(array) {
  return array.slice(0, 1);
};

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); // resultaat: "Belgie"
console.log(
  selectBelgiumFromBeneluxShift(["Belgie", "Nederland", "Luxemburg"])
); // resultaat: "Belgie"
console.log(
  selectBelgiumFromBeneluxSlice(["Belgie", "Nederland", "Luxemburg"])
); // resultaat: ["Belgie"]
// Let op! Slice retourneert dus een nieuwe array in plaats van alleen het element. Wil je dat?

// D
const lastElementInArray = function(array) {
  return array.pop();
};

const lastElementInArray2 = function(array) {
  return array[array.lenght - 1];
};
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); // resultaat: "Schildpad"
console.log(lastElementInArray2(["Haas", "Cavia", "Kip", "Schildpad"])); // resultaat: "Schildpad"

// E
const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = function(array) {
  //zoals je hieronder ziet muteert .slice methode niet de bestaande array, maar retourneert een nieuwe die we opslaan in een nieuwe variabele/
  const newArray = array.slice(1, 4);
  console.log("Nieuwe array:", newArray, "De onaangetaste array", array);
  return newArray;
};

const impeachTrumpSplice = function(array) {
  const removedElement = array.splice(0, 1);
  console.log(
    "removed element:",
    removedElement,
    "De mutated array, Trump is missing:",
    array
  );
  return array;
};

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// F
const stringsTogether = function(array) {
  return array.join(" ");
};

console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));
//resultaat: "Winc Academy is leuk ;-}"

// G
const combineArrays = function(array1, array2) {
  return array1.concat(array2);
};

console.log(combineArrays([1, 2, 3], [4, 5, 6]));
console.log(combineArrays(["hoi", "hey", "hallo"], [4, 5, 6]));
// result should be [1,2,3,4,5,6]
