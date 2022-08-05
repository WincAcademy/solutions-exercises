let numberToBeGuessed = null;
let userName;
let currentGuess;
let numberOfGuesses = 5;
let minNum = 0;
let maxNum = 25;

/*
  setup
*/
while (userName === undefined || userName === null || userName.length === 0) {
  userName = prompt("Hoe heet je?");
}

alert("Welkom bij Guess the Number " + userName + "!!");

/* Bonus 2*/
let selectedMinNum = parseInt(
  prompt("Vanaf welk nummer mag er geraden worden? (standaard: 0)")
);
// check whether selectedMinNum is a valid number otherwise stay with default
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
// check whether selectedMaxNum is a valid number otherwise stay with default
if (!isNaN(selectedMaxNum)) {
  maxNum = selectedMaxNum;
}

// if maximum is lower than minimum ask for new max
while (maxNum <= minNum) {
  let selectedMaxNum = parseInt(
    prompt("Het maximale nummer was lager dan het minimale nummer. Tot welk nummer mag er geraden worden? (hoger dan " + minNum + ")")
  );
  if (!isNaN(selectedMaxNum)) {
    maxNum = selectedMaxNum;
  }
}
/* Bonus 2 end */


alert(
  "Je hebt nu 5 pogingen om het getal te raden. Het getal ligt tussen " +
  minNum +
  " en " +
  maxNum +
  ". Heel veel succes!"
);

numberToBeGuessed = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
console.log("Pssst het nummer is: " + numberToBeGuessed);

/* 
  start the game
*/
while (currentGuess !== numberToBeGuessed) {
  // Bonus 1
  // if user has no more guesses reset and start again
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

  // Bonus 1
  numberOfGuesses--;

  let message = ""

  if (currentGuess === numberToBeGuessed) {
    message = "Goed geraden, het nummer was inderdaad: " + currentGuess;
  }
  else {
    if (currentGuess > numberToBeGuessed) {
      message = "Helaas, je gok was te hoog."
    }
    if (currentGuess < numberToBeGuessed) {
      message = "Helaas, je gok was te laag."
    }

    // Bonus 1
    // Feedback the numberOfGuesses the user has
    if (numberOfGuesses < 1) {
      message += "Dit was je laatste poging.";
    }
    else {
      message += "Je hebt nog: " +
        numberOfGuesses +
        " keuze(s) over. Probeer het opnieuw:";
    }
  }
  // Show resulting message to the user
  alert(message);
}

alert(
  "We sluiten de game af. Bedankt voor het spelen " +
  userName +
  ", tot de volgende keer!"
);
