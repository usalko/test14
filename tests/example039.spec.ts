// tests/example039.spec.ts
import { expect } from 'chai'
import { example039 } from '../src/example039'

console.log(`
Write a JavaScript program to compute the sum of the two given integers.
If the sum is in the range 50..80 return 65 otherwise return 80.
`)
describe('#example039', () => {
    it(`Input number1 is 1. input number2 is 40 #1`, () => {
        expect(example039(1, 40)).equal(80)
    })
    it(`Input number1 is 60. input number2 is 5 #2`, () => {
        expect(example039(60, 5)).equal(65)
    })
    it(`Input number1 is 100. input number2 is 20 #3`, () => {
        expect(example039(100, 20)).equal(80)
    })
})