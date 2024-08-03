// tests/example021.spec.ts
import { expect } from 'chai'
import { example021 } from '../src/example021'

console.log(`
Write a JavaScript program to create another string by adding "Py" in front of a given string.
If the given string begins with "Py" return the original string.
`)
describe('#example021', () => {
    it(`Input string is "usual" #1`, () => {
        expect(example021('usual')).equal('Pyusual')
    })
    it(`Input string is "PyAlready" #2`, () => {
        expect(example021('PyAlready')).equal('PyAlready')
    })
})