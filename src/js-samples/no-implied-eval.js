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

setTimeout("alert('Not secure code!');", 100);

window.setTimeout("location.href = 'http://example.com.hacker.com'", 100);

window.setInterval("alert(document.cookie)", 100);

// CORRECT

setTimeout(function() {
  alert('Secure code!');
}, 100);

setInterval(function() {
  alert('Secure callback!');
}, 100);

/** MAIN CODE **/

/**
 *
 * OUTPUT LOGS:
 * WARNING: Use of implied eval in row "17"
 * WARNING: Use of implied eval in row "19"
 * WARNING: Use of implied eval in row "21"
 *
 **/