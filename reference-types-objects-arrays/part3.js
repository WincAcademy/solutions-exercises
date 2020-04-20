console.log("Naam kattensoort 3:", catBreeds[2].name);
console.log("Energylevel kattensoort 1:", catBreeds[0].energy_level);
console.log("Eerste temperament kat 2:", catBreeds[1].temperament[0]);
const lengthTemperamentsCatThree = catBreeds[2].temperament.length;
console.log(
  "Laatste temperament kat 3:",
  catBreeds[2].temperament[lengthTemperamentsCatThree - 1]
);
console.log("Favo voedsel van kat 3:", catBreeds[2].food.favourite_food);
