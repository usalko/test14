// tests/example346.spec.ts
import { expect } from 'chai'
import { example346 } from '../src/example346'


console.log(`Fundamental(ES6)-Part-II
206. Check Anagram


Write a JavaScript program to check if a given string is an anagram of another string
(case-insensitive, ignores spaces, punctuation and special characters).


 - Use String.prototype.toLowerCase() and String.prototype.replace() with an appropriate regular expression to remove unnecessary characters.
 - Use String.prototype.split(''), Array.prototype.sort() and Array.prototype.join('') on both strings to normalize them, then check if their normalized forms are equal.


`)

describe('#example346', () => {
    it(`Input arguments are 'iceman', 'cinema' #1`, () => {
        expect(example346('iceman', 'cinema')).equal(true)
    })
    it(`Input arguments are 'madam', 'madam' #2`, () => {
        expect(example346('madam', 'madam')).equal(true)
    })
})
