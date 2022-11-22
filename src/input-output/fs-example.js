const fs = require('fs');

const data = 'test4';

/** 1) When we use callbacks, must be error-first pattern
 * look here - https://www.geeksforgeeks.org/error-first-callback-in-node-js/
 *  2) default callbacks are async (or use promises), we can use sync, if it is necessary
 */
fs.readFile('./fs-example.js', (error, file) => {
  /** error is instanceof Error */
  if (error) throw error;

  fs.writeFile('./test.txt', data, (err) => {
    if (err) throw err;
  });
});
