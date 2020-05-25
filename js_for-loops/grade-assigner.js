function assignGrade(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 65) {
    return "D";
  } else {
    return "F";
  }
}

for (let i = 60; i <= 100; i++) {
  console.log("Voor " + i + " punten, krijg je een " + assignGrade(i));
}
