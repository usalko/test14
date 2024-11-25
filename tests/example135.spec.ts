// tests/example135.spec.ts
import { expect } from 'chai'
import { example135 } from '../src/example135'

console.log(`
Write a JavaScript program to remove all characters from a given string that appear more than once. 
`)
describe('#example135', () => {
    //abcdefghijklmnopqrstuvwxyz
    it(`Input input string is "avatar" #1`, () => {
        expect(example135("avatar")).equal("vtr")
    })
})