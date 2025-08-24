// tests/example368.spec.ts
import { expect } from 'chai'
import { example368, } from '../src/example368'


console.log(`Fundamental(ES6)-Part-II
228. Log Function Name


Write a JavaScript program to log the name of a function.

 
 - Use console.debug() and the name property of the passed function to log the function's name to the debug channel of the console.
 - Return the given function fn.


`)

describe('#example368', () => {
    it(`Input argument is: Math.max #1`, () => {
        expect(example368(Math.max)).equal('max')
    })
})
