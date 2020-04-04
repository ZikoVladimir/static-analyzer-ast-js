/**
 *
 * Name: Call to eval-like DOM function
 * Description: DOM functions that act like 'eval' and execute strings as code are dangerous and impede program analysis and understanding.Consequently, they should not be used.
 * ID: js/eval-like-call
 * Kind: problem
 * Severity: recommendation
 * Precision: very-high
 * Link: https://help.semmle.com/wiki/display/JS/Call+to+eval-like+DOM+function
 *
 **/

/** MAIN CODE **/

// INCORRECT

setTimeout("alert('It is not secure code!');", 100);

window.setTimeout("location.href = 'http://example.com.hacker.com'", 100);

window.setInterval("alert(document.cookie)", 100);

// CORRECT

setTimeout(function() {
  alert('It is secure code!');
}, 100);

/** MAIN CODE **/