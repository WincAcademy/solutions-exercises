// Only works in an environment where we have a prompt (so browser or REPL.it for example)
// Ask people for their rating
const movieRating1 = parseInt(prompt("How does person 1 rate the movie?"));
const movieRating2 = parseInt(prompt("How does person 2 rate the movie?"));
const movieRating3 = parseInt(prompt("How does person 3 rate the movie?"));

// Calculate total rating
const total = movieRating1 + movieRating2 + movieRating3;

// Calculate average
const average = total / 3;

// Print to console
console.log(average);

// Round the average
const roundedAverage = Math.round(average);
console.log(roundedAverage);