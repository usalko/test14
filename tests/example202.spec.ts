// tests/example202.spec.ts
import { expect } from 'chai'
import { example202 } from '../src/example202'

console.log(`Fundamental(ES6)-Part-I
52. Group Array Elements by Function

Write a JavaScript program to group the elements of a given array based on the given function.
`)

describe('#example202', () => {
    it(`Input array is: ['a', 'b', 'c'], input function is (a)=> a 1 #1`, () => {
        expect(example202(['a', 'b', 'c'], (x: any) => x)).deep.equal(['a', 'b', 'c'])
    })
})
