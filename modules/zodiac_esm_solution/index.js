// Ignore this for now
import { randomPersonData } from "./data.js";

const consoleDeep = something => {
    console.dir(something, { depth: null });
};

// Returns today's date as simple object.
const getCurrentDate = () => {
    const today = new Date();
    return {
        year: today.getFullYear(),
        month: today.getMonth() + 1, // Months starts at 0 😕
        day: today.getDate(), // Days start at 1
    };
};

// input: "29/08/1987"
// output: object with year, month, day as numbers
const transformDateOfBirth = dateStr => {
    const year = Number(dateStr.split("/")[2]);
    const month = Number(dateStr.split("/")[1]);
    const day = Number(dateStr.split("/")[0]);
    return {
        year,
        month,
        day,
    };
};

const calculateAge = (dateToday, dateOfBirth) => {
    let age = dateToday.year - dateOfBirth.year;

    let birthDayCelebratedThisYear = false;
    if (dateOfBirth.month < dateToday.month) {
        birthDayCelebratedThisYear = true;
    }
    if (dateOfBirth.month === dateToday.month) {
        if (dateOfBirth.day <= dateToday.day) {
            birthDayCelebratedThisYear = true;
        }
    }

    if (!birthDayCelebratedThisYear) {
        age -= 1;
    }
    return age;
};

// These can be global because they're constants.
const ARIES = "Aries";
const TAURUS = "Taurus";
const GEMINI = "Gemini";
const CANCER = "Cancer";
const LEO = "Leo";
const VIRGO = "Virgo";
const LIBRA = "Libra";
const SCORPIO = "Scorpio";
const SAGGITARIUS = "Saggitarius";
const CAPRICORN = "Capricorn";
const AQUARIUS = "Aquarius";
const PISCES = "Pisces";

// "29/08/1987"
const dateToZodiac = dateOfBirth => {
    const day = dateOfBirth.day;
    const month = dateOfBirth.month;
    // Source: https://en.wikipedia.org/wiki/Astrological_sign#Western_astrological_correspondence_chart
    // Normally adding {} to if statements is better but here's an exception.
    // See https://stackoverflow.com/q/4797286/61109
    if (month === 1 && day <= 19) return CAPRICORN;
    if (month === 1 && day >= 20) return AQUARIUS;
    if (month === 2 && day <= 18) return AQUARIUS;
    if (month === 2 && day >= 19) return PISCES;
    if (month === 3 && day <= 20) return PISCES;
    if (month === 3 && day >= 21) return ARIES;
    if (month === 4 && day <= 19) return ARIES;
    if (month === 4 && day >= 20) return TAURUS;
    if (month === 5 && day <= 20) return TAURUS;
    if (month === 5 && day >= 21) return GEMINI;
    if (month === 6 && day <= 21) return GEMINI;
    if (month === 6 && day >= 22) return CANCER;
    if (month === 7 && day <= 22) return CANCER;
    if (month === 7 && day >= 23) return LEO;
    if (month === 8 && day <= 22) return LEO;
    if (month === 8 && day >= 23) return VIRGO;
    if (month === 9 && day <= 22) return VIRGO;
    if (month === 9 && day >= 23) return LIBRA;
    if (month === 10 && day <= 22) return LIBRA;
    if (month === 10 && day >= 23) return SCORPIO;
    if (month === 11 && day <= 22) return SCORPIO;
    if (month === 11 && day >= 23) return SAGGITARIUS;
    if (month === 12 && day <= 21) return SAGGITARIUS;
    if (month === 12 && day >= 22) return CAPRICORN;
};

const zodiacSignsMatch = (zodiac1, zodiac2) => {
    const matches = {
        [ARIES]: [ARIES, LEO, SAGGITARIUS, GEMINI, LIBRA, AQUARIUS],
        [LEO]: [ARIES, LEO, SAGGITARIUS, GEMINI, LIBRA],
        [SAGGITARIUS]: [ARIES, LEO, SAGGITARIUS, GEMINI, LIBRA, AQUARIUS],
        [TAURUS]: [TAURUS, VIRGO, CAPRICORN, CANCER, SCORPIO, PISCES],
        [VIRGO]: [TAURUS, VIRGO, CAPRICORN, CANCER, SCORPIO],
        [CAPRICORN]: [TAURUS, VIRGO, CAPRICORN, CANCER, SCORPIO, PISCES],
        [GEMINI]: [ARIES, LEO, GEMINI, LIBRA, AQUARIUS],
        [LIBRA]: [LEO, SAGGITARIUS, GEMINI, LIBRA, AQUARIUS],
        [AQUARIUS]: [ARIES, LEO, SAGGITARIUS, GEMINI, LIBRA, AQUARIUS],
        [CANCER]: [TAURUS, VIRGO, CAPRICORN, CANCER, SCORPIO, PISCES],
        [SCORPIO]: [TAURUS, VIRGO, CAPRICORN, CANCER, SCORPIO, PISCES],
        [PISCES]: [TAURUS, CAPRICORN, CANCER, SCORPIO, PISCES],
    };
    return matches[zodiac1].includes(zodiac2);
};

// The function body is a single expression so no need for {}.
const personsMatchBasedOnZodiac = (personA, personB) =>
    zodiacSignsMatch(personA.zodiac, personB.zodiac);

// We want difference to always be positive for easier comparison.
const getAgeDifference = (personA, personB) =>
    Math.abs(personA.age - personB.age);

// For use with array.sort
const compareByAgeYearDifference = (personA, personB) => {
    const differenceA = personA.ageDifferenceWithCandidate;
    const differenceB = personB.ageDifferenceWithCandidate;

    if (differenceA > differenceB) return 1;
    if (differenceB > differenceA) return -1;
    return 0;
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