// tests/example357.spec.ts
import { expect } from 'chai'
import { example357, } from '../src/example357'


console.log(`Fundamental(ES6)-Part-II
217. Number in Range


Write a JavaScript program to check if the given number falls within the given range.


 - Use arithmetic comparison to check if the given number is in the specified range.
 - If the second argument, end, is not specified, the range is considered to be from 0 to start.


`)

describe('#example357', () => {
    it(`Input arguments are 3, 2, 5 #1`, () => {
        expect(example357(3, 2, 5)).equal(true)
    })
    it(`Input arguments are 3, 4 #2`, () => {
        expect(example357(3, 4)).equal(true)
    })
    it(`Input arguments are 2, 3, 5 #3`, () => {
        expect(example357(2, 3, 5)).equal(false)
    })
    it(`Input arguments are 2, 3 #4`, () => {
        expect(example357(2, 3)).equal(false)
    })
})
