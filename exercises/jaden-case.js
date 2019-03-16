'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
const jadenCase = (param) => {
  param = param.split(' ')
  let newSentence =''
  for (let i=0; i<param.length; i++) {
    newSentence += param[i].charAt(0).toUpperCase() + param[i].slice(1)
    	if (i<param.length - 1) {
      		newSentence += ' '
    	}
    }return newSentence
}
//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof 'string', 'string')
assert.strictEqual(jadenCase('How are you'), 'How Are You')
assert.strictEqual(jadenCase('how are you? i\'m fine and you?'), 'How Are You? I\'m Fine And You?')
// End of tests */
