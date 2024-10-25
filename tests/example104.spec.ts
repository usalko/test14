// tests/example104.spec.ts
import { expect } from 'chai'
import { example104 } from '../src/example104'

console.log(` is
Write a JavaScript program to find two elements of an array such that their absolute difference is not larger than a given integer.
However, it is as close as possible to the integer.
`)
describe('#example104', () => {
    it(`Input array is [12, 4, 3, 5], input integer is 20 #1`, () => {
        expect(example104([12, 4, 3, 5], 20)).deep.equal([12, 3])
    })
    it(`Input array is [], input integer is 30 #2`, () => {
        expect(() => example104([], 30)).throw('Input array should has length more or equal two')
    })
})