// tests/example184.spec.ts
import { expect, assert, Assertion } from 'chai'
import { example184 } from '../src/example184'

console.log(`Fundamental(ES6)-Part-I
34. Random Integer in Range

Write a JavaScript program to generate a random integer in the specified range.
`)

Assertion.addMethod('isInteger', function (message?: string) {
    //Check if value is integer
    new Assertion(Number.isInteger(this._obj), message, assert, true).to.true
})

describe('#example184', () => {
    it(`Input range is 1, 100 #1`, () => {
        expect(example184(1, 100)).lte(100).gte(1).isInteger()
    })
})
