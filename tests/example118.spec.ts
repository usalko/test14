// tests/example118.spec.ts
import { expect } from 'chai'
import { example118 } from '../src/example118'

console.log(`
Write a JavaScript program to check whether a given number is in a given range. 
`)
describe('#example118', () => {
    it(`Input number is 1, input range is [2, 3] #1`, () => {
        expect(example118(1, [2, 3])).equal(false)
    })
    it(`Input number is 12, input range is [10, 20] #1`, () => {
        expect(example118(12, [10, 20])).equal(true)
    })
})