// tests/example372.spec.ts
import { expect } from 'chai'
import { example372, } from '../src/example372'


console.log(`Fundamental(ES6)-Part-II
232. Move First Argument Last


Write a JavaScript program that takes a function as an argument, then makes the first argument the last.


 - Use argument destructuring and a closure with variadic arguments.
 - Splice the first argument, using the spread operator (...), to make it the last before applying the rest.

`)

describe('#example372', () => {
    it(`Input arguments are: Object.assign, { name: 'John Smith' }, {} #1`, () => {
        expect(example372(Object.assign)({ name: 'John Smith' }, {})).deep.equal({ name: 'John Smith' })
    })
})
