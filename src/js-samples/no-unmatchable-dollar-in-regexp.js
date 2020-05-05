/**
 *
 * Name: Unmatchable dollar in regular expression
 * Description: If a dollar assertion '$' appears in a regular expression before another term that cannot match the empty string, then this assertion can never match, so the entire regular expression cannot match any string.
 * ID: js/regex/unmatchable-dollar
 * Kind: problem
 * Severity: error
 * Precision: very-high
 * Link: https://help.semmle.com/wiki/display/JS/Unmatchable+dollar+in+regular+expression
 *
 **/

/** MAIN CODE **/

// INCORRECT

if (file.match(/\.\(\w+$\)/)) {
  // do something
}

/** MAIN CODE **/

/**
 *
 * OUTPUT LOGS:
 * Error: Unmatchable dollar in regular expression in row "17"
 *
 **/