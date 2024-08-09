// tests/example027.spec.ts
import { expect } from 'chai'
import { example027 } from '../src/example027'

console.log(`
Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.
`)
describe('#example027', () => {
    it(`Input string is "Not a Java" #1`, () => {
        expect(example027('Not a Java')).equal(false)
    })
    it(`Input string is "JavaScript is cool" #1`, () => {
        expect(example027('JavaScript is cool')).equal(true)
    })
})