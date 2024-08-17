// tests/example035.spec.ts
import { expect } from 'chai'
import { example035 } from '../src/example035'

console.log(`
Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.
 `)
describe('#example035', () => {
    it(`Input character is 'a' input string is 'remaverik' #1`, () => {
        expect(example035('a', 'remaverik')).equal(true)
    })                                         
    it(`Input character is 'b' input string is 'is a string' #2`, () => {
        expect(example035('b', 'is a string')).equal(false)
    })                                         
})