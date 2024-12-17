// tests/example151.spec.ts
import { expect } from 'chai'
import { example151 } from '../src/example151'

console.log(`Fundamental(ES6)-Part-I
1. Compare Objects for Equivalent Properties

Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.
`)
describe('#example151', () => {
    it(`Input object 1 is {name: 'A', surname: 'B'}, object 2 is {name: 'C', surname: 'D'} #1`, () => {
        expect(example151({name: 'A', surname: 'B'}, {name: 'C', surname: 'D'})).equal(false)
    })
    it(`Input object 1 is {age: 45}, object 2 is {age: 45} #1`, () => {
        expect(example151({age: 45}, {age: 45})).equal(true)
    })
})
