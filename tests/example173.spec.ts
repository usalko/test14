// tests/example173.spec.ts
import { expect } from 'chai'
import { example173 } from '../src/example173'

console.log(`Fundamental(ES6)-Part-I
23. Filter Non-Unique with Comparator

Write a JavaScript program to filter out non-unique values in an array,
based on a provided comparator function.
`)
describe('#example173', () => {
    it(`Input array is [5, 6, 6, 7, 8, 8, 9], input compare function is (x, y) => x === y #1`, () => {
        expect(example173([5, 6, 6, 7, 8, 8, 9], (x: number, y: number): boolean => x === y)).deep.equal([5, 6, 7, 8, 9])
    })
})
