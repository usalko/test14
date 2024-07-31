// tests/example018.spec.ts
import { expect } from 'chai'
import { example018 } from '../src/example018'

console.log(`
Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
`)
describe('#example018', () => {
    it(`Input numbers are 12 and 14 #1`, () => {
        expect(example018('12', '14', 50)).equal(false)
    })
    it(`Input numbers are 50 and 1 #1`, () => {
        expect(example018('50', '1', 50)).equal(true)
    })
    it(`Input numbers are 25 and 25 #1`, () => {
        expect(example018('25', '25', 50)).equal(true)
    })
})