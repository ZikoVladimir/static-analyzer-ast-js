/**
 *
 * Link: https://developer.mozilla.org/ru/docs/XMLHttpRequest
 *
 * Javascript is a single threaded language.
 * It is interpreted by various engines, the most famous of which is V8 used in Chrome and Node.
 * However, the engine is really only doing a couple of things.
 * It runs the code line by line and adds functions to the call stack.
 *
 * Blocking the event loop can lead to 2 problems:
 *
 * 1. Performance: If you regularly perform heavyweight activity
 * on either type of thread, the throughput (requests/second) of your server will suffer.
 *
 * 2. Security: If it is possible that for certain input one of your threads might block,
 * a malicious client could submit this "evil input", make your threads block,
 * and keep them from working on other clients. This would be a Denial of Service attack.
 *
 **/

/**
 *
 * Synchronous XHR often causes hangs on the web.
 * Developers are recommended to move away from the API.
 *
 **/

/** MAIN CODE **/

const state = {
  response: null
};

const setState = response => state.response = response;

const request = new XMLHttpRequest();
request.open('GET', '/open/users', false);  // `false` makes the request synchronous - Incorrect
request.send(null);

request.open('GET', '/open/users');  // correct
request.send(null);

if (request.status === 200) {
  setState(request.responseText);
}

jQuery.ajax({
  url: 'https://api.github.com/users',
  success: function(response) {
    alert(response);
  },
  async: false // incorrect
});

/** MAIN CODE **/