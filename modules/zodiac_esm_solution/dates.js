
// Returns today's date as simple object.
const getCurrentDate = () => {
  const today = new Date();
  return {
      year: today.getFullYear(),
      month: today.getMonth() + 1, // Months starts at 0 😕
      day: today.getDate(), // Days start at 1
  };
};

// input: "29/08/1987"
// output: object with year, month, day as numbers
const transformDateOfBirth = dateStr => {
  const year = Number(dateStr.split("/")[2]);
  const month = Number(dateStr.split("/")[1]);
  const day = Number(dateStr.split("/")[0]);
  return {
      year,
      month,
      day,
  };
};

const calculateAge = (dateToday, dateOfBirth) => {
  let age = dateToday.year - dateOfBirth.year;

  let birthDayCelebratedThisYear = false;
  if (dateOfBirth.month < dateToday.month) {
      birthDayCelebratedThisYear = true;
  }
  if (dateOfBirth.month === dateToday.month) {
      if (dateOfBirth.day <= dateToday.day) {
          birthDayCelebratedThisYear = true;
      }
  }

  if (!birthDayCelebratedThisYear) {
      age -= 1;
  }
  return age;
};

export {getCurrentDate, transformDateOfBirth, calculateAge};
