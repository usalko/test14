// tests/example242.spec.ts
import { expect } from 'chai'
import { example242 } from '../src/example242'

console.log(`Fundamental(ES6)-Part-I
92. Get nth Argument by Index or Reverse Index

Write a JavaScript program to create a function that gets the argument at index n.
If n is negative, the nth argument from the end is returned.

 - Use Array.prototype.slice() to get the desired argument at index n.
 - If n is negative, the nth argument from the end is returned.

 `)

describe('#example242', () => {
    it(`Input arguments are 3; 1, 2, 3 #1`, () => {
        expect(example242(3)(1, 2, 3)).equal(3)
    })
    it(`Input arguments are 3; 1, 2 #1`, () => {
        expect(example242(3)(1, 2)).equal(undefined)
    })
    it(`Input arguments are -1; 1, 2, 3, 4, 5 #1`, () => {
        expect(example242(-1)(1, 2, 3, 4, 5)).equal(5)
    })
})
