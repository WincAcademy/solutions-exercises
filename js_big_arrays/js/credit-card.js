const isAdult = person => person.age > 17;

const convertExpirationDate = person => {
    // expiration: ["1", "21"]
    const expiration = person.credit_card.expiration.split("/");
    // parseInt("20" + "21")
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

// Take out the expiration_date immediately.
const cardExpiresInOneYear = ({ credit_card }) => {
    // Thanks Stack Overflow https://stackoverflow.com/a/29052008
    const oneYearFromNow = new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
    );
    const now = new Date();
    return (
        credit_card.expiration_date > now &&
        credit_card.expiration_date < oneYearFromNow
    );
};

const sortByExpirationDate = (person1, person2) => {
    return sort_helper(
        person1.credit_card.expiration_date > person2.credit_card.expiration_date
    );
};

const getCreditCardsThatWillExpire = () => {
    const adults = randomPersonData.filter(isAdult);
    const adultsWithNiceExpirationDatesOnCCs = adults.map(convertExpirationDate);
    const adultsWithExpiredCards = adultsWithNiceExpirationDatesOnCCs.filter(
        cardExpiresInOneYear
    );
    // // Earlier dates at the top.
    const sortedAdultsWithExpiredCards = adultsWithExpiredCards.sort(
        sortByExpirationDate
    );
    return sortedAdultsWithExpiredCards;
};

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