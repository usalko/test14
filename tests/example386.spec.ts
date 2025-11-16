// tests/example386.spec.ts
import { assert, expect } from 'chai'
import { example386, } from '../src/example386'


console.log(`Fundamental(ES6)-Part-II
246. Degrees to Radians

Write a JavaScript program to convert angles from degrees to radians.

 - Use Math.PI and the degree to radian formula to convert the angle from degrees to radians.

`)

describe('#example386', () => {
    it(`Input argument is 90 #1`, () => {
        expect(example386(90)).equal(1.5707963267948966)
    })
    it(`Input argument is 30 #1`, () => {
        expect(example386(30)).equal(0.5235987755982988)
    })
})
