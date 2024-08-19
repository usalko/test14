// tests/example037.spec.ts
import { expect } from 'chai'
import { example037 } from '../src/example037'

console.log(`
Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string.
If the string length is less than 3 convert all the characters to upper case.
`)
describe('#example037', () => {
    it(`Input string is ABSOLUTE #1`, () => {
        expect(example037('ABSOLUTE')).equal('absOLUTE')
    })
    it(`Input string is abs #2`, () => {
        expect(example037('abs')).equal('ABS')
    })
})