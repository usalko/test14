// tests/example059.spec.ts
import { expect } from 'chai'
import { example059 } from '../src/example059'

console.log(`
Write a JavaScript program to extract the first half of a even string.
`)
describe('#example059', () => {
    it(`Input string is "Sunny day" #1`, () => {
        expect(example059('Sunny day')).equal('Sunn')
    })
    it(`Input string is "Lovely day" #2`, () => {
        expect(example059('My heart day')).equal('My hea')
    })
    it(`Input string is "" #3`, () => {
        expect(example059('')).equal('')
    })
})