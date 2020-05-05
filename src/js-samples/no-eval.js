/**
 *
 * Name: Code injection
 * Description: Interpreting unsanitized user input as code allows a malicious user arbitrary code execution.
 * ID: js/code-injection
 * Kind: path-problem
 * Severity: error
 * Precision: high
 * Link: https://help.semmle.com/wiki/display/JS/Code+injection
 *
 * Name: Use of eval
 * Description: The 'eval' function and the 'Function' constructor execute strings as code.
 *              This is dangerous and impedes program analysis and understanding.
 *              Consequently, these two functions should not be used.
 * ID: js/eval-call
 * Kind: problem
 * Severity: recommendation
 * Precision: medium
 * Link: https://help.semmle.com/wiki/display/JS/Use+of+eval
 *
 **/

/** Case #1 * */
const valueFromInput = `require("child_process").exec('rm -rf ./*')`;
/** Case #2 * */
const valueFromInput_2 = `for(;;) {}`;
/** Case #3 * */
const valueFromInput_3 = `alert(document.cookie)`;
/** Case #4 * */
const valueFromInput_4 = `location.href = 'http://hacker.com'`;

/** MAIN CODE **/

const input = document.querySelector('input');

const submit = document.querySelector('button');

submit.addEventListener('click', () => {
  window.eval(input.value); // incorrect
  eval(input.value) // incorrect
});

/** MAIN CODE **/

/**
*
* OUTPUT LOGS:
* WARNING: Use of eval in row "39"
* WARNING: Use of eval in row "40"
* WARNING: Possible memory leak in row "38"
*
**/