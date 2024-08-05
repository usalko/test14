// tests/example023.spec.ts
import { expect } from 'chai'
import { example023 } from '../src/example023'

console.log(`
Write a JavaScript program to create a new string from a given string by changing
the position of the first and last characters. The string length must be broader 
than or equal to 1.
`)
describe('#example023', () => {
    it(`Input string is "simple songs" #1`, () => {
        expect(example023('simple songs')).equal('simple songs')
    })
    it(`Input string is "Not a song" #1`, () => {
        expect(example023('Not a song')).equal('got a sonN')
    })
})