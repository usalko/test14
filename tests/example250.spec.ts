// tests/example250.spec.ts
import { expect } from 'chai'
import { example250 } from '../src/example250'

console.log(`Fundamental(ES6)-Part-I
100. Group Array by Index and Combine with Function

Write a JavaScript program to create an array of elements, grouped based on the position in the original arrays.
Use function as the last value to specify how grouped values should be combined.

Note: Check if the last argument provided is a function.

 - Check if the last argument provided is a function.
 - Use Math.max() to get the longest array in the arguments.
 - Use Array.from() to create an array with appropriate length and a mapping function to create array of grouped elements.
 - If lengths of the argument arrays vary, undefined is used where no value could be found.
 - The function is invoked with the elements of each group.

`)

describe('#example250', () => {
    it(`Input arguments are [1, 2, 3], [10, 20], [100, 200], (a: any, b: any, c: any) => (a != null ? a : 'a') + (b != null ? b : 'b') + (c != null ? c : 'c') #1`, () => {
        expect(example250([1, 2, 3], [10, 20], [100, 200], (a: any, b: any, c: any) => (a != null ? a : 'a') + (b != null ? b : 'b') + (c != null ? c : 'c'))).deep.equal([111,222,"3bc"])
    })
})
