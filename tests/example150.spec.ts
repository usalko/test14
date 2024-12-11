// tests/example150.spec.ts
import { expect } from 'chai'
import { example150 } from '../src/example150'

console.log(`
Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.  
    `)
describe('#example150', () => {
    it(`Input integer is 45 #1`, () => {
        expect(example150(45)).equal(54)
    })
    it(`Input integer is 4546 #1`, () => {
        expect(example150(4546)).equal(5464)
    })
})
