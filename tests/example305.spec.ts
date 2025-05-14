// tests/example305.spec.ts
import { expect } from 'chai'
import { example305 } from '../src/example305'


console.log(`Fundamental(ES6)-Part-I
165. Left-to-Right Function Composition


Write a JavaScript program to perform left-to-right function composition.


 - Use Array.prototype.reduce() with the spread operator (...) to perform left-to-right function composition.
 - The first (leftmost) function can accept one or more arguments; the remaining functions must be unary.

`)

describe('#example305', () => {
    it(`Input arguments are (x: any, y: any) => x * y, (x: any) => x + 5 #1`, () => {
        expect(example305((x: any, y: any) => x * y, (x: any) => x + 5 )(5, 2)).equal(15)
    })
    it(`Input arguments are (x: any, y: any) => x * y, (x: any) => x + 5 #2`, () => {
        expect(example305((x: any, y: any) => x * y, (x: any) => x + 5 )(16, 2)).equal(37)
    })
})
