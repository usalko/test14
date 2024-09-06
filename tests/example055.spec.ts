// tests/example055.spec.ts
import { expect } from 'chai'
import { example055 } from '../src/example055'

console.log(`
Write a JavaScript program to check whether a given string contains an equal number of p's and t's.
`)
describe('#example055', () => {
    it(`Input string is "the proper things" #1`, () => {
        expect(example055('the proper things', ['p', 't'])).equal(true)
    })
    it(`Input string is "proper" #2`, () => {
        expect(example055('proper', ['p', 't'])).equal(false)
    })
    it(`Input string is "top" #3`, () => {
        expect(example055('top', ['p', 't'])).equal(true)
    })
    it(`Input string is "percussion" #4`, () => {
        expect(example055('tiger', ['p', 't'])).equal(false)
    })
    it(`Input string is "no case" #5`, () => {
        expect(example055('no case', ['p', 't'])).equal(false)
    })
})