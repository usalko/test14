// tests/example264.spec.ts
import { expect } from 'chai'
import { example264 } from '../src/example264'

console.log(`Fundamental(ES6)-Part-I
114. Uncurry Function to Depth n

Write a JavaScript program to uncurry a function up to depth n.

 - Return a variadic function.
 - Use Array.prototype.reduce() on the provided arguments to call each subsequent curry level of the function.
 - If the length of the provided argument is less than n throw an error.
 - Otherwise, call fn with the proper amount of arguments, using Array.prototype.slice(0, n).
 - Omit the second argument, n, to uncurry up to depth 1.

`)

describe('#example264', () => {
    it(`Input argument is x => y => z => x + y + z, 3; 1, 2, 3 #1`, () => {
        expect(example264((x: any) => (y: any) => (z: any) => x + y + z, 3)(1, 2, 3)).equal(6)
    })
})
