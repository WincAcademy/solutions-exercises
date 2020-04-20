// Verander deze input om te zien of je code werkt.
// Comment bijvoorbeeld regel 10 tot 15 weer aan, en regel 3 tot 8 uit.
const age = 18;
const isFemale = true;
const driverStatus = "bob";
const name = "Sarah";
const totalAmount = 27;

/*
Testdata
const age = 16; 
const isFemale = false;
const driverStatus = 'b0b'; 
const name = 'Niels';
const totalAmount = 5;
*/

if (age >= 18) {
  console.log("Je bent 18 jaar of ouder, je mag naar binnen");
} else {
  console.log("Nope, je mag niet naar binnen");
}

if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting op je biertje");
}

if (isFemale) {
  console.log("Je ticket zegt dat je een vrouw bent!");
} else {
  console.log(
    "Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen"
  );
}

if (driverStatus === "bob") {
  console.log("Je bent de bob, je mag autorijden");
} else {
  console.log("Je bent geen bob, hier met die autosleutels");
}

if (name === "Sarah" || name === "Bram") {
  console.log("Je naam is Sarah of Bram, je krijgt een gratis biertje!");
} else {
  console.log("Je doet niet mee aan onze ludieke Sarah Abraham actie");
}

if (totalAmount >= 100) {
  console.log("gratis flesje champagne.");
} else if (totalAmount > 50) {
  console.log("gratis portie nachos");
} else if (totalAmount > 25) {
  console.log("gratis (vega)bitterballen");
} else {
  console.log("Helaas geen korting, maar leuk dat je er bent");
}
