// tests/example165.spec.ts
import { expect } from 'chai'
import { example165 } from '../src/example165'

console.log(`Fundamental(ES6)-Part-I
15. Min-Max Value of Array with Function

Write a JavaScript program to return the minimum-maximum value of an array,
after applying the provided function to set a comparing rule.
`)
describe('#example165', () => {
    it(`Input string is "大家好" #1`, () => {
        expect(example165('大家好')).equal(9)
    })
})
