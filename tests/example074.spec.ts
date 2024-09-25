// tests/example074.spec.ts
import { expect } from 'chai'
import { example074 } from '../src/example074'

console.log(`
Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value.
Display the updated array.
.
`)
describe('#example074', () => {
    it(`Input array is "[28, 70, 18, 1]" #1`, () => {
        expect(example074([28, 70, 18, 1])).deep.equal([28, 70, 70, 1])
    })
    it(`Input array is "[]" #2`, () => {
        expect(example074([])).deep.equal([])
    })
    it(`Input array is "[1, 2]" #3`, () => {
        expect(example074([1, 2])).deep.equal([1, 2])
    })
    it(`Input array is "[32, 31, 30]" #4`, () => {
        expect(example074([32, 31, 30])).deep.equal([32, 31, 30])
    })
    it(`Input array is "[1, 2, 3, 4, 5]" #5`, () => {
        expect(example074([1, 2, 3, 4, 5])).deep.equal([1, 4, 4, 4, 5])
    })
})