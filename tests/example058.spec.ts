// tests/example058.spec.ts
import { expect } from 'chai'
import { example058 } from '../src/example058'

console.log(`
Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string.
The string length must be 3 and above.
    `)
describe('#example058', () => {
    it(`Input string is "Just a fire" #1`, () => {
        expect(example058('Just a fire')).equal('Just a fireireireire')
    })
    it(`Input string is "aaa" #2`, () => {
        expect(example058('aaa')).equal('aaaaaaaaaaaa')
    })
    it(`Input string is "" #3`, () => {
        expect(() => example058('')).to.throw('Invalid input string, the string length must be more or equal 3.')
    })
})