// tests/example303.spec.ts
import { expect } from 'chai'
import { example303 } from '../src/example303'


console.log(`Fundamental(ES6)-Part-I
163. Bytes to Human-Readable String


Write a JavaScript program to convert a number in bytes to a human-readable string.


Note: Use an array dictionary of units to be accessed based on the exponent.

 - Use an array dictionary of units to be accessed based on the exponent.
 - Use Number.prototype.toPrecision() to truncate the number to a certain number of digits.
 - Return the prettified string by building it up, taking into account the supplied options and whether it is negative or not.
 - Omit the second argument, precision, to use a default precision of 3 digits.
 - Omit the third argument, addSpace, to add space between the number and unit by default.

`)

describe('#example303', () => {
    it(`Input argument is 1000 #1`, () => {
        expect(example303(1000)).equal('1 KB')
    })
    it(`Input arguments are -27145424323.5821, 5 #2`, () => {
        expect(example303(-27145424323.5821, 5)).equal('-27.145 TB')
    })
    it(`Input arguments are 123456789, 3, false #3`, () => {
        expect(example303(123456789, 3, false)).equal('123MB')
    })
})
