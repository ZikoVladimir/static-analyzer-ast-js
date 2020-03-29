/**
 *
 * WITH statements result in potentially confusing implicit bindings,
 * and may behave strangely in setting new variables.
 *
 **/

/** MAIN CODE **/

const user = {
  name: 'Vladimir',
  email: 'vladimirzikov8@gmail.com',
  gender: 'male'
};

const mockMD5 = password => `${password}q1r3t4ty53gg532f23`;

const createPassword = user => {
  with(user){
    password = mockMD5(name);
  }
};

createPassword(user);
