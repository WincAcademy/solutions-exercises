const getCountries = personData => {
  // We could also do this with sets.
  const countries = [];
  // Unpack immediately
  randomPersonData.forEach(({ region }) => {
    if (!countries.includes(region)) {
      countries.push(region);
    }
  });
  countries.sort();
  return countries;
};

const generateCountryHTML = country => {
  const li = document.createElement("li");
  li.innerHTML = country;
  return li;
};

const displayCountries = () => {
  const resultList = document.querySelector(".results");
  resultList.innerHTML = "";
  const countries = getCountries(randomPersonData);
  countries.map(generateCountryHTML).forEach(li => resultList.appendChild(li));
};

document
  .querySelector(".countries")
  .addEventListener("click", displayCountries);
