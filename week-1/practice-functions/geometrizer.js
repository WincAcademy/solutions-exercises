/* Create 2 functions that calculate properties of a circle, using the definitions here.

Create a function called calcCircumfrence:

Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:

Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN". */

const calcCircumfrence = function(radius) {
  return Math.PI * 2 * radius;
};

const calcRadius = function(radius) {
  return Math.PI * radius * radius;
};

const calcGeometry = function(radius) {
  console.log("De radius van de circle is" + radius);
  let circumference = calcCircumfrence(radius);
  console.log("The omtrek is " + circumference);
  let area = calcRadius(radius);
  console.log("De oppervlakte is " + area);
};

console.log(calcGeometry(3));
