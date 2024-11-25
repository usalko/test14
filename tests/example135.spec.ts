// tests/example135.spec.ts
import { expect } from 'chai'
import { example135v1, example135v2, example135v3 } from '../src/example135'

console.log(`
Write a JavaScript program to remove all characters from a given string that appear more than once. 
`)
describe('#example135', () => {
    //abcdefghijklmnopqrstuvwxyz
    it(`Input input string is "avatar" #1`, () => {
        expect(example135v3("avatar")).equal("vtr")
    })
    it(`Input input string is "avatar" #2`, () => {
        expect(example135v2("avatar")).equal("vtr")
    })
    it(`Input input string is "avatar" #3`, () => {
        expect(example135v1("avatar")).equal("vtr")
    })
})