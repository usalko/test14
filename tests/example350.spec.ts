// tests/example350.spec.ts
import { expect } from 'chai'
import { example350 } from '../src/example350'


console.log(`Fundamental(ES6)-Part-II
210. Common Elements After Mapping


Write a JavaScript program to get a list of elements in both arrays, after applying the provided function to each array element of both.


 - Use Array.prototype.filter() and Array.prototype.findIndex() in combination with the provided comparator to determine intersecting values.


`)

describe('#example350', () => {
    it(`Input arguments are [2.1, 1.2], [2.3, 3.4], Math.floor #1`, () => {
        expect(example350([2.1, 1.2], [2.3, 3.4], Math.floor)).deep.equal([2.1])
    })
})
