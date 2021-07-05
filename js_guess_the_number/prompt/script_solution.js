let numberToBeGuessed = null;
let userName;
let currentGuess;
let numberOfGuesses = 5;
let minNum = 0;
let maxNum = 25;

while (userName === undefined || userName === null || userName.length === 0) {
  userName = prompt("Hoe heet je?");
}

alert("Welkom bij Guess the Number " + userName + "!!");

let selectedMinNum = parseInt(
  prompt("Vanaf welk nummer mag er geraden worden? (standaard: 0)")
);
if (!isNaN(selectedMinNum) && selectedMinNum >= 0) {
  minNum = selectedMinNum;
}

let selectedMaxNum = parseInt(
  prompt(
    "Tot welk nummer mag er geraden worden? (standaard: 25, hoger dan " +
      minNum +
      ")"
  )
);
if (!isNaN(selectedMaxNum)) {
  maxNum = selectedMaxNum;
}

while (maxNum <= minNum) {
  let selectedMaxNum = parseInt(
    prompt("Tot welk nummer mag er geraden worden? (hoger dan " + minNum + ")")
  );
  if (!isNaN(selectedMaxNum)) {
    maxNum = selectedMaxNum;
  }
}

alert(
  "Je hebt nu 5 pogingen om het getal te raden. Het getal ligt tussen " +
    minNum +
    " en " +
    maxNum +
    ". Heel veel succes!"
);

numberToBeGuessed = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
console.log("Pssst het nummer is: " + numberToBeGuessed);

while (currentGuess !== numberToBeGuessed) {
  if (numberOfGuesses < 1) {
    alert(
      "Helaas, je pogingen zijn op. Je hebt verloren. We beginnen weer opnieuw met een nieuw nummer! Het nummer ligt nog steeds tussen " +
        minNum +
        " en " +
        maxNum +
        "."
    );
    numberOfGuesses = 5;
    numberToBeGuessed = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
  }
  currentGuess = parseInt(prompt("Voer een nummer in.."));

  while (isNaN(currentGuess)) {
    currentGuess = parseInt(
      prompt(
        "Je invoer was geen nummer. Voer alleen nummers in! Probeer het nogmaals"
      )
    );
  }

  alert("Je gok is: " + currentGuess);

  if (currentGuess > numberToBeGuessed) {
    numberOfGuesses--;
    if (numberOfGuesses < 1) {
      alert("Dit was je laatste poging.");
    } else {
      alert(
        "Helaas, je gok was te hoog. Je hebt nog: " +
          numberOfGuesses +
          " keuze(s) over. Probeer het opnieuw:"
      );
    }
  } else if (currentGuess < numberToBeGuessed) {
    numberOfGuesses--;
    if (numberOfGuesses < 1) {
      alert("Dit was je laatste poging.");
    } else {
      alert(
        "Helaaaas, je gok was te laag. Je hebt nog: " +
          numberOfGuesses +
          " keuze(s) over. Probeer het opnieuw:"
      );
    }
  } else {
    alert("Goed geraden, het nummer was inderdaad: " + currentGuess);
    alert(
      "We sluiten de game af. Bedankt voor het spelen " +
        userName +
        ", tot de volgende keer!"
    );
  }
}
