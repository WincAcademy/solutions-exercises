const isAdult = person => person.age > 17;

const convertExpirationDate = person => {
  const expiration = person.credit_card.expiration.split("/");
  const expirationYear = parseInt("20" + expiration[1]);
  const expirationMonth = parseInt(expiration[0]) - 1; // Jan = 0, Dec = 11
  const expirationDay = 1; // Default
  person.credit_card.expiration_date = new Date(
    expirationYear,
    expirationMonth,
    expirationDay
  );
  return person;
};

const cardExpiresInTheFuture = person =>
  person.credit_card.expiration_date > new Date();

const cardExpiresInOneYear = person => {
  // We could make this function a single expression, but that's a little harder to read.
  // Thanks Stack Overflow https://stackoverflow.com/a/29052008
  const oneYearFromNow = new Date(
    new Date().setFullYear(new Date().getFullYear() + 1)
  );
  return person.credit_card.expiration_date < oneYearFromNow;
};

// Convert person object to only necessary details for this job.
const necessaryDetailsOnly = person => ({
  name: person.name,
  surname: person.surname,
  phone: person.phone,
  number: person.credit_card.number,
  expiration: person.credit_card.expiration,
  expiration_date: person.credit_card.expiration_date,
});

const getCreditCardsThatWillExpire = () => {
  const creditcards = randomPersonData
    .filter(isAdult)
    .map(convertExpirationDate)
    .filter(cardExpiresInTheFuture)
    .filter(cardExpiresInOneYear)
    .map(necessaryDetailsOnly);

  creditcards.sort(
    (card1, card2) => card1.expiration_date > card2.expiration_date
  );

  return creditcards;
};

const generateCCHTML = card => {
  const li = document.createElement("li");

  const name = document.createElement("span");
  name.innerHTML = `${card.name} ${card.surname}`;

  const phone = document.createElement("span");
  phone.innerHTML = `Phone: ${card.phone}`;

  const card_details = document.createElement("span");
  card_details.innerHTML = `Card: ${card.number}`;

  const expires = document.createElement("span");
  expires.innerHTML = `Expires: ${card.expiration}`;

  li.appendChild(name);
  li.appendChild(phone);
  li.appendChild(card_details);
  li.appendChild(expires);

  return li;
};

const displayOldCreditcardList = () => {
  const resultList = document.querySelector("ul.results");

  resultList.innerHTML = "";
  getCreditCardsThatWillExpire()
    .map(generateCCHTML)
    .forEach(liHTML => resultList.appendChild(liHTML));
};

document
  .querySelector(".credit-card")
  .addEventListener("click", displayOldCreditcardList);
