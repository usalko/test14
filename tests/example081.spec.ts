// tests/example081.spec.ts
import { expect } from 'chai'
import { example081 } from '../src/example081'

console.log(`
Write a JavaScript program to add two digits to a given positive integer of length two.
`)
describe('#example081', () => {
    it(`Input number is 42, input digit1 "3" input digit2 "5""  #1`, () => {
        expect(example081(42, '3', '5')).equal(3542)
    })
    it(`Input number is 1, input digit1 "3" input digit2 "5""  #2`, () => {
        expect(() => example081(1, '3', '5')).to.throw('Given positive integer should have length two')
    })
    it(`Input number is 321, input digit1 "3" input digit2 "5""  #3`, () => {
        expect(() => example081(321, '3', '5')).to.throw('Given positive integer should have length two')
    })
    it(`Input number is 42, input digit1 "" input digit2 "5""  #4`, () => {
        expect(() => example081(42, '', '5')).to.throw('First input should be one digit')
    })
    it(`Input number is 42, input digit1 "3" input digit2 """  #5`, () => {
        expect(() => example081(42, '3', '')).to.throw('Second input should be one digit')
    })
})