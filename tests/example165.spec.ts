// tests/example165.spec.ts
import { expect } from 'chai'
import { example165 } from '../src/example165'

console.log(`Fundamental(ES6)-Part-I
15. Min-Max Value of Array with Function

Write a JavaScript program to return the minimum-maximum value of an array,
after applying the provided function to set a comparing rule.
`)
describe('#example165', () => {
    it(`Input array is [35, 60, 2, 10, 25, 1], input function is {(x, y) => x - y} #1`, () => {
        expect(example165([35, 60, 2, 10, 25, 1], (x, y) => x - y)).deep.equal([1, 60])
    })
})
