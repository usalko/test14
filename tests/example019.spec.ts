// tests/example019.spec.ts
import { expect } from 'chai'
import { example019 } from '../src/example019'

console.log(`
Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
`)
describe('#example019', () => {
    it(`Input number is 19 #1`, () => {
        expect(example019('19', 20, 100, 400)).equal(false)
    })
    it(`Input number is 99 #1`, () => {
        expect(example019('99', 20, 100, 400)).equal(true)
    })
    it(`Input number is 101 #1`, () => {
        expect(example019('101', 20, 100, 400)).equal(false)
    })
    it(`Input number is 400 #1`, () => {
        expect(example019('400', 20, 100, 400)).equal(true)
    })
    it(`Input number is 500 #1`, () => {
        expect(example019('401', 20, 100, 400)).equal(false)
    })
    it(`Input number is 500 #1`, () => {
        expect(example019('500', 20, 100, 400)).equal(false)
    })
})