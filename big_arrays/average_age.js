const calculateAverageAgeForCountry = (randomPersonData, country) => {
  const peopleFromCountry = randomPersonData.filter(
    person => person.region === country
  );

  const amountOfPeople = peopleFromCountry.length;

  if (amountOfPeople === 0) {
    // Don't want to divide by 0.
    return 0;
  }

  const totalAge = peopleFromCountry.reduce(
    (sum, current) => sum + current.age,
    0
  );

  return Math.round(totalAge / amountOfPeople);
};

const displayAverageAgeForCountry = () => {
  const country = event.target.value;
  const average_age = calculateAverageAgeForCountry(randomPersonData, country);

  const resultList = document.querySelector(".results");
  resultList.innerHTML = "";

  const li = document.createElement("li");
  li.innerHTML = `The average age for ${country} is ${average_age}`;
  resultList.appendChild(li);
};

const getCountryButtonHTML = country => {
  const button = document.createElement("input");
  button.type = "button";
  button.value = country;
  button.addEventListener("click", displayAverageAgeForCountry);
  return button;
};

const displayCountryButtons = countries => {
  const country_buttons = document.querySelector(".country_buttons");
  country_buttons.innerHTML = "";

  countries
    .map(getCountryButtonHTML)
    .forEach(countryButtonHTML =>
      country_buttons.appendChild(countryButtonHTML)
    );
};

const displayAverageAgeButtons = () => {
  const countries = getCountries(randomPersonData);
  displayCountryButtons(countries);
};

document
  .querySelector(".average_age")
  .addEventListener("click", displayAverageAgeButtons);
