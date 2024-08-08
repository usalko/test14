// tests/example026.spec.ts
import { expect } from 'chai'
import { example026 } from '../src/example026'

console.log(`
Write a JavaScript program to create a string from a given string.
This is done by taking the last 3 characters and adding them at both the front and back.
The string length must be 3 or more.
`)
describe('#example026', () => {
    it(`Input string is "alpha-west" #1`, () => {
        expect(example026('alpha-west')).equal('estalpha-westest')
    })
    it(`Input string is "al" #1`, () => {
        expect(example026('al')).equal('al')
    })
})