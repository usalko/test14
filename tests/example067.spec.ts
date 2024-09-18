// tests/example067.spec.ts
import { expect } from 'chai'
import { example067 } from '../src/example067'

console.log(`
Write a JavaScript program to create a new string from a given string.
This program removes the first and last characters of the string if the first or last character is 'P'.
Return the original string if the condition is not satisfied.
`)
describe('#example067', () => {
    it(`Input string is "Proper" #1`, () => {
        expect(example067('Proper')).equal('rope')
    })
    it(`Input string is "Strip" #2`, () => {
        expect(example067('Strip')).equal('tri')
    })
    it(`Input string is "Noname" #3`, () => {
        expect(example067('Noname')).equal('Noname')
    })
})