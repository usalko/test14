// tests/example004.spec.ts
import { assert, expect } from 'chai'
import { example004 } from '../src/example004'

describe('#example004', () => {
    it(`Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.`, () => {
        expect(example004(5, 6, 7)).equal(34)
    })
})