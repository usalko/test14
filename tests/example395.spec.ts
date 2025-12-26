// tests/example395.spec.ts
import { assert, expect } from 'chai'
import { example395 } from '../src/example395'


console.log(`Fundamental(ES6)-Part-II
255. Predicate True for Any

Write a JavaScript program that returns true if the provided predicate function returns true for at least one element in a collection, false otherwise. 

    - Use Array.prototype.some() to test if any elements in the collection return true based on fn.
    - Omit the second argument, fn, to use Boolean as a default.
`)

describe('#example395', () => {
    it(`Input arguments are: [0, 1, 2, 0], x => x >= 2 #1`, () => {
        expect(example395([0, 1, 2, 0], (x: any) => x >= 2)).eq(true)
    })
    it(`Input argument is: [0, 0, 1, 0] #2`, () => {
        expect(example395([0, 0, 1, 0])).eq(true)
    })
})
