// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

const tellFortune = function(jobTitle, geoLocation, partner, numKids) {
  let future =
    "You will be a " +
    jobTitle +
    " in " +
    geoLocation +
    " and married to " +
    partner +
    " " +
    " with " +
    numKids +
    " kids.";
  console.log(future);
};

tellFortune("bball player", "spain", "Shaq", 3);
tellFortune("stunt double", "Japan", "Ryan Gosling", 3000);
tellFortune("Elvis impersonator", "Russia", "The Oatmeal", 0);
