// Change these inputs to see if your code works.
// For example, comment lines 10 to 15 back on, and lines 3 to 8 off.
const age = 18;
const isFemale = true;
const driverStatus = "bob";
const name = "Sarah";
const totalAmount = 27;

/*
Test dates
const age = 16; 
const isFemale = false;
const driverStatus = 'b0b'; 
const name = 'Niels';
const totalAmount = 5;
*/

if (age >= 18) {
  console.log("You are 18 or older, you may enter");
} else {
  console.log("Nope, you are not allowed to enter");
}

if (age >= 18 && age <= 25) {
  console.log("You get 50% off your beer");
}

if (isFemale) {
  console.log("Your ticket says you're a female!");
} else {
  console.log(
    "Unfortunately you indicated on your ticket that you are a male, you are not allowed to enter".
  );
}

if (driverStatus === "bob") {
  console.log("You are the bob, you are allowed to drive");
} else {
  console.log("You're not a bob, hand in those car keys!");
}

if (name === "Sarah" || name === "Bram") {
  console.log("Your name is Sarah or Bram, you get a free beer!");
} else {
  console.log("You are not participating in our fun Sarah Abraham promotion");
}

if (totalAmount >= 100) {
  console.log("free bottle of champagne.");
} else if (totalAmount > 50) {
  console.log("free serving of nachos");
} else if (totalAmount > 25) {
  console.log("free (vega) bitterballs");
} else {
  console.log("Unfortunately you don't get a discount, but it's nice to have you!");
}