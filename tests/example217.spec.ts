// tests/example217.spec.ts
import { expect } from 'chai'
import { example217 } from '../src/example217'

console.log(`Fundamental(ES6)-Part-I
67. Left-to-Right Function Composition

Write a JavaScript program to perform left-to-right function composition.
Use Array.prototype.reduce() to perform left-to-right function composition.
The first (leftmost) function can accept one or more arguments; the remaining functions must be unary.
`)

describe('#example217', () => {
    it(`Input input arguments (c, d) => c + d, (b) => b + 2, (a) => a + 1  #1`, () => {
        expect(example217(
            (c: any, d: any): any => {
                return c + d
            },
            (b: any): any => {
                return b + 2
            },
            (a: any): any => {
                return a + 1
            },
        )(1, 2)).equal(6)
    })
})
