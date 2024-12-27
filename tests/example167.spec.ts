// tests/example167.spec.ts
import { expect } from 'chai'
import { example167 } from '../src/example167'

console.log(`Fundamental(ES6)-Part-I
17. Split Array into Two Groups

Write a JavaScript program to split the values of two given arrays into two groups.
If an element in the filter is true, the corresponding element in the collection belongs to the first group;
otherwise, it belongs to the second group.
`)
describe('#example167', () => {
    it(`Input array is [34, 35, 66, 77, 2, 3], input function is {(x) => x >= 66} #1`, () => {
        expect(example167([34, 35, 66, 77, 2, 3], (x) => x >= 66)).deep.equal([[66, 77],[34, 35, 2, 3]])
    })
})
