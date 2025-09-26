// tests/example383.spec.ts
import { expect } from 'chai'
import { example383, } from '../src/example383'


console.log(`Fundamental(ES6)-Part-II
243. Distance Between Points


Write a JavaScript program to get the distance between two given points.


 - Use Math.hypot() to calculate the Euclidean distance between two points.


`)

describe('#example383', () => {
    it(`Input arguments are 1, 1, 2, 3 #1`, () => {
        expect(example383(1, 1, 2, 3)).equal(2.23606797749979)
    })
    it(`Input arguments are -1, -1, 2, 3 #1`, () => {
        expect(example383(-1, -1, 2, 3)).equal(5)
    })
})
