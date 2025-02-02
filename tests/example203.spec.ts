// tests/example203.spec.ts
import { expect } from 'chai'
import { example203 } from '../src/example203'

console.log(`Fundamental(ES6)-Part-I
53. Initialize 2D Array with Size and Value

Write a JavaScript program to initialize a two-dimensional array of given size and value.
`)

describe('#example203', () => {
    it(`Input size: 2, input value is: 6 #1`, () => {
        expect(example203(2, 6)).deep.equal([[6, 6], [6, 6]])
    })
})
