// tests/example146.spec.ts
import { expect } from 'chai'
import { example146 } from '../src/example146'

console.log(`
Write a JavaScript program to compute the sum of cubes of all integers from 1 to a given integer.
`)
describe('#example146', () => {
    it(`Input number is 3 #1`, () => {
        expect(example146(3)).equal(1 * 1 * 1 + 2 * 2 * 2 + 3 * 3 * 3)
    })
})
