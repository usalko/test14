// tests/example230.spec.ts
import { expect } from 'chai'
import { example230 } from '../src/example230'

console.log(`Fundamental(ES6)-Part-I
80. Validate with Luhn Algorithm

Write a JavaScript program to implement the Luhn Algorithm used to validate identification numbers
For example, credit card numbers, IMEI numbers, National Provider Identifier numbers etc.
`)

describe('#example230', () => {
    it(`Input argument is '4485275742308327' #1`, () => {
        expect(example230('4485275742308327')).equal(true)
    })
    it(`Input argument is 6011329933655299 #2`, () => {
        expect(example230(6011329933655299)).equal(true)
    })
    it(`Input argument is 123456789 #3`, () => {
        expect(example230(123456789)).equal(true)
    })
})
