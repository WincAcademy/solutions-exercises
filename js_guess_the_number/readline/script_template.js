  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const getNameFromUser = function(question) {
     readline.question(question, (answer) => {
        console.log("Hallo! ", answer)
        startGame()
    })
  }

/* Hierboven zie je de functies die te maken hebben met de readline module van node. 
 Je mag erin prutsen als je wilt weten hoe het werkt, maar je hoeft er niks aan de veranderen voor je spel.
 Er is 1 functie waar je ook de readline module in gebruiken: getNumberInputFromUser.
 Je moet daar nog een klein dingetje aan toevoegen, daarom staat die functie wel hieronder  */

 // vul de volgende functies aan! 

  const numberToBeGuessed = null;

  const startGame = function() {
      // Inititaliseer je game 
      // Pak een "random" nummer tussen de 0 en 25
      // assign het "random" number aan de variable "numberToBeGuessed" die je hierboven declared ziet.
      getNumberInputFromUser()
  }

  const endGame = function() {
    // Zeg dag tegen je gebruiker en bedankt voor het spelen 
    readline.close()
  }

  const checkInputFromUser = function(inputFromUser){
    //Check of de gebruiker input (inputFromUser) het juiste nummer heeft geraden. 
    // Zo ja: feliciteer de gebruiker en ga dan door naar endGame functie
    // Zo nee: vraag nog een keer om input van de gebruiker met de getNumberFromUser functie
    // Zie ik daar een if statement? Ik denk het wel.
 
    // Pro-tip: je gaat de inputFromUser vergelijken met de numberToBeGuessed  
    // Is inputFromUser van het type number? Hoe kun je dat checken? 
    // Zo nee, hoe kun je dat veranderen? Zodat je de vergelijking met je if-statement goed kunt uitvoeren?
    // Is numberToBeGuessed van het type number? 
  }

  const getNumberInputFromUser = function() {
    readline.question(`Voer een nummer in...`, (number) => {
        console.log("Je raadde dit nummer:", number)
        // ga door met de checkInputFromUser functie
      })
  }

getNameFromUser('Wat is je naam?')
