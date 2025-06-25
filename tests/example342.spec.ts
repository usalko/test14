// tests/example342.spec.ts
import { expect } from 'chai'
import { example342 } from '../src/example342'


console.log(`Fundamental(ES6)-Part-II
202. Check Even Number


Write a JavaScript program to check if a given number is even or not.


 - Checks whether a number is odd or even using the modulo (%) operator.
 - Returns true if the number is even, false if the number is odd.


`)

describe('#example342', () => {
    it(`Input argument is 3 #1`, () => {
        expect(example342(3)).equal(false)
    })
    it(`Input argument is 32 #2`, () => {
        expect(example342(32)).equal(true)
    })
    it(`Input argument is 1 #3`, () => {
        expect(example342(1)).equal(false)
    })
    it(`Input argument is 0 #4`, () => {
        expect(example342(0)).equal(true)
    })
})
