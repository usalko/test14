// tests/example378.spec.ts
import { expect } from 'chai'
import { example378, } from '../src/example378'


console.log(`Fundamental(ES6)-Part-II
238. Factorial of Number


Write a JavaScript program to calculate the factorial of a number.


 - Use recursion.
 - If n is less than or equal to 1, return 1.
 - Otherwise, return the product of n and the factorial of n - 1.
 - Throw a TypeError if n is a negative number.


`)

describe('#example378', () => {
    it(`Input argument is 1 #1`, () => {
        expect(example378(1)).equal(1)
    })
    it(`Input argument is 2 #2`, () => {
        expect(example378(2)).equal(2)
    })
    it(`Input argument is 5 #3`, () => {
        expect(example378(5)).equal(120)
    })
    it(`Input argument is 7 #4`, () => {
        expect(example378(7)).equal(5040)
    })
    it(`Input argument is -1 #5`, () => {
        expect(() => example378(-1)).to.throw(`TypeError`)
    })
})
