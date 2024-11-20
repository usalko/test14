// tests/example130.spec.ts
import { expect } from 'chai'
import { example130 } from '../src/example130'

console.log(`
Write a JavaScript program to find the number of even digits in a given integer.
`)
describe('#example130', () => {
    it(`Input integer is 1632 #1`, () => {
        expect(example130(1632)).equal(2)
    })
    it(`Input integer is 222222 #2`, () => {
        expect(example130(222222)).equal(6)
    })
})