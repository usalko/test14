// tests/example108.spec.ts
import { expect } from 'chai'
import { example108 } from '../src/example108'

console.log(`
Write a JavaScript program to create the dot products of two given 3D vectors. 
Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.
`)
describe('#example108', () => {
    it(`Input vector1 is [1, 2, 3], input vector2 is [6, 7, 8] #1`, () => {
        expect(example108([1, 2, 3], [6, 7, 8])).equal(6 + 14 + 24)
    })
})