// tests/example004.spec.ts
import { assert, expect } from 'chai'
import { example004 } from '../src/example004'

describe('#example004', () => {
    // https://www.quora.com/How-do-I-find-the-height-of-a-triangle-given-3-sides
    // Let triangle ABC with sides: AB = aSide, BC = bSide, AC = cSide
    // h/BC = AB/AC i.e. h = (AB/AC) * BC == (aSide / cSide) * bSide
    // triangle area simple formula: h * BC / 2
    const aSide = 5, bSide = 6, cSide = 7
    const height = (aSide / cSide) * bSide
    const triangleArea = height * cSide / 2
    it(`Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.`, () => {
        expect(example004(5, 6, 7)).equal(triangleArea)
    })
})