// tests/example278.spec.ts
import { expect } from 'chai'
import { example278 } from '../src/example278'

console.log(`Fundamental(ES6)-Part-I
138. Variadic Function with Array Inputs

Write a JavaScript program that takes a variadic function and returns a closure
that accepts an array of arguments to map to the inputs of the function.

Note: Use closures and the spread operator (...) to map the array of arguments to the inputs of the function.

 - Use a closure and the spread operator (...) to map the array of arguments to the inputs of the function.

`)

describe('#example278', () => {
    it(`Input arguments are Math.max, [1, 2, 3] #1`, () => {
        expect(example278(Math.max, [1, 2, 3])).equal(3)
    })
})
