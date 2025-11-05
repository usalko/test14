// tests/example385.spec.ts
import { assert, expect } from 'chai'
import { example385, } from '../src/example385'


console.log(`Fundamental(ES6)-Part-II
245. Invoke Function After Delay

Write a JavaScript program that invokes the provided function after a few milliseconds.

 - Use setTimeout() to delay execution of fn.
 - Use the spread (...) operator to supply the function with an arbitrary number of arguments.

`)

describe('#example385', () => {
    // Call the 'delay' function with a function to be executed, a delay of 1000ms, and additional arguments
    it(`Input arguments 1000, () => string #1`, () => {
        const currentTimeMillis = Date.now()
        expect(example385(1000, () => 'later')).equal('later')
        const executionTime = Date.now() - currentTimeMillis
        assert.isTrue(executionTime > 1000)
    })
})
