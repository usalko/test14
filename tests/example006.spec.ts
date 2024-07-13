// tests/example006.spec.ts
import { assert, expect } from 'chai'
import { example006 } from '../src/example006'

describe('#example006', () => {
    it(`Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.`, () => {
        expect(example006(2000)).equal(true)
    })
})