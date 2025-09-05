// tests/example377.spec.ts
import { expect } from 'chai'
import { example377, } from '../src/example377'


console.log(`Fundamental(ES6)-Part-II
237. Fibonacci Sequence


Write a JavaScript program to generate an array containing the Fibonacci sequence, up to the nth term.


 - Use Array.from() to create an empty array of the specific length, initializing the first two values (0 and 1).
 - Use Array.prototype.reduce() and Array.prototype.concat() to add values into the array, using the sum of the last two values, except for the first two.


`)

describe('#example377', () => {
    it(`Input argument is 2 #1`, () => {
        expect(example377(2)).deep.equal([0, 1])
    })
    it(`Input argument is 3 #2`, () => {
        expect(example377(3)).deep.equal([0, 1, 1])
    })
    it(`Input argument is 5 #3`, () => {
        expect(example377(5)).deep.equal([0, 1, 1, 2, 3])
    })
    it(`Input argument is 6 #4`, () => {
        expect(example377(6)).deep.equal([0, 1, 1, 2, 3, 5])
    })
})
