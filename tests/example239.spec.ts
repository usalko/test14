// tests/example239.spec.ts
import { expect } from 'chai'
import { example239 } from '../src/example239'

console.log(`Fundamental(ES6)-Part-I
89. Negate Predicate Function

Write a JavaScript program to negates a predicate function.

Note: Take a predicate function and apply the not operator (!) to it with its arguments.

 - Take a predicate function and apply the not operator (!) to it with its arguments.

`)

describe('#example239', () => {
    it(`Input argument is [1, 2, 3, 4, 5, 6], (n: any) => n % 2 === 0 #1`, () => {
        expect(example239([1, 2, 3, 4, 5, 6], (n: any) => n % 2 === 0)).deep.equal([1, 3, 5])
    })
})
