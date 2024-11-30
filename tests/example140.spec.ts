// tests/example140.spec.ts
import { expect } from 'chai'
import { example140 } from '../src/example140'

console.log(`
Write a JavaScript program to check whether all the digits in a given number are the same or not.
`)
describe('#example140', () => {
    it(`Input number is 123 #1`, () => {
        expect(example140(123)).equal(false)
    })
    it(`Input number is 222 #1`, () => {
        expect(example140(222)).equal(true)
    })
})