// tests/example115.spec.ts
import { expect } from 'chai'
import { example115 } from '../src/example115'

console.log(`
Write a JavaScript program to check whether a matrix is a diagonal matrix or not.
In linear algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal
are all zero (the diagonal from the upper left to the lower right). 
Example:
[1, 0, 0], [0, 2, 0], [0, 0, 3] ]) = true
[1, 0, 0], [0, 2, 3], [0, 0, 3] ]) = false
`)
describe('#example115', () => {
    it(`Input matrix is [ [1, 0, 0], [0, 2, 0], [0, 0, 3] ] #1`, () => {
        expect(example115([ [1, 0, 0], [0, 2, 0], [0, 0, 3] ])).equal(true)
    })
    it(`Input matrix is [ [1, 0, 0], [0, 2, 0], [0, 0, 3] ] #2`, () => {
        expect(example115([ [1, 0, 0], [0, 2, 3], [0, 0, 3] ])).equal(false)
    })
})