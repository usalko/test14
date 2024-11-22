// tests/example132.spec.ts
import { expect } from 'chai'
import { example132 } from '../src/example132'

console.log(`
Write a JavaScript program to find all distinct prime factors of a given integer.
`)
describe('#example132', () => {
    it(`Input integer is 3 #1`, () => {
        expect(example132(3)).deep.equal([3])
    })
    it(`Input integer is 10 #2`, () => {
        expect(example132(10)).deep.equal([5, 2])
    })
    it(`Input integer is 77 #3`, () => {
        expect(example132(77)).deep.equal([11, 7])
    })
    it(`Input integer is 50 #3`, () => {
        expect(example132(50)).deep.equal([5, 2])
    })
})