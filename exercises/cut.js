'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
const cutFirst = wordFirst => {let remove2first = wordFirst.slice(2); return remove2first};
console.log(cutFirst('Super Poulet'));
const cutLast = wordLast => {let remove2Last = wordLast.slice(0, wordLast.length -2); return remove2Last};
console.log(cutLast('Super Poulet'));
const cutFirstLast = wordFirstLast => {let removeFirstLast = wordFirstLast.slice(2,wordFirstLast.length -2); 
  return removeFirstLast
  };
console.log(cutFirstLast('SuperPoulet'));
//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof cutFirst, 'function', 'Should be a function')
assert.strictEqual(cutFirst ('Poulet'),'ulet')
assert.strictEqual(cutLast('Poulet'),'Poul')
assert.strictEqual(cutFirstLast('Poulet'),'ul')
// End of tests */
