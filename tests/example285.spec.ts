// tests/example285.spec.ts
import { expect } from 'chai'
import { example285 } from '../src/example285'

console.log(`Fundamental(ES6)-Part-I
145. Randomize Array Values


Write a JavaScript program to randomize the order of array values, returning an updated array.

 - Use the Fisher-Yates algorithm to reorder the elements of the array.

`)

describe('#example285', () => {
    it(`Input argument is [1, 2, 3] #1`, () => {
        expect(example285([1, 2, 3])).deep.equal([2,1,3])
    })
})
