const isAdult = person => person.age > 17;

const convertExpirationDate = credit_card => {
  const expiration = credit_card.credit_card.expiration.split("/");
  const expirationYear = parseInt("20" + expiration[1]);
  const expirationMonth = parseInt(expiration[0]) - 1; // Jan = 0, Dec = 11
  const expirationDay = 1; // Default
  credit_card.expiration_date = new Date(
    expirationYear,
    expirationMonth,
    expirationDay
  );
  return credit_card;
};

// Take out the expiration_date immediately.
const cardExpiresInOneYear = ({ expiration_date }) => {
  // Thanks Stack Overflow https://stackoverflow.com/a/29052008
  const oneYearFromNow = new Date(
    new Date().setFullYear(new Date().getFullYear() + 1)
  );
  const now = new Date();

  return expiration_date > now && expiration_date < oneYearFromNow;
};

const sortByExpirationDate = (card1, card2) =>
  sort_helper(card1.expiration_date > card2.expiration_date);

const getCreditCardsThatWillExpire = () =>
  randomPersonData
    .filter(isAdult)
    .map(convertExpirationDate)
    .filter(cardExpiresInOneYear)
    // Earlier dates at the top.
    .sort(sortByExpirationDate);

const generateCCHTML = card => {
  const li = document.createElement("li");

  const name = document.createElement("span");
  name.innerHTML = `${card.name} ${card.surname}`;

  const phone = document.createElement("span");
  phone.innerHTML = `Phone: ${card.phone}`;

  const card_details = document.createElement("span");
  card_details.innerHTML = `Card: ${card.credit_card.number}`;

  const expires = document.createElement("span");
  expires.innerHTML = `Expires: ${card.credit_card.expiration}`;

  li.appendChild(name);
  li.appendChild(phone);
  li.appendChild(card_details);
  li.appendChild(expires);

  return li;
};

const displayOldCreditcardList = () =>
  getCreditCardsThatWillExpire().map(generateCCHTML).forEach(addToResultList);

document
  .querySelector(".credit-card")
  .addEventListener("click", displayOldCreditcardList);
