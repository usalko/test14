// tests/example408.spec.ts
import { assert, expect } from 'chai'
import { example408 } from '../src/example408'


console.log(`Fundamental(ES6)-Part-II
268. Index of Array Item in Loop

Index of Array Item in Loop

Write a JavaScript program to find the index of an array item in a for loop.

    - JavaScript's for...of loops provide an easy way to
    iterate over all kinds of iterables from arrays and stings to Map and Set objects.
    One supposed limitation over other options (e.g. Array.prototype.forEach()) 
    is that you only get the value of each item in the iterable. But that is not 
    necessarily the case, as you can easily leverage Array.prototype.entries() to 
    get both the index and value of each array item:
`)

describe('#example408', () => {
    it(`Input argument is ['Red', 'Green', 'Black', 'White'] #1`, () => {
        expect(example408(['Red', 'Green', 'Black', 'White'])).deep.equal([[0, 'Red'], [1, 'Green'], [2, 'Black'], [3, 'White']])
    })
})
