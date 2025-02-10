// tests/example209.spec.ts
import { expect } from 'chai'
import { example209 } from '../src/example209'

console.log(`Fundamental(ES6)-Part-I
59. Invoke Function in Given Context

Write a JavaScript program to create a function that invokes fn in a given context.
Optionally add any additional variables to the arguments beginning.
`)

describe('#example209', () => {
    it(`Input function is: (x) => boolean, input context is: {id: 1}, input args is 2, 3 #1`, () => {
        expect(example209((x: number, y: number): number => {
            return this.id + x + y
        },{id: 1})(2, 3)).equal(6)
    })
})
