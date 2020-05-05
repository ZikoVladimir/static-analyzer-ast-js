/**
 *
 * Name: With statement
 * Description: The 'with' statement has subtle semantics and should not be used.
 * ID: js/with-statement
 * Kind: problem
 * Severity: warning
 * Precision: very-high
 * Link: https://help.semmle.com/wiki/display/JS/With+statement
 *
 **/

/** MAIN CODE **/

const user = {
  name: 'Vladimir',
  email: 'vladimirzikov8@gmail.com',
  gender: 'male'
};

const mockMD5 = password => `return hash password`;

// Incorrect
const createPassword = user => {
  with(user){
    password = mockMD5(name);
  }
};

createPassword(user);

// Correct
const { name } = user;
const pass = mockMD5(name);

/** MAIN CODE **/