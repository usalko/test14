// tests/example015.spec.ts
import { expect } from 'chai'
import { example015 } from '../src/example015'

console.log(`
Write a JavaScript program to get the difference between a given number and 13, 
if the number is broader(larger?) than 13 return double the absolute difference.  
`)
describe('#example015', () => {
    it(`Input number 24 #1`, () => {
        expect(example015('24', 13)).equal(22)
    })
    it(`Input number 7 #1`, () => {
        expect(example015('7', 13)).equal(6)
    })
})