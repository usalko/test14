// tests/example344.spec.ts
import { expect } from 'chai'
import { example344 } from '../src/example344'


console.log(`Fundamental(ES6)-Part-II
204. Check Native Boolean


Write a JavaScript program that checks if the given argument is a native Boolean element.


 - Use typeof to check if a value is classified as a boolean primitive.


`)

describe('#example344', () => {
    it(`Input argument is null #1`, () => {
        expect(example344(null)).equal(false)
    })
    it(`Input argument is true #1`, () => {
        expect(example344(true)).equal(true)
    })
})
