// tests/example047.spec.ts
import { expect } from 'chai'
import { example047 } from '../src/example047'

console.log(`
Write a JavaScript program to check whether a given number exists in the range 40..10000.  
For example 40 presents in 40 and 4000
`)
describe('#example047', () => {
    it(`Input number is 42 #1`, () => {
        expect(example047(42, [40, 10000])).equal(true)
    })
    it(`Input number is 40 #2`, () => {
        expect(example047(40, [40, 10000])).equal(true)
    })
    it(`Input number is 10000 #3`, () => {
        expect(example047(10000, [40, 10000])).equal(true)
    })
    it(`Input number is 12 #4`, () => {
        expect(example047(12, [40, 10000])).equal(false)
    })
    it(`Input number is 30000 #5`, () => {
        expect(example047(30000, [40, 10000])).equal(false)
    })
    it(`Input number is 0 #6`, () => {
        expect(example047(0, [40, 10000])).equal(false)
    })
    it(`Input number is -1 #7`, () => {
        expect(example047(-1, [40, 10000])).equal(false)
    })
})