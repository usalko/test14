// tests/example337.spec.ts
import { expect } from 'chai'
import { example337 } from '../src/example337'


console.log(`Fundamental(ES6)-Part-II
197. Check String Lowercase


Write a JavaScript program to check if a string is lower case or not.


 - Convert the given string to lower case, using String.prototype.toLowerCase() and compare it to the original.


`)

describe('#example337', () => {
    it(`Input argument is 'abc' #1`, () => {
        expect(example337('abc')).equal(true)
    })
    it(`Input argument is 'a3@$' #2`, () => {
        expect(example337('a3@$')).equal(true)
    })
    it(`Input argument is 'Ab4' #3`, () => {
        expect(example337('Ab4')).equal(false)
    })
})
