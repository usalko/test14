// tests/example060.spec.ts
import { expect } from 'chai'
import { example060 } from '../src/example060'

console.log(`
Write a JavaScript program to create a new string without the first and last characters of a given string.
`)
describe('#example060', () => {
    it(`Input string is "Today is hodie on latin language" #1`, () => {
        expect(example060('Today is hodie on latin language')).equal('oday is hodie on latin languag')
    })
    it(`Input string is "Heart" #2`, () => {
        expect(example060('Heart')).equal('ear')
    })
    it(`Input string is "" #3`, () => {
        expect(example060('')).equal('')
    })
    it(`Input string is "a" #4`, () => {
        expect(example060('a')).equal('')
    })
    it(`Input string is "ab" #5`, () => {
        expect(example060('ab')).equal('')
    })
})