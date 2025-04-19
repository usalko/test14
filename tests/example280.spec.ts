// tests/example280.spec.ts
import { expect } from 'chai'
import { example280 } from '../src/example280'

console.log(`Fundamental(ES6)-Part-I
140. Highest Index for Sorted Insertion (With Iterator)

Write a JavaScript program to get the highest index at which value should be inserted into an array
in order to maintain its sort order. This is based on a provided iterator function.

 - Loosely check if the array is sorted in descending order.
 - Use Array.prototype.map() to apply the iterator function to all elements of the array.
 - Use Array.prototype.reverse() and Array.prototype.findIndex() to find the appropriate last index where the element should be inserted, based on the provided iterator function.

`)

describe('#example280', () => {
    it(`Input arguments are [{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x #1`, () => {
        expect(example280([{ x: 4 }, { x: 5 }], { x: 4 }, (o: any) => o.x)).equal(1)
    })
})
