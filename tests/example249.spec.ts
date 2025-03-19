// tests/example249.spec.ts
import { expect } from 'chai'
import { example249 } from '../src/example249'

console.log(`Fundamental(ES6)-Part-I
99. Hash String into Number

Write a JavaScript program to hash a given input string into a whole number.

Hashes the input string into a whole number.

 - Use String.prototype.split('') and Array.prototype.reduce() to create a hash of the input string, utilizing bit shifting.

`)

describe('#example249', () => {
    it(`Input arguments are 'w3r' #1`, () => {
        expect(example249('w3r')).deep.equal(986464758)
    })
    it(`Input arguments are 'w3r' #1`, () => {
        expect(example249('name')).deep.equal(-3521204949)
    })
})
