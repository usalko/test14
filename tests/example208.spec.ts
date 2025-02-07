// tests/example208.spec.ts
import { expect } from 'chai'
import { example208 } from '../src/example208'

console.log(`Fundamental(ES6)-Part-I
58. Split Values into Groups by Predicate

Write a JavaScript program to split values into two groups according to a predicate function.
This specifies which group an element in the input collection belongs to.
`)

describe('#example208', () => {
    it(`Input array is: [1, '2', 3, '4', 5, '6'], input function is: (x: any): boolean => { return x - 1 } #1`, () => {
        expect(example208([1, '2', 3, '4', 5, '6'], (x: any): boolean => { return typeof(x) === 'number' } )).deep.equal([[1, 3, 5],['2', '4', '6']])
    })
})
