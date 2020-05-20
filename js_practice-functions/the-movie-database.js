/*It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie: title (a string), 
duration (a number), and stars (an array of strings).
Create a function to print out the movie information like so: 
"Puff the Magic Dragon lasts for 30 minutes. 
Stars: Puff, Jackie, Living Sneezes." */

const myFavMovie = {
  title: "Puff the Magic Dragon",
  duration: 220,
  stars: ["Puff", "Jackie", "Living Sneezes"]
};

// De oplossing met een for loop
const printMovie1 = function(movie) {
  console.log(movie.title + " lasts for " + movie.duration + " minutes");
  let starsString = "Stars: ";
  for (let i = 0; i < movie.stars.length; i++) {
    starsString += movie.stars[i];
    // Uigebreide syntax: starsString = starsString + movie.stars[i]
    if (i !== movie.stars.length - 1) {
      starsString += ", ";
    }
  }
  console.log(starsString);
};

// De oplossing met een array.join
const printMovie2 = function(movie) {
  console.log(movie.title + " lasts for " + movie.duration + " minutes");
  console.log("It stars: " + movie.stars.join(", "));
};
printMovie1(myFavMovie);
printMovie2(myFavMovie);
