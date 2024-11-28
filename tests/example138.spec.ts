// tests/example138.spec.ts
import { expect } from 'chai'
import { example138 } from '../src/example138'

console.log(`
Write a JavaScript program to reverse the bits of a given 16-bit unsigned short integer.
`)
describe('#example138', () => {
    it(`Input number is 1 #1`, () => {
        expect(example138(1)).equal(0x8000)
    })
})