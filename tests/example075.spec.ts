// tests/example075.spec.ts
import { expect } from 'chai'
import { example075 } from '../src/example075'

console.log(`
Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.
`)
describe('#example075', () => {
    it(`Input array1 is "[34, 5, 18]" input array2 [4, 18, 9] #1`, () => {
        expect(example075([34, 5, 18], [4, 18, 9])).deep.equal([5, 18])
    })
    it(`Input array1 is "[]" input array2 [7, 8, 9] #2`, () => {
        expect(() => example075([], [7, 8, 9])).to.throw('Given array1 of integers should have length 3')
    })
    it(`Input array1 is "[19, 8, 7]" input array2 [] #3`, () => {
        expect(() => example075([19, 8, 7], [])).to.throw('Given array2 of integers should have length 3')
    })
    it(`Input array1 is "[]" input array2 [] #4`, () => {
        expect(() => example075([], [])).to.throw('Given array1 of integers and array2 of integers should have length 3')
    })
    it(`Input array1 is "[9, 15, 21, 18]" input array2 [1, 1, 1] #5`, () => {
        expect(() => example075([9, 15, 21, 18], [1, 1, 1])).to.throw('Given array1 of integers should have length 3')
    })
    it(`Input array1 is "[7, 9, 11, 13]" input array2 [2, 2, 2] #6`, () => {
        expect(() => example075([7, 9, 11, 13], [2, 2, 2])).to.throw('Given array1 of integers should have length 3')
    })
    it(`Input array1 is "[1, 1, 1]" input array2 [20, 44, 66, 88] #7`, () => {
        expect(() => example075([1, 1, 1], [20, 44, 66, 88])).to.throw('Given array2 of integers should have length 3')
    })
    it(`Input array1 is "[66, 67, 68, 69]" input array2 [71, 70, 69, 68] #8`, () => {
        expect(() => example075([66, 67, 68, 69], [71, 70, 69, 68])).to.throw('Given array1 of integers and array2 of integers should have length 3')
    })
})