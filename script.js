'use strict'

let regexp = /love/i

console.log(regexp.test('I love JavaScript'))
console.log(regexp.test('I JavaScript'))

let regexp2 = /ing$/i

console.log(regexp2.test('Good morning'))
console.log(regexp2.test('Good morning!'))