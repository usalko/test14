// tests/example016.spec.ts
import { expect } from 'chai'
import { example016 } from '../src/example016'

console.log(`
Write a JavaScript program to compute the sum of the two given integers.
If the two values are the same, then return triple their sum.
`)
describe('#example016', () => {
    it(`Input numbers 21 25 #1`, () => {
        expect(example016('21', '25')).equal(46)
    })
    it(`Input numbers 18 18 #1`, () => {
        expect(example016('18', '18')).equal(3*36)
    })
})