const generateCountryHTML = country => {
  const li = document.createElement("li");
  li.innerHTML = country;
  return li;
};

const displayCountries = () =>
  getCountries(randomPersonData)
    .map(generateCountryHTML)
    .forEach(addToResultList);

document
  .querySelector(".countries")
  .addEventListener("click", displayCountries);
