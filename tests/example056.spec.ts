// tests/example056.spec.ts
import { expect } from 'chai'
import { example056 } from '../src/example056'

console.log(`
Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas. 
`)
describe('#example056', () => {
    it(`Input number 1 is 5, input number 2 is 2" #1`, () => {
        expect(example056(5, 2)).equal('2,5')
    })
})