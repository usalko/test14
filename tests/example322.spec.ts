// tests/example322.spec.ts
import { expect } from 'chai'
import { example322, example322v2 } from '../src/example322'


console.log(`Fundamental(ES6)-Part-I
182. Join Array with End Separator


Write a JavaScript program to join all elements of an array into a string and return this string.
Use a separator and an end separator.


 - Use Array.prototype.reduce() to combine elements into a string.
 - Omit the second argument, separator, to use a default separator of ','.
 - Omit the third argument, end, to use the same value as separator by default.

`)

describe('#example322', () => {
    it(`Input arguments are ['pen', 'pineapple', 'apple', 'pen'], ',', '&' #1`, () => {
        expect(example322(['pen', 'pineapple', 'apple', 'pen'], ',', '&')).equal('pen,pineapple,apple&pen')
    })
    it(`Input arguments are ['pen', 'pineapple', 'apple', 'pen'], ',' #2`, () => {
        expect(example322(['pen', 'pineapple', 'apple', 'pen'], ',', '&')).equal('pen,pineapple,apple&pen')
    })
    it(`Input arguments are 'pen', 'pineapple', 'apple', 'pen' #2`, () => {
        expect(example322(['pen', 'pineapple', 'apple', 'pen'], ',', '&')).equal('pen,pineapple,apple&pen')
    })
})
