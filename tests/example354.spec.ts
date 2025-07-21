// tests/example354.spec.ts
import { expect } from 'chai'
import { example354, } from '../src/example354'


console.log(`Fundamental(ES6)-Part-II
214. Range Array in Reverse


Write a JavaScript program to initialize an array containing the numbers in the specified range (in reverse)
where start and end are inclusive of their common difference step.


 - Use Array.from(Math.ceil((end+1-start)/step)) to create an array of the desired length
 (the amounts of elements is equal to (end-start)/step or (end+1-start)/step for inclusive end),
 Array.prototype.map() to fill with the desired values in a range.
 - Omit the second argument, start, to use a default value of 0.
 - Omit the last argument, step, to use a default value of 1.


`)

describe('#example354', () => {
    it(`Input argument is 5 #1`, () => {
        expect(example354(5)).deep.equal([5, 4, 3, 2, 1, 0])
    })
    it(`Input arguments are 7, 3 #1`, () => {
        expect(example354(7, 3)).deep.equal([7, 6, 5, 4, 3])
    })
    it(`Input arguments are 9, 0, 2 #1`, () => {
        expect(example354(9, 0, 2)).deep.equal([8, 6, 4, 2, 0])
    })
})
