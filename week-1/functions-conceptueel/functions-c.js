// OPTIE 1
const calculateDiscountedPrice = function(totalAmount, discount) {
  console.log(Math.round(totalAmount - discount));
};
calculateDiscountedPrice(50, 2.5);

// OPTIE 2
const calculateDiscountedPrice = function(totalAmount, discount) {
  return Math.round(totalAmount - discount);
};
console.log(calculateDiscountedPrice(50, 2.5));

// Weet jij het verschil tussen de twee? Wat doet return binnen een functie?
