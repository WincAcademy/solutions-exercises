const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

let numberToBeGuessed = null;

  const getNameFromUser = function(question) {
     readline.question(question, (answer) => {
        console.log("Hallo! ", answer);
        startGame();
    })
  }

  const startGame = function() {
      const min = 0;
      const max = 25;
      numberToBeGuessed = Math.floor(Math.random() * (max - min)) + min;
      console.log(numberToBeGuessed);
      getNumberInputFromUser();
  }

  const endGame = function() {
    // Zeg dag tegen je gebruiker en bedankt voor het spelen 
    console.log("We sluiten de game af. Bedankt voor het spelen, tot de volgende keer!")
    readline.close();
  }

  const checkInputFromUser = function(inputUser){
    console.log("Je input wordt gecheckt...:" )
    // Parse de input naar een number
    const numberInput = Number(inputUser)
    if (numberInput === numberToBeGuessed) {
      console.log(" dat is goed!! Gefeliciteerd")
      endGame()
    } else {
      console.log(inputUser, " ...dat is helaas niet goed. Probeer het opnieuw")
      getNumberInputFromUser()
    }
    //Check of de gebruiker het juiste nummer heeft geraden. 
    // Zo ja: feliciteer de gebruiker en ga dan door naar endgame 
    // Zo nee: vraag nog een keer om input van de gebruiker 
    // Zie ik daar een if statement? Ik denk het wel
  }
 
  const getNumberInputFromUser = function() {
    readline.question(`Voer een nummer in...`, (number) => {
        // Doe iets met de input van de user. 
        // roep een andere functie aan...
        console.log("Je raadde", number)
        checkInputFromUser(number)
      })
  }

getNameFromUser('Whats your name?')
