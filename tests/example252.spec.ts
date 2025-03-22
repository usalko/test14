// tests/example252.spec.ts
import { expect } from 'chai'
import { example252 } from '../src/example252'

console.log(`Fundamental(ES6)-Part-I
102. Group Array Elements by Position

Write a JavaScript program to create an array of elements, grouped based on the position in the original array.

 - Use Math.max(), Function.prototype.apply() to get the longest array in the arguments.
 - Create an array with that length as return value and use Array.from() with a mapping function to create an array of grouped elements.
 - If lengths of the argument arrays vary, undefined is used where no value could be found.

`)

describe('#example252', () => {
    it(`Input arguments are ['a', 'b'], [1, 2], [true, false] #1`, () => {
        expect(example252(['a', 'b'], [1, 2], [true, false])).deep.equal([["a",1,true],["b",2,false]])
    })
    it(`Input arguments are ['a', 'b', 'c'], [1, 2] #1`, () => {
        expect(example252(['a'], [1, 2], [true, false])).deep.equal([["a",1,true],[null,2,false]])
    })
})
