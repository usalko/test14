// tests/example033.spec.ts
import { expect } from 'chai'
import { example033 } from '../src/example033'

console.log(`
Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.
`)
describe('#example033', () => {
    it(`Input numbers are 57 and 44 #1`, () => {
        expect(example033(57, 44, [40, 60], [70, 100])).equal(true)
    })
    it(`Input numbers are 90 and 68 #1`, () => {
        expect(example033(90, 68, [40, 60], [70, 100])).equal(false)
    })
    it(`Input numbers are 5 and 101 #1`, () => {
        expect(example033(5, 101, [40, 60], [70, 100])).equal(false)
    })                                                                   
})