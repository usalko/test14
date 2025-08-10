// tests/example363.spec.ts
import { expect } from 'chai'
import { example363, } from '../src/example363'


console.log(`Fundamental(ES6)-Part-II
223. Greatest Common Divisor


Write a JavaScript program to calculate the greatest common divisor between two or more numbers/arrays.

 
 - The inner _gcd function uses recursion.
 - Base case is when y equals 0. In this case, return x.
 - Otherwise, return the GCD of y and the remainder of the division x/y.


`)

describe('#example363', () => {
    it(`Input arguments are: 8, 36 #1`, () => {
        expect(example363(8, 36)).equal(4)
    })
    it(`Input argument are: 12, 8, 32 #2`, () => {
        expect(example363(...[12, 8, 32])).equal(4)
    })
})
