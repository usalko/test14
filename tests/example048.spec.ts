// tests/example048.spec.ts
import { expect } from 'chai'
import { example048 } from '../src/example048'

console.log(`
Write a JavaScript program to reverse a given string.
`)
describe('#example048', () => {
    it(`Input string is "dad" #1`, () => {
        expect(example048('dad')).equal('dad')
    })
    it(`Input string is "recover" #2`, () => {
        expect(example048('recover')).equal('revocer')
    })
})