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

// We assume every one has a unique credit card number here.
const getPersonWithId = (people, credit_card_number) =>
  people.filter(person => person.credit_card.number === credit_card_number)[0];

const getMatchingSigns = sign =>
  ({
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
  }[sign]);

const getMatchesForSign = (people, sign) => {
  const matchingSigns = getMatchingSigns(sign);
  const matches = people.filter(potentialMatch =>
    matchingSigns.includes(potentialMatch.sign)
  );
  return matches;
};

const getMatchesForPerson = event => {
  const credit_card_number = event.target.dataset.id;

  // Using global variable here, not that nice.
  // Calling getPeople again is not very efficient.
  const people = getPeople(randomPersonData);

  const person = getPersonWithId(people, credit_card_number);
  person.self = true;
  let matches = getMatchesForSign(people, person.sign);
  // Don't match with yourself.
  matches = matches.filter(
    person => person.credit_card.number !== credit_card_number
  );

  // Display every one with self at the top.
  displayPeople([person].concat(matches));
};

const getStarSign = ({ birthday }) => {
  const month = parseInt(birthday.dmy.split("/")[1]);
  const day = parseInt(birthday.dmy.split("/")[0]);

  // Normally adding {} to if statements is better but here's an exception.
  if (month === 1 && day <= 20) return CAPRICORN;
  if (month === 1 && day >= 21) return AQUARIUS;
  if (month === 2 && day <= 19) return AQUARIUS;
  if (month === 2 && day >= 20) return PISCES;
  if (month === 3 && day <= 20) return PISCES;
  if (month === 3 && day >= 21) return ARIES;
  if (month === 4 && day <= 20) return ARIES;
  if (month === 4 && day >= 21) return TAURUS;
  if (month === 5 && day <= 20) return TAURUS;
  if (month === 5 && day >= 21) return GEMINI;
  if (month === 6 && day <= 21) return GEMINI;
  if (month === 6 && day >= 22) return CANCER;
  if (month === 7 && day <= 22) return CANCER;
  if (month === 7 && day >= 23) return LEO;
  if (month === 8 && day <= 23) return LEO;
  if (month === 8 && day >= 24) return VIRGO;
  if (month === 9 && day <= 21) return VIRGO;
  if (month === 9 && day >= 22) return LIBRA;
  if (month === 10 && day <= 22) return LIBRA;
  if (month === 10 && day >= 23) return SCORPIO;
  if (month === 11 && day <= 21) return SCORPIO;
  if (month === 11 && day >= 22) return SAGGITARIUS;
  if (month === 12 && day <= 21) return SAGGITARIUS;
  if (month === 12 && day >= 22) return CAPRICORN;
};

const getPersonCardHTML = ({
  name,
  surname,
  self,
  region,
  age,
  birthday,
  sign,
  credit_card,
}) => {
  const nameSpan = document.createElement("span");
  nameSpan.classList.add("name");
  nameSpan.innerHTML = `${name} ${surname}`;

  const countrySpan = document.createElement("span");
  nameSpan.classList.add("country");
  countrySpan.innerHTML = `Country: ${region}`;

  const ageSpan = document.createElement("span");
  nameSpan.classList.add("age");
  ageSpan.innerHTML = `Age: ${age}`;

  const birthdaySpan = document.createElement("span");
  birthdaySpan.innerHTML = `Date of birth: ${birthday.dmy}`;

  const signSpan = document.createElement("span");
  signSpan.innerHTML = `Astrological sign: ${sign}`;

  const button = document.createElement("input");
  button.type = "button";
  button.value = `Find matches`;
  // We use data attributes to refer to a specific person
  // We make a (very poor) assumption here that no one has the same credit card number
  button.dataset.id = credit_card.number;
  button.addEventListener("click", getMatchesForPerson);

  const card = document.createElement("div");
  card.classList.add("card");
  if (self) {
    card.classList.add("self");
  }

  card.appendChild(nameSpan);
  card.appendChild(countrySpan);
  card.appendChild(ageSpan);
  card.appendChild(birthdaySpan);
  card.appendChild(signSpan);
  card.appendChild(button);

  return card;
};

const displayPeople = people => {
  emptyResultList();
  emptyButtonList();
  people.map(getPersonCardHTML).forEach(addToButtonList);
};

const getPeople = personData => {
  personData = personData
    .filter(person => person.age > 17)
    .map(person => {
      person.self = false; // TODO: Could make this nicer.
      return person;
    })
    .map(person => {
      person.sign = getStarSign(person);
      return person;
    });
  personData.sort((person1, person2) =>
    sort_helper(person1.name < person2.name)
  );
  return personData;
};

const matchMaking = () => {
  emptyUI();
  const people = getPeople(randomPersonData);
  displayPeople(people);
};

document.querySelector(".matchmaking").addEventListener("click", matchMaking);
