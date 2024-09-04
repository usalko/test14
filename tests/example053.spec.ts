// tests/example053.spec.ts
import { expect } from 'chai'
import { example053 } from '../src/example053'

console.log(`
Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
`)
describe('#example053', () => {
    it(`Input string is "Not a rocket science but better" #1`, () => {
        expect(example053('Not a rocket science but better')).equal(true)
    })
    it(`Input number is "absolute" #2`, () => {
        expect(example053('Absolute')).equal(false)
    })
    it(`Input number is "Nothing else" #2`, () => {
        expect(example053('Nothing else')).equal(false)
    })
})