// tests/example109.spec.ts
import { expect } from 'chai'
import { example109 } from '../src/example109'

console.log(`
Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.
`)
describe('#example109', () => {
    it(`Input integer is 1 #1`, () => {
        expect(example109(1)).deep.equal([1])
    })
    it(`Input integer is 2 #2`, () => {
        expect(example109(2)).deep.equal([1, 2])
    })
    it(`Input integer is 3 #3`, () => {
        expect(example109(3)).deep.equal([1, 2, 3])
    })
    it(`Input integer is 4 #4`, () => {
        expect(example109(4)).deep.equal([1, 2, 3])
    })
    it(`Input integer is 5 #5`, () => {
        expect(example109(5)).deep.equal([1, 2, 3, 5])
    })
    it(`Input integer is 17 #6`, () => {
        expect(example109(17)).deep.equal([1, 2, 3, 5, 7, 11, 13, 17])
    })
    it(`Input integer is 0 #7`, () => {
        expect(() => example109(0)).throw('An input integer should be more than 1')
    })
    it(`Input integer is -1 #7`, () => {
        expect(() => example109(-1)).throw('An input integer should be more than 1')
    })
})