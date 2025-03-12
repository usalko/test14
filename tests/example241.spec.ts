// tests/example241.spec.ts
import { expect } from 'chai'
import { example241 } from '../src/example241'

console.log(`Fundamental(ES6)-Part-I
91. All Elements Fail Predicate Check

Write a JavaScript program that returns true if the provided predicate function returns false for all elements in a collection,
false otherwise.

 - Use Array.prototype.some() to test if any elements in the collection return true based on fn.
 - Omit the second argument, fn, to use Boolean as a default.
`)

describe('#example241', () => {
    it(`Input arguments are [0, 1, 3, 0], x => x == 2 #1`, () => {
        expect(example241([0, 1, 3, 0], (x: any) => x == 2)).equal(true)
    })
    it(`Input argument is [0, 0, 0] #1`, () => {
        expect(example241([0, 0, 0]).equal(false)
    })
})
