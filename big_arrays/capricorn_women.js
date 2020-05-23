const isWoman = person => person.gender === "female";

const isOver30 = person => person.age > 30;

const isCapricorn = ({ birthday }) => {
  const birthMonth = parseInt(birthday.dmy.split("/")[1]);
  const birthDay = parseInt(birthday.dmy.split("/")[0]);
  if (birthMonth === 12 && birthDay >= 22) {
    return true;
  }

  if (birthMonth === 1 && birthDay <= 19) {
    return true;
  }

  return false;
};

const getCapricornWomen = personData => {
  const capricorn_women = personData
    .filter(isWoman)
    .filter(isOver30)
    .filter(isCapricorn);
  capricorn_women.sort((woman1, woman2) =>
    sort_helper(woman1.name > woman2.name)
  );
  return capricorn_women;
};

const generateCapricornWomanHTML = ({
  name,
  surname,
  photo,
  age,
  birthday,
}) => {
  // I've added age and birthday to make manual checking easier.
  const nameSpan = document.createElement("span");
  nameSpan.innerHTML = `${name} ${surname}`;

  const photoSpan = document.createElement("span");
  photoSpan.innerHTML = photo;

  const ageSpan = document.createElement("span");
  ageSpan.innerHTML = age;

  const birthdaySpan = document.createElement("span");
  birthdaySpan.innerHTML = birthday.dmy;

  const li = document.createElement("li");
  li.appendChild(nameSpan);
  li.appendChild(photoSpan);
  li.appendChild(ageSpan);
  li.appendChild(birthdaySpan);

  return li;
};

const displayCapricornWomen = () => {
  const resultList = document.querySelector(".results");
  resultList.innerHTML = "";

  const capricorn_women = getCapricornWomen(randomPersonData);
  capricorn_women
    .map(generateCapricornWomanHTML)
    .forEach(li => resultList.appendChild(li));
};

document
  .querySelector(".capricorn_women")
  .addEventListener("click", displayCapricornWomen);
