/**
 *
 * JavaScript's eval() function is potentially dangerous and is often misused.
 * Using eval() on untrusted code can open a program up to several different injection attacks.
 * The use of eval() in most contexts can be substituted for a better, alternative approach to a problem.
 *
 **/

/** Example #1 * */
const valueFromInput = `require("child_process").exec('rm -rf ./*')`;

/** Example #2 * */
const valueFromInput_2 = `for(;;) {}`;

/** Example #3 * */
const valueFromInput_3 = `alert(document.cookie)`;

/** Example #4 * */
const valueFromInput_4 = `location.href = 'http://hacker.com'`;

/** MAIN CODE **/

const input = document.querySelector('input');

const submit = document.querySelector('button');

submit.addEventListener('click', () => eval(input.value));

/**
 *
 * Possible cases:
 *
 * 1. CallExpression: eval(...);
 *
 * 2. MemberExpression: window.eval, global.eval, this.eval, etc;
 *
 * 3. Eval in Arguments: inputValueList.forEach(eval).
 *
 * */
