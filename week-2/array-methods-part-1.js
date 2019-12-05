// A
const isArray = function(input) {
  return Array.isArray(input);
};

console.log(isArray("Winc Winc, nudge nudge")); // false
console.log(isArray([1, 2, 4, 0])); // true

// B
// Er zijn 3 verschillende oplossingen (misschien zelfs meer! Kun je er nog 1 bedenken?)
const benelux = function(array) {
  return array[0];
};

// OF
const beneluxShift = function(array) {
  return array.shift();
};

// OF
//Met negatieve nummers kan je slice selecteren van het einde van een array
const beneluxSlice = function(array) {
  return array.slice(-6, 1);
};

console.log(benelux(["Belgie", 1, "Nederland", 2, "Luxemburg", 3])); // resultaat: "Belgie"
console.log(beneluxShift(["Belgie", 1, "Nederland", 2, "Luxemburg", 3])); // resultaat: "Belgie"
console.log(beneluxSlice(["Belgie", 1, "Nederland", 2, "Luxemburg", 3])); // resultaat: ["Belgie"]
// Let op! Slice retourneert dus een nieuwe array in plaats van alleen het element. Wil je dat?

// C
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

// D

const stringsTogether = function(array) {
  return array.join(" ");
};

console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));
//resultaat: "Winc Academy is leuk ;-}"

// E
const combineArrays = function(array1, array2) {
  return array1.concat(array2);
};

console.log(combineArrays([1, 2, 3], [4, 5, 6]));
console.log(combineArrays(["hoi", "hey", "hallo"], [4, 5, 6]));
// result should be [1,2,3,4,5,6]
