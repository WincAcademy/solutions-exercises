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

export {dateToZodiac, zodiacSignsMatch};
