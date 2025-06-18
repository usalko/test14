// tests/example335.spec.ts
import { expect } from 'chai'
import { example335 } from '../src/example335'


console.log(`Fundamental(ES6)-Part-II
195. Check If Number


Write a JavaScript program to check if a given argument is a number.


 - Use typeof to check if a value is classified as a number primitive.
 - To safeguard against NaN, check if val === val (as NaN has a typeof equal to number and is the only value not equal to itself).

`)

describe('#example335', () => {
    it(`Input argument is '1' #1`, () => {
        expect(example335('1')).equal(false)
    })
    it(`Input argument is 1 #2`, () => {
        expect(example335(1)).equal(true)
    })
})
