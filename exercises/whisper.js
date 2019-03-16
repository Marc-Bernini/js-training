'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
const whisper = (string) => string = '* ' + string.toLowerCase() + ' *'
//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper('BONJOUR TOI COMMENT CA VA?'),'* bonjour toi comment ca va? *')
// End of tests */
