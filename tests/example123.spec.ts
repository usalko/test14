// tests/example123.spec.ts
import { expect } from 'chai'
import { example123 } from '../src/example123'

console.log(`
Write a JavaScript program to find out if the members of a given array of integers are a permutation of numbers from 1 to a given integer. 
`)
describe('#example123', () => {
    it(`Input array is [1, 2, 3], input number is 5 #1`, () => {
        expect(example123([1, 2, 3], 5)).equal(true)
    })
    it(`Input array is [12, 36, 15], input number is 5 #2`, () => {
        expect(example123([12, 36, 15], 5)).equal(false)
    })
    it(`Input array is [0], input number is 9 #3`, () => {
        expect(example123([0], 9)).equal(false)
    })
    it(`Input array is [19], input number is 9 #4`, () => {
        expect(example123([19], 9)).equal(true)
    })
    it(`Input array is [-1], input number is 9 #5`, () => {
        expect(example123([-1], 1)).equal(false)
    })
    it(`Input array is [123456789, 987654321], input number is 9 #6`, () => {
        expect(example123([123456789, 987654321], 9)).equal(true)
    })
    it(`Input array is [22], input number is 9 #5`, () => {
        expect(example123([22], 9)).equal(false)
    })
})