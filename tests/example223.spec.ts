// tests/example223.spec.ts
import { expect } from 'chai'
import { example223 } from '../src/example223'

console.log(`Fundamental(ES6)-Part-I
73. Difference Between Two Arrays with Mapping

Write a JavaScript program to return the difference between two arrays, after applying the provided function to each array element of both.
 - Create a Set by applying fn to each element in b.
 - Use Array.prototype.map() to apply fn to each element in a.
 - Use Array.prototype.filter() in combination with fn on a to only keep values not contained in b, using Set.prototype.has().
`)

describe('#example223', () => {
    it(`Input arguments are [2.1, 1.2], [2.3, 3.4], Math.floor #1`, () => {
        expect(example223([2.1, 1.2], [2.3, 3.4], Math.floor)).deep.equal([1.2])
    })
    it(`Input arguments are [{ x: 2 }, { x: 1 }], [{ x: 1 }], (v: any) => v.x #1`, () => {
        expect(example223([{ x: 2 }, { x: 1 }], [{ x: 1 }], (v: any) => v.x)).deep.equal({ x: 2 })
    })
})
