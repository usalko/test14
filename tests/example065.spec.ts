// tests/example065.spec.ts
import { expect } from 'chai'
import { example065 } from '../src/example065'

console.log(`
Write a JavaScript program to test whether a string ends with "Script". 
The string length must be greater than or equal to 6.
`)
describe('#example065', () => {
    it(`Input string is "Not a Script" #1`, () => {
        expect(example065('Not a Script')).equal(true)
    })
    it(`Input string is "Script but not satisfiable" #2`, () => {
        expect(example065('Script but not satisfiable')).equal(false)
    })
    it(`Input string is "" #3`, () => {
        expect(() => example065('')).to.throw('The string length must be greater than or equal to 6.')
    })
})