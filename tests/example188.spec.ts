// tests/example188.spec.ts
import { expect } from 'chai'
import { example188 } from '../src/example188'

console.log(`Fundamental(ES6)-Part-I
38. Pad String on Both Sides


Write a JavaScript program to pad a string on both sides with the specified character, 
if it's shorter than the specified length.
`)

describe('#example188', () => {
    it(`Input array is [{a: 1}, {a: 0, b: 1}] #1`, () => {
        expect(example188([{a: 1}, {a: 0, b: 1}])).deep.equal([{a: 0, b: 1}, {a: 1}])
    })
})
