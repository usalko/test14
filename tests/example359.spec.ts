// tests/example259.spec.ts
import { expect } from 'chai'
import { example259, } from '../src/example259'


console.log(`Fundamental(ES6)-Part-II
219. Hamming Distance


Write a JavaScript program to calculate the Hamming distance between two values.


 - Use the XOR operator (^) to find the bit difference between the two numbers.
 - Convert to a binary string using Number.prototype.toString(2).
 - Count and return the number of 1s in the string, using String.prototype.match(/1/g).


`)

describe('#example259', () => {
    it(`Input arguments are: 2, 3 #1`, () => {
        expect(example259(2, 3)).equal(1)
    })
    it(`Input arguments are: 5, 3 #1`, () => {
        expect(example259(5, 3)).equal(2)
    })
})
