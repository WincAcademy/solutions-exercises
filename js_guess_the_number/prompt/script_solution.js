let numberToBeGuessed = null;
let name;
let guess;
const min = 0;
const max = 25;

while (name === undefined || name === null || name.length === 0) {
  name = prompt("Hoe heet je?");
}

alert("Welkom bij Guess the Number " + name + "!!");

numberToBeGuessed = Math.floor(Math.random() * (max - min)) + min;
console.log("Pssst het nummer is: " + numberToBeGuessed);

while (guess !== numberToBeGuessed) {
  guess = parseInt(prompt("Voer een nummer in.."));
  alert("Je gok is:" + guess);
  if (guess > numberToBeGuessed) {
    alert("Helaas, je gok was te hoog. Probeer het opnieuw:");
  } else if (guess < numberToBeGuessed) {
    alert("Helaaaas, je gok was te laag. Probeer het opnieuw:");
  } else {
    alert("Goed geraden, het nummer was inderdaad: " + guess);
    alert(
      "We sluiten de game af. Bedankt voor het spelen, tot de volgende keer!"
    );
  }
}
