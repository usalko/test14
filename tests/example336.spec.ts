// tests/example336.spec.ts
import { expect } from 'chai'
import { example336 } from '../src/example336'


console.log(`Fundamental(ES6)-Part-II
196. Check If Null


Write a JavaScript program that will return true if the specified value is null, false otherwise.


 - Use the strict equality operator to check if the value of val is equal to null.


`)

describe('#example336', () => {
    it(`Input argument is null #1`, () => {
        expect(example336(null)).equal(true)
    })
    it(`Input argument is 1 #2`, () => {
        expect(example336(1)).equal(false)
    })
})
