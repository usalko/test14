// tests/example125.spec.ts
import { expect } from 'chai'
import { example125 } from '../src/example125'

console.log(`
Write a JavaScript program to find the longest string in a given array.
`)
describe('#example125', () => {
    it(`Input array is ["1", "22", "333"] #1`, () => {
        expect(example125(['1', '22', '333'])).equal('333')
    })
})