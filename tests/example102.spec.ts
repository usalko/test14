// tests/example102.spec.ts
import { expect } from 'chai'
import { example102 } from '../src/example102'

console.log(`
Write a JavaScript program to find the number of inversions of a given array of integers. 
Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.
`)
describe('#example102', () => {
    it(`Input array is [2, 1] #1`, () => {
        expect(example102([2, 1])).equal(1)
    })
    it(`Input array is [1, 2] #2`, () => {
        expect(example102([1, 2])).equal(0)
    })
    it(`Input array is [35, 70, 18] #3`, () => {
        expect(example102([35, 70, 18])).equal(2)
    })
    it(`Input array is [5, 4, 3, 2, 1] #4`, () => {
        expect(example102([5, 4, 3, 2, 1])).equal(4 + 3 + 2 + 1)
    })
    it(`Input array is [] #5`, () => {
        expect(example102([])).equal(0)
    })
    it(`Input array is [-2, -1, 0, 1] #6`, () => {
        expect(example102([-1, -2, 0, 1])).equal(1)
    })
})