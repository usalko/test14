// tests/example025.spec.ts
import { expect } from 'chai'
import { example025 } from '../src/example025'

console.log(`
Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
`)
describe('#example025', () => {
    it(`Input number is 45 #1`, () => {
        expect(example025(45, [3, 7])).equal(true)
    })
    it(`Input number is 5 #1`, () => {
        expect(example025(5, [3, 7])).equal(false)
    })
    it(`Input number is 14 #1`, () => {
        expect(example025(14, [3, 7])).equal(true)
    })
})