// tests/example194.spec.ts
import { expect } from 'chai'
import { example194 } from '../src/example194'

console.log(`Fundamental(ES6)-Part-I
44. Remove Falsey Values from Array


Write a JavaScript program to remove false values from a given array.
`)

describe('#example194', () => {
    it(`Input array is: [true, false, true, false, true, false, true] #1`, () => {
        expect(example194([true, false, true, false, true, false, true])).deep.equal([true, true, true, true])
    })
})
