// tests/example216.spec.ts
import { expect } from 'chai'
import { example216 } from '../src/example216'

console.log(`Fundamental(ES6)-Part-I
66. Right-to-Left Function Composition

Write a JavaScript program to perform right-to-left function composition.
Use Array.prototype.reduce() to perform right-to-left function composition.
The last (rightmost) function can accept one or more arguments; the remaining functions must be unary.
`)

describe('#example216', () => {
    it(`Input input arguments (a) => a + 1, (b) => b + 2, (c, d) => c + d #1`, () => {
        expect(example216(
            (a: any): any =>{
                return a + 1
            },
            (b: any): any => {
                return b + 2
            },
            (c: any, d: any): any => {
                return c + d
            })(1, 2)).equal(6)
    })
})
