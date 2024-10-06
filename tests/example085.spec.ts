// tests/example085.spec.ts
import { expect } from 'chai'
import { example085 } from '../src/example085'

console.log(`
Write a JavaScript program to divide a given array of positive integers into two parts.
First element belongs to the first part,
    second element belongs to the second part,
    and third element belongs to the first part and so on.
Now compute the sum of two parts and store it in an array of size two.
`)
describe('#example085', () => {
    it(`Input array is [1, 2] #1`, () => {
        expect(example085([1, 2])).deep.equal([1, 2])
    })
    it(`Input array is [12, 15, 1] #2`, () => {
        expect(example085([12, 15, 1])).deep.equal([13, 15])
    })
    it(`Input array is [42] #3`, () => {
        expect(example085([42])).deep.equal([42, 0])
    })
    it(`Input array is [] #4`, () => {
        expect(example085([])).deep.equal([0, 0])
    })
    it(`Input array is [64, 32, 16, 8] #5`, () => {
        expect(example085([64, 32, 16, 8])).deep.equal([80, 40])
    })
})