// tests/example349.spec.ts
import { expect } from 'chai'
import { example349 } from '../src/example349'


console.log(`Fundamental(ES6)-Part-II
209. Common Elements by Comparator


Write a JavaScript program to get a list of elements in both arrays, using a provided comparator function.


 - Use Array.prototype.filter() and Array.prototype.findIndex() in combination with the provided comparator to determine intersecting values.


`)

describe('#example349', () => {
    it(`Input arguments are [1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b) #1`, () => {
        expect(example349([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a: any, b: any) => Math.round(a) === Math.round(b))).deep.equal([1.5, 3, 0])
    })
})
