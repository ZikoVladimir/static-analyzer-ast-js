/**
 *
 * Name: Use of a broken or weak cryptographic algorithm
 * Description: Using broken or weak cryptographic algorithms can compromise security.
 * ID: js/weak-cryptographic-algorithm
 * Kind: path-problem
 * Severity: warning
 * Precision: high
 * Link: https://help.semmle.com/wiki/display/JS/Use+of+a+broken+or+weak+cryptographic+algorithm
 *
 **/

/** MAIN CODE **/

const crypto = require('crypto');

// INCORRECT

const desCipher = crypto.createCipheriv('des', key);
const desEncrypted = cipher.write(secretText, 'utf8', 'hex'); // BAD: weak encryption

// CORRECT

const aesCipher = crypto.createCipheriv('aes-128', key);
const aesEncrypted = cipher.update(secretText, 'utf8', 'hex'); // GOOD: strong encryption

/** MAIN CODE **/

/**
 *
 * OUTPUT LOGS:
 * WARNING: Use of a broken or weak cryptographic algorithm in row "19"
 *
 **/
