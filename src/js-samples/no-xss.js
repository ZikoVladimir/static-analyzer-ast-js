// todo: implement reflected XSS, stored, no-stored XSS, etc.

/**
 *
 * Name: Client-side cross-site scripting
 * Description: Writing user input directly to the DOM allows for a cross-site scripting vulnerability.
 * ID: js/xss
 * Kind: path-problem
 * Severity: error
 * Precision: high
 * Link: https://help.semmle.com/wiki/display/JS/Client-side+cross-site+scripting
 *
 **/

/** MAIN CODE **/

// INCORRECT

function setLanguageOptions() {
  const href = document.location.href,
    deflt = href.substring(href.indexOf('default=') + 8);
  document.write('<OPTION value=1>' + deflt + '</OPTION>');
  document.write('<OPTION value=2>English</OPTION>');
}

/** MAIN CODE **/