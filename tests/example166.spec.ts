// tests/example166.spec.ts
import { expect } from 'chai'
import { example166 } from '../src/example166'

console.log(`Fundamental(ES6)-Part-I
16. Predicate Function Check for All Elements

Write a JavaScript function that returns true if the provided predicate function returns true
for all elements in a collection, false otherwise.
`)
describe('#example166', () => {
    it(`Input array is [1, 2, 3, 4, 5, 6, 7], input function is {(x) => x > 0} #1`, () => {
        expect(example166([1, 2, 3, 4, 5, 6, 7], (x) => x > 0)).equal(true)
    })
    it(`Input array is [-1, 2, 3, 4, 5, 6, 7], input function is {(x) => x > 0} #2`, () => {
        expect(example166([-1, 2, 3, 4, 5, 6, 7], (x) => x > 0)).equal(false)
    })
})
