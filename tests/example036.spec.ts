// tests/example036.spec.ts
import { expect } from 'chai'
import { example036 } from '../src/example036'

console.log(`
Write a JavaScript program that checks whether the last digit of three positive integers is the same.
 `)
describe('#example036', () => {
    it(`Input numbers are 134 235 892 #1`, () => {
        expect(example036(134, 235, 892)).equal(false)
    })
    it(`Input numbers are 111 251 981 #2`, () => {
        expect(example036(111, 251, 981)).equal(true)
    })
})