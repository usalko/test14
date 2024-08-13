// tests/example031.spec.ts
import { expect } from 'chai'
import { example031 } from '../src/example031'

console.log(`
Write a JavaScript program to find the largest of three given integers.
`)
describe('#example031', () => {
    it(`Input numbers are 13 4 6 #1`, () => {
        expect(example031(13, 4, 6)).equal(13)
    })
})