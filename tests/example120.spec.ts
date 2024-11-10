// tests/example120.spec.ts
import { expect } from 'chai'
import { example120 } from '../src/example120'

console.log(`
Write a JavaScript program to check if a point lies strictly inside the circle. 
Input:
Center of the circle (x, y)
Radius of circle: r
Point inside a circle (a, b)
`)
describe('#example120', () => {
    it(`Input center of the circle is [1, 1], input radius is 1, input point is [0.5, 0.5] #1`, () => {
        expect(example120([1, 1], 1, [0.5, 0.5])).equal(true)
    })
    it(`Input center of the circle is [1, 1], input radius is 1, input point is [0, 0] #1`, () => {
        expect(example120([1, 1], 1, [0, 0])).equal(false)
    })
})