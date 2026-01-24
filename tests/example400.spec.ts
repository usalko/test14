// tests/example398.spec.ts
import { assert, expect } from 'chai'
import { example400 } from '../src/example400'


console.log(`Fundamental(ES6)-Part-II
260. Binomial Coefficient

Write a JavaScript program to evaluate the binomial coefficients of two integers n and k.

    - Use Number.isNaN() to check if any of the two values is NaN.
    - Check if k is less than 0, greater than or equal to n, equal to 1 or n - 1 and return the appropriate result.
    - Check if n - k is less than k and switch their values accordingly.
    - Loop from 2 through k and calculate the binomial coefficient.
    - Use Math.round() to account for rounding errors in the calculation.

`)

describe('#example400', () => {
    it(`Input arguments are: 8, 2 #1`, () => {
        expect(example400(8, 2)).equal(28)
    })
})
