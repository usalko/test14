// tests/example192.spec.ts
import { expect } from 'chai'
import { example192 } from '../src/example192'

console.log(`Fundamental(ES6)-Part-I
42. Custom Coalesce Function


Write a JavaScript program to get a customized coalesce function that returns the first argument that
returns true from the provided argument validation function.
`)

describe('#example192', () => {
    it(`Input arguments are: undefined, null, NaN, '', 'Good day' #1`, () => {
        expect(example192(undefined, null, NaN, '', 'Good day')).equal('Good day')
    })
})
