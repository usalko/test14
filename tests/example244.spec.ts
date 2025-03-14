// tests/example244.spec.ts
import { expect } from 'chai'
import { example244 } from '../src/example244'

console.log(`Fundamental(ES6)-Part-I
94. Move Array Elements to End

Write a JavaScript program to move the specified amount of elements to the end of the array.

 - Use Array.prototype.slice() twice to get the elements after the specified index and the elements before that.
 - Use the spread operator (...) to combine the two into one array.
 - If offset is negative, the elements will be moved from end to start.

`)

describe('#example244', () => {
    it(`Input arguments are [1, 2, 3, 4, 5], 2 #1`, () => {
        expect(example244([1, 2, 3, 4, 5], 2)).deep.equal([3, 4, 5, 1, 2])
    })
    it(`Input arguments are [1, 2, 3, 4, 5], 2 #1`, () => {
        expect(example244([1, 2, 3, 4, 5], -2)).deep.equal([4, 5, 1, 2, 3])
    })
})
