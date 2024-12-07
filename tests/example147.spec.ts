// tests/example147.spec.ts
import { expect } from 'chai'
import { example147 } from '../src/example147'

console.log(`
Write a JavaScript program to compute the sum of all the digits that occur in a given string. 
`)
describe('#example147', () => {
    it(`Input string is "The string 1, the string 2" #1`, () => {
        expect(example147("The string 1, the string 2")).equal(3)
    })
})
