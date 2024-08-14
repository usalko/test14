// tests/example032.spec.ts
import { expect } from 'chai'
import { example032 } from '../src/example032'

console.log(`
Write a JavaScript program to find the closest value to 100 from two numerical values. 
`)
describe('#example032', () => {
    it(`Input numbers are 102 and 99 #1`, () => {
        expect(example032(102, 99, 100)).equal(99)
    })
    it(`Input numbers are -50 and 30 #1`, () => {
        expect(example032(-50, 30, 100)).equal(30)
    })
    it(`Input numbers are 101 and 99 #1`, () => {
        expect(example032(101, 99, 100)).equal(101)
    })
})