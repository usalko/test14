// tests/example054.spec.ts
import { expect } from 'chai'
import { example054 } from '../src/example054'

console.log(`
Write a JavaScript program to count the number of vowels in a given string.
`)
describe('#example054', () => {
    it(`Input string is "My dear friends" #1`, () => {
        expect(example054('My dear friends')).equal(4)
    })
    it(`Input string is "A" #2`, () => {
        expect(example054('A')).equal(1)
    })
    it(`Input string is "B" #3`, () => {
        expect(example054('B')).equal(0)
    })
})