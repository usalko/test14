// tests/example129.spec.ts
import { expect } from 'chai'
import { example129 } from '../src/example129'

console.log(`
Write a JavaScript program to find the smallest prime number strictly greater than a given number.
`)
describe('#example129', () => {
    it(`Input integer is 16 #1`, () => {
        expect(example129(16)).equal(17)
    })
    it(`Input integer is 2 #2`, () => {
        expect(example129(2)).equal(2)
    })
    it(`Input integer is -1 #3`, () => {
        expect(example129(-1)).equal(-1)
    })
    it(`Input integer is -16 #4`, () => {
        expect(example129(-16)).equal(-13)
    })
    it(`Input integer is -1000 #5`, () => {
        expect(example129(-1000)).equal(-997)
    })
    it(`Input integer is 1000 #6`, () => {
        expect(example129(1000)).equal(1009)
    })
})