// tests/example162.spec.ts
import { expect } from 'chai'
import { example162 } from '../src/example162'

console.log(`Fundamental(ES6)-Part-I
12. Remove Non-Printable ASCII from String

Write a JavaScript program to remove non-printable ASCII characters from a given string.
`)
describe('#example162', () => {
    it(`Input string is "p\ri\n\t" #1`, () => {
        expect(example162('p\ri\n\t')).deep.equal('pi')
    })
})
