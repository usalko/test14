// tests/example352.spec.ts
import { expect } from 'chai'
import { example352, example352_2 } from '../src/example352'


console.log(`Fundamental(ES6)-Part-II
212. n-Dimensional Array


Write a JavaScript program to create a n-dimensional array with a given value.


 - Use recursion.
 - Use Array.from(), Array.prototype.map() to generate rows where each is a new array initialized using initializeNDArray().

`)

describe('#example352', () => {
    it(`Input arguments are 1, 3 #1`, () => {
        expect(example352(1, 3)).deep.equal([1, 1, 1])
    })
    it(`Input arguments are 5, 2, 2, 2 #1`, () => {
        expect(example352(5, 2, 2, 2)).deep.equal([[[5, 5], [5, 5]], [[5, 5], [5, 5]]])
    })
    it(`Input arguments are 1, 3 #1`, () => {
        expect(example352_2(1, 3)).deep.equal([1, 1, 1])
    })
    it(`Input arguments are 5, 2, 2, 2 #1`, () => {
        expect(example352_2(5, 2, 2, 2)).deep.equal([[[5, 5], [5, 5]], [[5, 5], [5, 5]]])
    })
})
