let year = 1900;

function isLeapYear(givenYear) {
  if ((givenYear % 400) == 0) {
    return givenYear + " is a leap year.";
  } else if ((givenYear % 100) == 0) {
    return givenYear + " is not a leap year.";
  } else if ((givenYear % 4) == 0) {
    return givenYear + " is a leap year.";
  } else {
    return givenYear + " is not a leap year.";
  }
}

let result = isLeapYear(year);

console.log(result);
