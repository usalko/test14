// tests/example127.spec.ts
import { expect } from 'chai'
import { example127 } from '../src/example127'

console.log(`
Write a JavaScript program to reverse the order of bits in a integer. 
14 -> 00001110 -> 01110000 -> 112
56 -> 00111000 -> 00011100 -> 28
234 -> 11101010 -> 01010111 -> 87
`)
describe('#example127', () => {
    it(`Input integer is 14 #1`, () => {
        expect(example127(14, 1)).equal(112)
    })
    it(`Input integer is 56 #1`, () => {
        expect(example127(56, 1)).equal(28)
    })
    it(`Input integer is 234 #1`, () => {
        expect(example127(234, 1)).equal(87)
    })
})