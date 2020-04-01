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

"use strict"

function foo(arg) {
  bar = "this is a hidden global variable";
}

function foo(arg) {
  window.bar = "this is an explicit global variable";
}

foo();

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