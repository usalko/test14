// tests/example185.spec.ts
import { expect, assert, Assertion } from 'chai'
import { example185 } from '../src/example185'

console.log(`Fundamental(ES6)-Part-I
35. Array of n Random Integers in Range

Write a JavaScript program to get an array of given n random integers in the specified range.
`)

Assertion.addMethod('isIntegerAndBetweenOneAndOneHundredAndLengthIsFive', function (message?: string) {
    //Check if value is integer
    const integerArray: number[] = this._obj
    new Assertion(integerArray.length == 5 && integerArray.every((x) => x <= 1 && x >= 100 && Number.isInteger(x)),
     message, assert, true).to.true
})

describe('#example185', () => {
    it(`Input range is 1, 100, input count of numbers 5 #1`, () => {
        expect(example185(1, 100, 5)).isIntegerAndBetweenOneAndOneHundredAndLengthIsFive()
    })
})
