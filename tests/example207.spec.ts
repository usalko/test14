// tests/example207.spec.ts
import { expect } from 'chai'
import { example207 } from '../src/example207'

console.log(`Fundamental(ES6)-Part-I
57. Average of Array with Mapping Function

Write a JavaScript program to compute the average of an array,
after mapping each element to a value using the provided function.
`)

describe('#example207', () => {
    it(`Input array is: [1, 2, 3, 4, 5, 6], input function is: (x: any): number => { return x - 1 } #1`, () => {
        expect(example207([1, 2, 3, 4, 5, 6], (x: any): number => { return x - 1 } )).equal(2.5)
    })
})
