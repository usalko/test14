// tests/example024.spec.ts
import { expect } from 'chai'
import { example024 } from '../src/example024'

console.log(`
Write a JavaScript program to create another string from a given string
with the first character of the given string added to the front and back.
`)
describe('#example024', () => {
    it(`Input string is "just fly" #1`, () => {
        expect(example024('just fly')).equal('jjust flyj')
    })
})