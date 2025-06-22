// tests/example339.spec.ts
import { expect } from 'chai'
import { example339 } from '../src/example339'


console.log(`Fundamental(ES6)-Part-II
199. Check If Even Number


Write a JavaScript program that returns true if the given number is even, false otherwise.


 - Checks whether a number is odd or even using the modulo (%) operator.
 - Returns true if the number is even, false if the number is odd.


`)

describe('#example339', () => {
    it(`Input argument is 3 #1`, () => {
        expect(example339(3)).equal(false)
    })
    it(`Input argument is 32 #2`, () => {
        expect(example339(32)).equal(true)
    })
    it(`Input argument is 1 #3`, () => {
        expect(example339(1)).equal(false)
    })
    it(`Input argument is 0 #4`, () => {
        expect(example339(0)).equal(true)
    })
})
