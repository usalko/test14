// tests/example313.spec.ts
import { expect } from 'chai'
import { example313 } from '../src/example313'


console.log(`Fundamental(ES6)-Part-I
173. Get nth Array Element


Write a JavaScript program to get the nth element of a given array of elements.


 - Use Array.prototype.slice() to get an array containing the nth element at the first place.
 - If the index is out of bounds, return undefined.
 - Omit the second argument, n, to get the first element of the array.

`)

describe('#example313', () => {
    it(`Input arguments are ['a', 'b', 'c'], 1 #1`, () => {
        expect(example313(['a', 'b', 'c'], 1)).equal('b')
    })
    it(`Input arguments are ['a', 'b', 'b'], -3 #1`, () => {
        expect(example313(['a', 'b', 'b'], -3)).equal('a')
    })
})
