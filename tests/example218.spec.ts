// tests/example218.spec.ts
import { expect } from 'chai'
import { example218 } from '../src/example218'

console.log(`Fundamental(ES6)-Part-I
68. Converge Function with Branching Functions

Write a JavaScript program that accepts a converging function and a list of branching functions.
It returns a function that applies each branching function to the arguments.
The results of the branching functions are passed as arguments to the converging function.
`)

describe('#example218', () => {
    it(`Input input arguments (...args) => args.reduce((result, x) => result + x), [(b) => b + 2, (a) => a + 1]  #1`, () => {
        expect(example218(
            (...args: any[]): any => {
                return args.reduce((result, x) => result + x)
            },
            (b: any): any => {
                return b + 2
            },
            (a: any): any => {
                return a + 1
            },
        )(1)).equal(5)
    })
})
