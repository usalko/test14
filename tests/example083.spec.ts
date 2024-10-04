// tests/example083.spec.ts
import { expect } from 'chai'
import { example083 } from '../src/example083'

console.log(`
Write a JavaScript program to find the longest string from a given array of strings.
`)
describe('#example083', () => {
    it(`Input strings array is ["a", "bc"]  #1`, () => {
        expect(example083(["a", "bc"])).equal("bc")
    })
    it(`Input strings array is []  #2`, () => {
        expect(example083([])).equal("")
    })
    it(`Input strings array is [""]  #3`, () => {
        expect(example083([""])).equal("")
    })
})