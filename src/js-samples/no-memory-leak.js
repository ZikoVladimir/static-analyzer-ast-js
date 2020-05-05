/**
 *
 * Link: https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/
 *
 * Memory leaks are a problem every developer has to face eventually.
 * Even when working with memory-managed languages there are cases where memory can be leaked.
 * Leaks are the cause of whole class of problems:
 * slowdowns, crashes, high latency, and even problems with other applications.
 *
 **/

/** Case #1 **/

/** MAIN CODE **/

function createVariable(arg) {
  variable = "this is a hidden global variable"; // if use strict - correct, else incorrect
}

function createLeak(arg) {
  window.leak = "this is an explicit global variable"; // if use strict - correct, else incorrect
}

createLeak();
createVariable();

/** MAIN CODE **/

/** Case #2 **/

/** MAIN CODE **/

const element = document.getElementById('button');
const input = document.getElementById('input');

function setText(event) {
  element.innerHtml = input.value;
}

// INCORRECT
element.addEventListener('click', setText);

// CORRECT
document.getElementById('submit').addEventListener('click', setText);
document.getElementById('submit').removeEventListener('click', setText);

/** MAIN CODE **/

/**
 *
 * OUTPUT LOGS:
 * WARNING: Possible memory leak in row "17"
 * WARNING: Possible memory leak in row "21"
 * WARNING: Possible memory leak in row "41"
 *
 **/
