// Your error/exception message should match one of the following conditions exactly (word-for-word).
function password_is_valid(password) {
  const report = "password should";

  try {
    if (password == "") throw `${report} exist`;

    if (password.length < 8) throw `${report} be longer than 8 characters`;

    if (password.match(/[a-z]/g) == null)
      throw `${report} have at least one lowercase letter`;

    if (password.match(/[A-Z]/g) == null)
      throw `${report} have at least one uppercase letter`;

    if (password.match(/[0-9]/g) == null)
      throw `${report} at least have atleast one digit`;

    if (password.match(/[{(!@#$%^&*.,\')}]/g) == null)
      throw `${report} have atleast one special character`;

    return `password is valid!`;
  } catch (error) {
    console.error(`Invalid password: ${error}`);
  }
  return password;
}

//If the given password meets at least three of the conditions listed above then this function should return true, otherwise it should return false.
function password_is_ok(password) {
  const conditions = [/'0-9'/, /'A-Z'/, /'a-z'/, /'!@#$%*().'/];

  if (password == "" && password.length < 8) {
    return false;
  }
  for (let i = 0; i <= conditions.length; i++) {
    if (password.match(conditions[i] == null)) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(password_is_valid("21Kkm971#"));
console.log(password_is_ok("21Kkm971#"));

module.exports = { password_is_valid };
module.exports = { password_is_ok };
