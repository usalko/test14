// tests/example121.spec.ts
import { expect } from 'chai'
import { example121 } from '../src/example121'

console.log(`
Write a JavaScript program to check whether a given matrix is lower triangular or not. 
Note: A square matrix is called lower triangular if all the entries above the main diagonal are zero.
`)
describe('#example121', () => {
    it(`Input matrix is [[1, 0], [1, 1]] #1`, () => {
        expect(example121([[1, 0], [1, 1]])).equal(true)
    })
    it(`Input matrix is [[1, 1], [1, 1]] #1`, () => {
        expect(example121([[1, 1], [1, 1]])).equal(false)
    })
    it(`Input matrix is [[1, 1], [0, 1]] #1`, () => {
        expect(example121([[1, 1], [0, 1]])).equal(false)
    })
})