// tests/example345.spec.ts
import { expect } from 'chai'
import { example345 } from '../src/example345'


console.log(`Fundamental(ES6)-Part-II
205. Check If Array


Write a JavaScript program to check if the provided argument is an array (i.e. iterable).


 - Check if the provided argument is not null and that its Symbol.iterator property is a function.


`)

describe('#example345', () => {
    it(`Input argument is document.querySelectorAll('.className') #1`, () => {
        expect(example345(document.querySelectorAll('.className'))).equal(false)
    })
    it(`Input argument is 'abc' #1`, () => {
        expect(example345('abc')).equal(true)
    })
    it(`Input argument is null #1`, () => {
        expect(example345(null)).equal(false)
    })
})
