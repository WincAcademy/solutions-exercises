import { names } from "./names";

// Not including "to"
const getRandomInteger = (from, to) => from + Math.floor(Math.random() * to);

const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];

// Generate n items with func
const generateNItems = (num, func) => Array(num).fill(0).map(func);

const getRandomPerson = () => getRandomItem(names);

const getRandomFirstName = () => getRandomPerson().name;

const getRandomSurname = () => getRandomPerson().surname;

const getRandomId = () => getRandomInteger(1, 1000000);

const getRandomDomain = () =>
  getRandomItem([
    "gmail.com",
    "hotmail.com",
    "yahoo.com",
    "live.com",
    "mail.com",
    "me.com",
  ]);

const getRandomPhone = () => `06-${getRandomInteger(10000000, 10000000)}`;

const getRandomTime = () => getRandomInteger(8, 19);

const getRandomDay = () => getRandomInteger(1, 28);

const generatePerson = () => ({
  name: getRandomFirstName(),
  surname: getRandomSurname(),
  phone: getRandomPhone(),
  id: getRandomId(),
});

const namesToEmailPart = ({ name, surname }) =>
  `${name.toLowerCase()}.${surname.toLowerCase()}`.replace(" ", "");

const formatEmployeeEmail = ({ name, surname }) =>
  namesToEmailPart({ name, surname }) + `@tandartspraktijkbvt.nl`;

const generateEmployee = () => {
  const person = generatePerson();
  return { ...person, ...{ email: formatEmployeeEmail(person) } };
};

const generatePatient = () => {
  const person = generatePerson();
  return {
    ...person,
    ...{
      email: namesToEmailPart(person) + getRandomDomain(),
      birthYear: getRandomInteger(1935, 2020),
    },
  };
};

const generateRandomAppointment = ({ dentists, assistants, patients }) => {
  const appointment = {
    id: getRandomId(),
    dentist: getRandomItem(dentists).id,
    patient: getRandomItem(patients).id,
    day: getRandomDay(),
    time: getRandomTime(),
  };

  if (getRandomInteger(0, 2) === 1)
    appointment.assistant = getRandomItem(assistants).id;

  return appointment;
};

const generateRandomAppointments = (people, num_appointments) =>
  generateNItems(num_appointments, () => generateRandomAppointment(people));

const getInitialState = () => {
  const NUM_DENTISTS = 4;
  const NUM_ASSISTANTS = 2;
  const NUM_PATIENTS = 50;
  const NUM_APPOINTMENTS = 10;
  const people = {
    dentists: generateNItems(NUM_DENTISTS, generateEmployee),
    patients: generateNItems(NUM_PATIENTS, generatePatient),
    assistants: generateNItems(NUM_ASSISTANTS, generateEmployee),
  };
  const appointments = generateRandomAppointments(people, NUM_APPOINTMENTS);
  return { ...people, ...{ appointments } };
};

export { getInitialState };
