// tests/example180.spec.ts
import { expect } from 'chai'
import { example180 } from '../src/example180'

console.log(`Fundamental(ES6)-Part-I
30. Filter Elements Matching Values

Write a JavaScript program to filter out the element(s) of a given array that have one of the specified values.
`)
describe('#example180', () => {
    it(`Input string is "y" #1`, () => {
        expect(example180("y")).equal(true)
    })
})
