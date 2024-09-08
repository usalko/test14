// tests/example057.spec.ts
import { expect } from 'chai'
import { example057 } from '../src/example057'

console.log(`
Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.
`)
describe('#example057', () => {
    it(`Input string is "Nec Caesar" input number is 3" #1`, () => {
        expect(example057('Nec Caesar', 3)).equal('Nec CaesarNec CaesarNec Caesar')
    })
    it(`Input string is "" input number is 3" #2`, () => {
        expect(example057('', 3)).equal('')
    })
    it(`Input string is " " input number is 3" #3`, () => {
        expect(example057(' ', 3)).equal('   ')
    })
})