// tests/example214.spec.ts
import { expect } from 'chai'
import { example214 } from '../src/example214'

console.log(`Fundamental(ES6)-Part-I
64. Get First Non-Null/Undefined Argument

Write a JavaScript program to get the first non-null / undefined argument.
`)

describe('#example214', () => {
    it(`Input input arguments are null, undefined, 1, true, undefined, 3 #1`, () => {
        expect(example214(null, undefined, 1, true, undefined, 3)).equal(1)
    })
})
