/**
 *
 * Name: XPath injection
 * Description: Building an XPath expression from user-controlled sources is vulnerable to insertion of malicious code by the user.
 * ID: js/xpath-injection
 * Kind: path-problem
 * Severity: error
 * Precision: high
 * Link: https://help.semmle.com/wiki/display/JS/XPath+injection
 *
 **/

/** MAIN CODE **/

const express = require('express');
const xpath = require('xpath');
const app = express();

// INCORRECT

app.get('/some/route', function(req, res) {
  let userName = req.param("userName");
  
  // BAD: Use user-provided data directly in an XPath expression
  let badXPathExpr = xpath.parse(`//users/user[login/text()='" + ${userName} + "']/home_dir/text()`);
  badXPathExpr.select({
    node: root
  });
});

// CORRECT

app.get('/some/route', function(req, res) {
  let userName = req.param("userName");
  
  // GOOD: Embed user-provided data using variables
  let goodXPathExpr = xpath.parse("//users/user[login/text()=$userName]/home_dir/text()");
  goodXPathExpr.select({
    node: root,
    variables: { userName: userName }
  });
});

/** MAIN CODE **/