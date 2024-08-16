// tests/example034.spec.ts
import { expect } from 'chai'
import { example034 } from '../src/example034'

console.log(`
 Write a JavaScript program to find the largest number from the two given positive integers.
The two numbers are in the range 40..60 inclusive.  
 `)
describe('#example034', () => {
    it(`Input numbers are 41 and 54 #1`, () => {
        expect(example034(41, 54, [40, 60])).equal(54)
    })                                         
    it(`Input numbers are 10 and 36 #2`, () => {
        expect(() => example034(10, 36, [40, 60])).to.throw(`Invalid user input. First input number 10 not in the range [40, 60]`)
    })                                         
})