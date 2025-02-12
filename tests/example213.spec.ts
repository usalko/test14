// tests/example213.spec.ts
import { expect } from 'chai'
import { example213 } from '../src/example213'

console.log(`Fundamental(ES6)-Part-I
63. Clone Regular Expression

Write a JavaScript program to clone a given regular expression.
Use new RegExp(), RegExp.prototype.source and RegExp.prototype.flags to clone the given regular expression.
`)

describe('#example213', () => {
    it(`Input input regexp is (\d+)wd #1`, () => {
        const initialRegexp = /(\d+)wd/
        expect(example213(initialRegexp)).not.equal(initialRegexp)
    })
})
