// tests/example163.spec.ts
import { expect } from 'chai'
import { example163 } from '../src/example163'

console.log(`Fundamental(ES6)-Part-I
13. String Length in Bytes

Write a JavaScript program to convert a given string's length to bytes.
`)
describe('#example163', () => {
    it(`Input string is "大家好" #1`, () => {
        expect(example163('大家好')).equal(9)
    })
})
