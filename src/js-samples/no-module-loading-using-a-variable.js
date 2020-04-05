/**
 *
 * Name: Module loading using a variable
 * Description: Avoid requiring/importing another file with a path that was given as parameter due to the concern that it could have originated from user input. This rule can be extended for accessing files in general (i.e. fs.readFile()) or other sensitive resource access with dynamic variables originating from user input.
 * ID: js/eval-like-call
 * Kind: problem
 * Severity: error
 * Precision: very-high
 * Link: https://github.com/goldbergyoni/nodebestpractices/blob/security-best-practices-section/sections/security/safemoduleloading.md
 *
 **/

/** MAIN CODE **/

// INCORRECT

// insecure, as helperPath variable may have been modified by user input
document.getElementById('input').addEventListener('input', e => {
  const helperPath = e.target.value;
  
  const uploadHelpers = require(helperPath);
  
  // do something
});

// CORRECT

// secure
const secureUploadHelpers = require('./helpers/upload');

/** MAIN CODE **/