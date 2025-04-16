// tests/example277.spec.ts
import { expect } from 'chai'
import { example277 } from '../src/example277'

console.log(`Fundamental(ES6)-Part-I
137. Stable Sort Array

Write a JavaScript program to perform stable sorting of an array, preserving the initial indexes of items
when their values are the same. Returns a new array instead of mutating the original array.

 - Use Array.prototype.map() to pair each element of the input array with its corresponding index.
 - Use Array.prototype.sort() and a compare function to sort the list, preserving their initial order if the items compared are equal.
 - Use Array.prototype.map() to convert back to the initial array items.
 - Does not mutate the original array, but returns a new array instead.

`)

describe('#example277', () => {
    it(`Input arguments are [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], () => 0 #1`, () => {
        expect(example277([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], () => 0)).deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
})
