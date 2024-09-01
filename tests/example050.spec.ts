// tests/example050.spec.ts
import { expect } from 'chai'
import { example050 } from '../src/example050'

console.log(`
Write a JavaScript program to capitalize the first letter of each word in a given string. 
`)
describe('#example050', () => {
    it(`Input string is "knowledge is power" #1`, () => {
        expect(example050('knowledge is power')).equal('Knowledge Is Power')
    })
    it(`Input string is "power is power" #2`, () => {
        expect(example050('power is power')).equal('Power Is Power')
    })
})