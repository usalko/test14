// tests/example134.spec.ts
import { expect } from 'chai'
import { example134 } from '../src/example134'

console.log(`
Write a JavaScript program to change the characters (lower case) in a string where
a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a. 
`)
describe('#example134', () => {
    //abcdefghijklmnopqrstuvwxyz
    it(`Input string is "Alas" #1`, () => {
        expect(example134("Alas")).equal("Aozh")
    })
})