const getCountriesWithAmountOfPeople = personData => {
  // A large part of this function could be a big reduce call.

  let countries = {};
  // Count amount of people per country
  // Unpack immediately
  personData.forEach(({ region }) => {
    if (region in countries) {
      countries[region]++;
    } else {
      countries[region] = 1;
    }
  });

  // So now we have an object with keys country and values amount of people.
  // Convert into array of objects with country name and amount of people, so we can sort.
  countries = Object.entries(countries);
  countries = countries.map(country => ({
    country: country[0],
    inhabitants: country[1],
  }));

  // Sort by most populous
  countries.sort((country1, country2) =>
    sort_helper(country1.inhabitants < country2.inhabitants)
  );
  return countries;
};

// Unpack immediately
const generateCountryAndInhabitantsHTML = ({ country, inhabitants }) => {
  const li = document.createElement("li");
  li.innerHTML = `${country} - ${inhabitants}`;
  return li;
};

const displayCountriesSortedByPeople = () =>
  getCountriesWithAmountOfPeople(randomPersonData)
    .map(generateCountryAndInhabitantsHTML)
    .forEach(addToResultList);

document
  .querySelector(".countries_most_people")
  .addEventListener("click", displayCountriesSortedByPeople);
