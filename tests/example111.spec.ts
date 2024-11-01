// tests/example111.spec.ts
import { expect } from 'chai'
import { example111 } from '../src/example111'

console.log(`
Write a JavaScript program to check a number from three given numbers where two numbers are equal. Find the third one.
`)
describe('#example111', () => {
    it(`Input number1 is 3, input number2 is 10, input number3 is 3 #1`, () => {
        expect(example111(3, 10, 3)).equal(10)
    })
    it(`Input number1 is 9, input number2 is 4, input number3 is 4 #2`, () => {
        expect(example111(9, 4, 4)).equal(9)
    })
    it(`Input number1 is 5, input number2 is 5, input number3 is 8 #3`, () => {
        expect(example111(5, 5, 8)).equal(8)
    })
    it(`Input number1 is 3, input number2 is 3, input number3 is 3 #4`, () => {
        expect(() => example111(3, 3, 3)).throw('All numbers are equals')
    })
    it(`Input number1 is 1, input number2 is 2, input number3 is 3 #5`, () => {
        expect(() => example111(1, 2, 3)).throw('All numbers are differs')
    })
    it(`Input number1 is 0, input number2 is -1, input number3 is 0 #6`, () => {
        expect(example111(0, -1, 0)).equal(-1)
    })
})