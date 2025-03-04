// tests/example233.spec.ts
import { expect } from 'chai'
import { example233 } from '../src/example233'

console.log(`Fundamental(ES6)-Part-I
83. Map Characters of String to New String

Write a JavaScript program to create an updated string with the results
of calling a provided function on every character in the called string.

 - Use String.prototype.split('') and Array.prototype.map() to call the provided function, fn, for each character in str.
 - Use Array.prototype.join('') to recombine the array of characters into a string.
 - The callback function, fn, takes three arguments (the current character, the index of the current character and the string mapString was called upon).

`)

describe('#example233', () => {
    it(`Input arguments are 'Javascript exercises', c => c.toUpperCase() #1`, () => {
        expect(example233('Javascript exercises', (c: any) => c.toUpperCase())).equal("JAVASCRIPT EXERCISES")
    })
})
