// tests/example326.spec.ts
import { expect } from 'chai'
import { example326 } from '../src/example326'


console.log(`Fundamental(ES6)-Part-I
186. Check If Symbol


Write a JavaScript program to check if the given argument is a symbol.


 - Use typeof to check if a value is classified as a symbol primitive.
`)

describe('#example326', () => {
    it(`Input argument is Symbol('x') #1`, () => {
        expect(example326(Symbol('x'))).equal(true)
    })
    it(`Input argument is Symbol(1) #2`, () => {
        expect(example326(Symbol(1))).equal(true)
    })
    it(`Input argument is Symbol(')') #3`, () => {
        expect(example326(Symbol(')'))).equal(true)
    })
    it(`Input argument is null #4`, () => {
        expect(example326(null)).equal(false)
    })
})
