// tests/example020.spec.ts
import { expect } from 'chai'
import { example020 } from '../src/example020'

console.log(`
Write a JavaScript program to check two given integers whether one is positive and another one is negative.
`)
describe('#example020', () => {
    it(`Input numbers are 19 -1 #1`, () => {
        expect(example020('19', '-1')).equal(true)
    })
    it(`Input numbers are 22 12 #2`, () => {
        expect(example020('22', '12')).equal(false)
    })
    it(`Input numbers are -1 -2 #3`, () => {
        expect(example020('-1', '-2')).equal(false)
    })
    it(`Input numbers are 19x w1 #4`, () => {
        expect(example020('19x', 'w1')).equal(false)
    })
})