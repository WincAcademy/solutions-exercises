// Ignore this for now
import { randomPersonData } from "./data.js";
import {getCurrentDate, transformDateOfBirth, calculateAge} from "./dates.js";
import {dateToZodiac, zodiacSignsMatch} from "./zodiac.js";

const consoleDeep = something => {
    console.dir(something, { depth: null });
};

// The function body is a single expression so no need for {}.
const personsMatchBasedOnZodiac = (personA, personB) =>
    zodiacSignsMatch(personA.zodiac, personB.zodiac);

const getAgeDifference = (personA, personB) => 
  Math.abs(personA.age - personB.age);

// For use with array.sort
const compareByAgeYearDifference = (personA, personB) => {
  const differenceA = personA.ageDifferenceWithCandidate;
  const differenceB = personB.ageDifferenceWithCandidate;

  if (differenceA > differenceB) return 1;
  if (differenceB > differenceA) return -1;
  return 0
}; 


const findMatches = (randomPersonData, dateStr) => {
    const dateToday = getCurrentDate();

    // Massage data for candidate.
    const candidate = {};
    candidate.dateOfBirth = transformDateOfBirth(dateStr);
    candidate.zodiac = dateToZodiac(candidate.dateOfBirth);
    candidate.age = calculateAge(dateToday, candidate.dateOfBirth);

    // Massage randomPersonData data
    // We use "let" here so we can reassign
    let potentialMatches = randomPersonData.map(person => {
        person.dateOfBirth = transformDateOfBirth(person.birthday.dmy);
        person.age = calculateAge(dateToday, person.dateOfBirth);
        person.zodiac = dateToZodiac(person.dateOfBirth);
        person.ageDifferenceWithCandidate = getAgeDifference(person, candidate);
        return person;
    });

    // Keep matches with compatible zodiac signs
    potentialMatches = potentialMatches.filter(match => {
        return personsMatchBasedOnZodiac(match, candidate);
    });

    // Sort by age difference
    // Sort is in-place so no need to re-assign.
    potentialMatches.sort(compareByAgeYearDifference);

    // Limit to first 20
    potentialMatches = potentialMatches.slice(0, 20);

    return potentialMatches;
};
const displayMatches = matches => {
    matches.forEach(match => {
        console.log(`Name: ${match.name} ${match.surname}`);
        console.log(`Zodiac: ${match.zodiac}`);
        console.log(`Age: ${match.age}`);
        // Separator
        console.log("-----");
    });
};

const matches = findMatches(randomPersonData, "16/07/1995");
// consoleDeep(matches.slice(0,5));
displayMatches(matches);
