// tests/example362.spec.ts
import { expect } from 'chai'
import { example362, } from '../src/example362'


console.log(`Fundamental(ES6)-Part-II
222. Range Array with Ratio Step


Write a JavaScript program that initializes an array containing the numbers in the specified range.
This is where start and end are inclusive and the ratio between the two terms is step. 
Returns an error if step equals 1.

 
 - Use Array.from(), Math.log() and Math.floor() to create an array of the desired length, Array.prototype.map() to fill with the desired values in a range.
 - Omit the second argument, start, to use a default value of 1.
 - Omit the third argument, step, to use a default value of 2.


`)

describe('#example362', () => {
    it(`Input argument is: 256 #1`, () => {
        expect(example362(256)).deep.equal([1,2,4,8,16,32,64,128,256])
    })
    it(`Input argument are: 256, 3 #1`, () => {
        expect(example362(256, 3)).deep.equal([3,6,12,24,48,96,192])
    })
    it(`Input argument are: 256, 1, 4, 3 #1`, () => {
        expect(example362(256, 1, 4)).deep.equal([1,4,16,64,256])
    })
})
