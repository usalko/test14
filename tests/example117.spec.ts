// tests/example117.spec.ts
import { expect } from 'chai'
import { example117 } from '../src/example117'

console.log(`
Write a JavaScript program to check whether a given matrix is an identity matrix. 
Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of size n is the n ? n square matrix with ones on the main diagonal and zeros elsewhere.
[[1, 0, 0], [0, 1, 0], [0, 0, 1]] -> true
[[1, 0, 0], [0, 1, 0], [1, 0, 1]] -> false
`)
describe('#example117', () => {
    it(`Input matrix is [[1, 0, 0], [0, 1, 0], [0, 0, 1]] #1`, () => {
        expect(example117([[1, 0, 0], [0, 1, 0], [0, 0, 1]])).equal(true)
    })
    it(`Input matrix is [[1, 0, 0], [0, 1, 0], [1, 0, 1]] #2`, () => {
        expect(example117([[1, 0, 0], [0, 1, 0], [1, 0, 1]])).equal(false)
    })
})