// tests/example341.spec.ts
import { expect } from 'chai'
import { example341 } from '../src/example341'


console.log(`Fundamental(ES6)-Part-II
201. Check Divisibility


Write a JavaScript program to check if the first numerical argument is divisible by the second one.


 - Use the modulo operator (%) to check if the remainder is equal to 0.


`)

describe('#example341', () => {
    it(`Input argument are 6, 3 #1`, () => {
        expect(example341(6, 3)).equal(true)
    })
    it(`Input argument are 5, 3 #2`, () => {
        expect(example341(5, 3)).equal(false)
    })
    it(`Input argument are 100, 10 #3`, () => {
        expect(example341(100, 10)).equal(true)
    })
    it(`Input argument are 0, 3 #4`, () => {
        expect(example341(0, 3)).equal(true)
    })
})
