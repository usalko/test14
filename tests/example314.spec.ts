// tests/example314.spec.ts
import { expect } from 'chai'
import { example314 } from '../src/example314'


console.log(`Fundamental(ES6)-Part-I
174. Convert NodeList to Array


Write a JavaScript program to convert a NodeList into an array.


 - Use spread operator (...) inside new array to convert a NodeList to an array.

`)

describe('#example314', () => {
    it(`Input argument is document.childNodes #1`, () => {
        expect(example314(document.childNodes)).equal([{},{}])
    })
})
