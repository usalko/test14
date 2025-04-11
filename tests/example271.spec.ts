// tests/example271.spec.ts
import { expect } from 'chai'
import { example271 } from '../src/example271'

console.log(`Fundamental(ES6)-Part-I
121. Convert Value to Safe Integer

Write a JavaScript program to convert a value to a safe integer.

 - Use Math.max() and Math.min() to find the closest safe value.
 - Use Math.round() to convert to an integer.

`)

describe('#example271', () => {
    it(`Input argument is '3.2' #1`, () => {
        expect(example271('3.2')).equal(3)
    })
    it(`Input argument is '3.2' #1`, () => {
        expect(example271(Infinity)).equal(9007199254740991)
    })
})
