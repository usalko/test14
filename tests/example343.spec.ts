// tests/example343.spec.ts
import { expect } from 'chai'
import { example343 } from '../src/example343'


console.log(`Fundamental(ES6)-Part-II
203. Check Browser Environment


Write a JavaScript program to determine if the current runtime environment is a browser.
This is so that front-end modules can run on the server (Node) without errors.


 - Use Array.prototype.includes() on the typeof values of both window and document 
    (globals usually only available in a browser environment unless they were explicitly defined),
    which will return true if one of them is undefined.
 - typeof allows globals to be checked for existence without throwing a ReferenceError.
 - If both of them are not undefined, then the current environment is assumed to be a browser.


`)

describe('#example343', () => {
    it(`No input arguments #1`, () => {
        expect(example343()).equal(false)
    })
})
