// tests/example298.spec.ts
import { expect } from 'chai'
import { example298 } from '../src/example298'

console.log(`Fundamental(ES6)-Part-I
158. Rearrange Function Arguments


Write a JavaScript program to create a function that invokes the provided function 
with its arguments arranged according to the specified indexes.


 - Use Array.prototype.map() to reorder arguments based on indexes.
 - Use the spread operator (...) to pass the transformed arguments to fn.


`)

describe('#example298', () => {
    it(`Input arguments are [2, 0, 1], 'b', 'c', 'a' #1`, () => {
        expect(example298([2, 0, 1], 'b', 'c', 'a')).deep.equal(['a', 'b', 'c'])
    })
})
