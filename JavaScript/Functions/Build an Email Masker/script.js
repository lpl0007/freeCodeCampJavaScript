function maskEmail(email) {
  let indexOfAt = email.indexOf("@");
  if (indexOfAt <= 3) {
    return email;
  }
  let username = email.slice(0, indexOfAt);
  let domain = email.slice(indexOfAt);
  return username[0] + "*".repeat(username.length - 2) + username[username.length - 1] + domain;
}

let email = "freecodecamp@example.com";

console.log(maskEmail(email));
