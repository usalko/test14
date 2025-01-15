// tests/example186.spec.ts
import { expect } from 'chai'
import { example186 } from '../src/example186'

console.log(`Fundamental(ES6)-Part-I
36. Invoke Functions with Arguments


Write a JavaScript program to create a function that invokes each provided function with the arguments
it receives and returns the results.
`)

describe('#example186', () => {
    it(`Input function is function(a: number): bool { return a > 0 }, input argument is 1 #1`, () => {
        expect(example186([(a) =>  a > 0, (a) =>  a < 0], [1, -1])).deep.equal([true, true])
    })
})
