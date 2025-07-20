// tests/example353.spec.ts
import { expect } from 'chai'
import { example353, } from '../src/example353'


console.log(`Fundamental(ES6)-Part-II
213. Initialize and Fill Array


Write a JavaScript program to initialize and fill an array with the specified values.


 - Use Array.from() to create an array of the desired length, Array.prototype.fill() to fill it with the desired values.
 - Omit the last argument, val, to use a default value of 0.

`)

describe('#example353', () => {
    it(`Input arguments are 5, 2 #1`, () => {
        expect(example353(5, 2)).deep.equal([2, 2, 2, 2, 2])
    })
    it(`Input arguments are 4, 0 #1`, () => {
        expect(example353(4, 0)).deep.equal([0, 0, 0, 0])
    })
})
