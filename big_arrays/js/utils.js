// The callback we pass into array.sort officially should return 1, 0 or -1
// Firefox does this conversion itself.
// Chrome needs this helper.
const sort_helper = result => {
  // We can make this shorter with a ternary.
  if (result) {
    return 1;
  } else {
    return -1;
  }
};

const getStarSign = (month, day) => {
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

const addStarSign = person => {
  const month = parseInt(person.birthday.dmy.split("/")[1]); // 1..12
  const day = parseInt(person.birthday.dmy.split("/")[0]); // 1..31
  person.sign = getStarSign(month, day);
  return person;
};

// A function we pass to array.reduce.
// We could use Set to make this nicer.
const keepUnique = (items, item) => {
  // We don't want the caller to have to pass in an empty array.
  if (!Array.isArray(items)) items = [];
  if (!items.includes(item)) items.push(item);
  return items;
};

const getCountries = personData =>
  personData
    .map(person => person.region)
    .reduce(keepUnique)
    .sort();

const emptyResultList = () =>
  (document.querySelector(".results").innerHTML = "");

const addToResultList = li =>
  document.querySelector(".results").appendChild(li);

const emptyButtonList = () =>
  (document.querySelector(".sub_buttons").innerHTML = "");

const addToButtonList = button =>
  document.querySelector(".sub_buttons").appendChild(button);

// Each nav button we click should first empty the UI.
// ! These elements will get multiple event listeners.
document.querySelectorAll("nav input").forEach(input =>
  input.addEventListener("click", () => {
    emptyResultList();
    emptyButtonList();
  })
);
