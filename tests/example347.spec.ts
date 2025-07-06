// tests/example347.spec.ts
import { expect } from 'chai'
import { example347 } from '../src/example347'


console.log(`Fundamental(ES6)-Part-II
207. Check Absolute URL


Write a JavaScript program that returns true if the given string is an absolute URL, false otherwise.


 - Use RegExp.prototype.test() to test if the string is an absolute URL.


`)

describe('#example347', () => {
    it(`Input arguments is 'https://google.com' #1`, () => {
        expect(example347('https://google.com')).equal(true)
    })
    it(`Input arguments is 'ftp://www.myserver.net' #2`, () => {
        expect(example347('ftp://www.myserver.net')).equal(true)
    })
    it(`Input arguments is '/foo/bar' #3`, () => {
        expect(example347('/foo/bar')).equal(false)
    })
})
