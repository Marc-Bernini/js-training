'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */
const yell = (string) => string = string.toUpperCase()

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell('bonjour toi comment ca va?'),'BONJOUR TOI COMMENT CA VA?')
// End of tests */
