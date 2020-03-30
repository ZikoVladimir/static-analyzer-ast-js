/**
 *
 * Memory leaks are a problem every developer has to face eventually.
 * Even when working with memory-managed languages there are cases where memory can be leaked.
 * Leaks are the cause of whole class of problems:
 * slowdowns, crashes, high latency, and even problems with other applications.
 *
 **/

/** Example #1 **/

/** MAIN CODE **/

function foo(arg) {
  bar = "this is a hidden global variable";
}

function foo(arg) {
  window.bar = "this is an explicit global variable";
}

foo();

/** Example #2 **/

/** MAIN CODE **/

const element = document.getElementById('button');
const input = document.getElementById('input');

function setText(event) {
  element.innerHtml = input.value;
}

element.addEventListener('click', setText);

document.getElementById('submit').addEventListener('click', setText);
document.getElementById('submit').removeEventListener('click', setText);
