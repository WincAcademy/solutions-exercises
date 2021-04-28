let numberToBeGuessed = null;
let name;
let guess;
let numberOfGuesses = 5;
const min = 0;
let max = 25;

while (name === undefined || name === null || name.length === 0) {
    name = prompt("Hoe heet je?");
}

alert("Welkom bij Guess the Number " + name + "!!");

max = parseInt(prompt("Tot welk nummer mag er geraden worden?"));

alert("Je hebt nu 5 pogingen om het getal te raden. Het getal ligt tussen 0 en " + max + ". Heel veel succes!");

numberToBeGuessed = Math.floor(Math.random() * (max - min)) + min;
console.log("Pssst het nummer is: " + numberToBeGuessed);

while (guess !== numberToBeGuessed) {
    if (numberOfGuesses < 1) {
        alert("Helaas, je pogingen zijn op. Je hebt verloren. We beginnen weer opnieuw met een nieuw nummer! Het nummer ligt nog steeds tussen 0 en " + max + ".");
        numberOfGuesses = 5;
        numberToBeGuessed = Math.floor(Math.random() * (max - min)) + min;
    }
    guess = parseInt(prompt("Voer een nummer in.."));

    while (isNaN(guess)) {
        guess = parseInt(prompt("Je invoer was geen nummer. Voer alleen nummers in! Probeer het nogmaals"));
    }

    alert("Je gok is: " + guess);

    if (guess > numberToBeGuessed) {
        numberOfGuesses--;
        if (numberOfGuesses < 1) {
            alert("Dit was je laatste poging.");
        } else {
            alert("Helaas, je gok was te hoog. Je hebt nog: " + numberOfGuesses + " keuze(s) over. Probeer het opnieuw:");
        }
    } else if (guess < numberToBeGuessed) {
        numberOfGuesses--;
        if (numberOfGuesses < 1) {
            alert("Dit was je laatste poging.");
        } else {
            alert("Helaaaas, je gok was te laag. Je hebt nog: " + numberOfGuesses + " keuze(s) over. Probeer het opnieuw:");
        }
    } else {
        alert("Goed geraden, het nummer was inderdaad: " + guess);
        alert(
            "We sluiten de game af. Bedankt voor het spelen, tot de volgende keer!"
        );
    }
}