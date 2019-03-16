'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
const keepFirst = (string) => string.slice(0,2);
const keepLast = (param) => {let letter = param.length; param = param.slice(letter-2); return param};
const keepFirstLast = (param1) => {let letter = param1.length; param1 = param1.slice(letter + 3 - letter,letter + 3 - letter + 2); return param1};
//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof keepFirst, 'function', 'Should be a function')
assert.strictEqual(keepFirst ('Poulet'),'Po')
assert.strictEqual(keepLast('Poulet'),'et')
assert.strictEqual(keepFirstLast('Poulet'),'le')
// End of tests */
